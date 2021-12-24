<template>
  <ul class="pic__ls row">
    <li class="pic__item" v-for="item in data" :key="item.actId">
      <!-- 如果有網站連結 用 a 標籤 -->
      <a :href="item.website" target="_blank" v-if="item.website">
        <PicItem :item="item" />
      </a>

      <!-- 否則不用 a 標籤 -->
      <PicItem :item="item" v-else />
    </li>
  </ul>
</template>

<script>
import PicItem from "@/components/Pic/PicItem";

export default {
  name: "PicList",

  props: {
    data: {
      type: Array,
      required: true
    }
  },

  components: {
    PicItem
  }
};
</script>

<style>
.pic__ls {
  padding-left: 0;
  margin-top: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
}
</style>
