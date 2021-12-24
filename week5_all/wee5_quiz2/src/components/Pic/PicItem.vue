<template>
  <div class="gutter">
    <!-- 活動資料 -->
    <div class="pic__intro">
      <!-- 活動名稱 -->
      <h2 class="pic__tit">{{ item.actName }}</h2>
      <!-- 如果沒有選擇縣市，則顯示縣市 -->
      <p class="pic__desc pic__desc--city" v-if="currentCity === ''">
        {{ item.place[0] }}
      </p>
      <!-- 如果資料物件的 place 屬性長度為 2 代表有鄉鎮市，則顯示鄉鎮市 -->
      <p class="pic__desc pic__desc--town" v-if="item.place.length > 1">
        {{ item.place[1] }}
      </p>
      <!-- 活動時間 -->
      <p class="pic__desc pic__desc--duration">
        {{ getDate(item.startTime) }} ~ {{ getDate(item.endTime) }}
      </p>
      <!-- 倒數天數 -->
      <div class="pic__countdown">
        倒數 <span class="pic__day">{{ item.countdown }}</span> 天
      </div>
    </div>

    <!-- 活動圖片 -->
    <figure class="imgContainer">
      <!-- loading="lazy" 延遲載入畫面外的圖片 -->
      <img
        loading="lazy"
        class="img-resp"
        :src="`https://cloud.culture.tw${item.imageUrl}`"
        :alt="item.actName"
        width="937"
        height="625"
      />
    </figure>
  </div>
</template>

<script>
export default {
  name: "PicItem",

  props: {
    item: {
      type: Object,
      required: true
    }
  },

  // 因為爺層使用 provide() 可以用 inject 直接拿到資料
  inject: ["getCurrentCity"],

  // 回傳現在選擇的縣市
  computed: {
    currentCity() {
      return this.getCurrentCity();
    }
  },

  methods: {
    // 將時間格式轉成以下 2021/12/17
    getDate(timer) {
      return new Date(timer).toLocaleDateString();
    }
  }
};
</script>

<style>
.pic__item {
  width: 33.33333%;
  padding: 12px;
  box-sizing: border-box;
}

.pic__item > a {
  text-decoration: none;
  color: #000;
}

.pic .gutter {
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
  height: 100%;
  background-color: #fff;
}

.pic__intro {
  margin: 12px;
}

.pic__tit {
  margin: 0;
  font-size: 1.2rem;
  font-weight: normal;
}

.pic__item .imgContainer {
  position: relative;
  margin: 0;
}

.pic__item > a .imgContainer::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #ffd1bc;
  /* 圖層混合笑效果 */
  mix-blend-mode: color;
  opacity: 0;
  transition: opacity 0.5s ease;
  content: "";
}

.pic__item > a:hover .imgContainer::before {
  opacity: 1;
}

.pic__item > a .pic__tit {
  transition: color 0.5s ease;
}

.pic__item > a:hover .pic__tit {
  color: rgb(204, 0, 0);
}

.pic .img-resp {
  /* 維持一個比例為 16:9 的矩形 */
  aspect-ratio: 16 / 9;
  /* 讓 img 能和 background-image 一樣調整位置和大小*/
  object-fit: cover;
  object-position: center;
}

.pic__countdown {
  z-index: 2;
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 6px;
  text-align: center;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  background-color: rgba(204, 0, 0, 0.7);
}

.pic__day {
  display: block;
  color: #fff;
  font-size: 1.5rem;
}

.pic__desc {
  margin: 0;
  margin-top: 6px;
}

.pic__desc--city,
.pic__desc--town {
  display: inline-block;
  vertical-align: middle;
}

.pic__desc--city {
  padding: 3px 6px;
  color: #fff;
  font-size: 13px;
  line-height: 1;
  background-color: #aaa;
}

.pic__desc--town {
  color: #333;
  font-size: 14px;
}

.pic__desc--duration {
  color: #aaa;
  font-size: 13px;
}
</style>
