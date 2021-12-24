<template>
  <ul class="pic__ls row">
    <li class="pic__item" v-for="item in data" :key="item.actId">
      <PicItem :item="item" />
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
