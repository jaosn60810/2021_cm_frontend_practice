<template>
  <div id="App">
    <div class="container mx-auto">
      <aside>
        <Pagination
          :data="uniqueCities"
          :current-city="currentCity"
          @update:city="selfCity"
        />
      </aside>

      <main><Pic :data="filterData" :current-city="currentCity" /></main>
    </div>
  </div>
</template>

<script>
import Pic from "@/components/Pic/Pic";
import Pagination from "@/components/Pagination/Pagination";

export default {
  name: "App",

  components: {
    Pic,
    Pagination
  },

  data() {
    return {
      activities: [],
      currentCity: ""
    };
  },

  computed: {
    // 去除重複的縣市
    uniqueCities() {
      let cities = this.activities.map(item => item.place[0]);
      return [...new Set(cities)];
    },

    // 如果有選擇縣市，則顯示該縣市活動，否則顯示全部
    filterData() {
      let arr = this.activities.filter(
        item => item.place[0] === this.currentCity
      );
      return this.currentCity !== "" ? arr : this.activities;
    }
  },

  // 可以藉由 inject 拿到這裡的資料
  provide() {
    return {
      getCurrentCity: () => this.currentCity
    };
  },

  methods: {
    async getData() {
      try {
        const api =
          "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindFestivalTypeJ";
        const res = await this.$http.get(api).catch(err => console.log(err));
        const data = await res.data;
        // 資料處裡
        this.setData(data);
      } catch (err) {
        console.log(err);
      }
    },

    // 資料處裡
    setData(data) {
      // 抓取現在時間
      const now = new Date();
      // 加上需要的資料
      data.forEach(item => {
        const myItem = item;
        // 加上倒數幾天
        myItem.countdown = this.getCountdown(now, item.endTime);
        // 加上縣市
        myItem.place = this.getPlace(item.cityName);
      });
      this.activities = data;
    },

    // 計算倒數天數
    getCountdown(now, endTime) {
      const end = new Date(endTime);
      return Math.ceil((end - now) / (1000 * 60 * 60 * 24)) + 1;
    },

    // 取得縣市名稱
    getPlace(str) {
      // \s代表任意空白符號，包括空白(space) ，換行(new line) \n，tab \t符號。
      // +代表前面的字符可出現一次或多次。
      return str.split(/\s+/);
    },

    // 取得導覽列點選的縣市
    selfCity(val) {
      console.log(val);
      this.currentCity = val;
    }
  },

  // 取得資料
  created() {
    this.getData();
  }
};
</script>

<style>
body {
  font-family: Arial, Helvetica, "微軟正黑體", sans-serif;
  background-color: #f0ede5;
}

body,
button {
  font-size: 100%;
}

.row {
  margin-left: -12px;
  margin-right: -12px;
}

.container {
  max-width: 1200px;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.img-resp {
  max-width: 100%;
  height: auto;
  vertical-align: bottom;
}
</style>
