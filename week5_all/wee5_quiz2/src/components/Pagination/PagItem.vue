<template>
  <div class="pagItemContainer">
    <!-- 如果沒有 currentCity 就顯示全部縣市活動 -->
    <button
      class="pag__item"
      type="button"
      @click="$emit('update:city', '')"
      :class="{ 'pag__item--active': currentCity === '' }"
    >
      全部
    </button>

    <!-- 如果有 currentCity 就顯示該縣市活動 -->
    <button
      class="pag__item"
      type="button"
      v-for="item in data"
      :key="item.actId"
      @click="$emit('update:city', item)"
      :class="{ 'pag__item--active': item === currentCity }"
    >
      {{ item }}
    </button>
  </div>
</template>

<script>
export default {
  name: "PagItem",

  // 因為父層使用 $attrs 讓此孫層能拿到爺層資料
  props: {
    data: {
      type: Array,
      required: true
    },
    currentCity: {
      type: String,
      require: true
    }
  }
};
</script>

<style>
.pagItemContainer {
  display: flex;
  flex-wrap: wrap;
}

.pag__item {
  margin-left: 10px;
  margin-right: 10px;
  padding: 0;
  line-height: 1;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.pag__item:hover {
  color: rgb(204, 0, 0);
}

.pag__item--active {
  color: rgb(204, 0, 0);
}
</style>
