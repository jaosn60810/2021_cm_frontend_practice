<template>
  <nav class="pagination">
    <div class="pagination__head">地區:</div>
    <div class="pagination__body">
      <!-- $attrs  孫組件取得爺組件的資料-->
      <!-- $listeners 爺組件直接觸發孫組件的事件 -->
      <PagItem v-bind="$attrs" v-on="$listeners" />
    </div>
  </nav>
</template>

<script>
import PagItem from "@/components/Pagination/PagItem";

export default {
  name: "Pagination",
  components: {
    PagItem
  }
};
</script>

<style>
.pagination {
  display: flex;
  align-items: center;
  padding: 12px;
  background-color: #fff;
}

.pagination__head {
  padding: 12px;
  width: 6%;
  box-sizing: border-box;
  border-right: solid 1px #ddd;
}

.pagination__body {
  width: 94%;
  padding: 12px;
  box-sizing: border-box;
}
</style>
