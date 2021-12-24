<template>
  <div class="pic">
    <div class="pic__head">
      <h3>全部</h3>
    </div>
    <div class="pic__body">
      <PicList :data="data" />
    </div>
  </div>
</template>

<script>
import PicList from "@/components/Pic/PicList";

export default {
  name: "Pic",
  props: {
    data: {
      type: Array,
      required: true
    }
  },

  components: {
    PicList
  }
};
</script>

<style>
.pic__head h3 {
  padding-left: 12px;
  margin-bottom: 12px;
  line-height: 1;
  font-size: 1.5rem;
  border-left: solid 5px rgb(204, 0, 0);
}
</style>
