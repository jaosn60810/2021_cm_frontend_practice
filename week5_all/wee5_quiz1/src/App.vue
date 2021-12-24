<template>
  <div id="App">
    <div class="container mx-auto">
      <Pic :data="activities" />
    </div>
  </div>
</template>

<script>
import Pic from "@/components/Pic/Pic";

export default {
  name: "App",
  components: {
    Pic
  },
  data() {
    return {
      activities: []
    };
  },
  methods: {
    async getData() {
      try {
        const api =
          "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindFestivalTypeJ";
        const res = await this.$http.get(api).catch(err => console.log(err));
        const data = await res.data;
        this.activities = data;
      } catch (err) {
        console.log(err);
      }
    }
  },
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
