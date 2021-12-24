<template>
  <div class="total text-center">
    <p class="total__tit">商品數量</p>
    <p class="total__count">{{ count }}</p>
  </div>
</template>

<script>
export default {
  name: 'Total',
  props: ['count'],
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.total {
  width: 80px;
  position: absolute;
  top: 0;
  right: 0;
  color: white;
  background-color: #ff007c;

  &__tit {
    background-color: #ff66b0;
    padding: 0.75rem 0.5rem;
    margin-top: 0;
    margin-bottom: 0;
  }

  &__count {
    font-size: 2rem;
    padding: 0.75rem 0.5rem;
    margin-top: 0;
    margin-bottom: 0;
  }
}
</style>
