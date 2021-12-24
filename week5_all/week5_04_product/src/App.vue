<template>
  <div id="app">
    <main class="main mx-auto">
      <div class="base">
        <Product
          v-for="(item, index) in productData"
          :key="item.desc"
          :pd-data="item"
          :pd-index="index"
        />
      </div>
    </main>
  </div>
</template>

<script>
import Product from './components/Product';

export default {
  name: 'App',
  data() {
    return {
      productData: '',
    };
  },
  created() {
    this.axios
      .get('/data/data.json')
      .then((res) => {
        this.productData = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  components: {
    Product,
  },
};
</script>

<style lang="scss">
@import './assets/sass/all';

.main {
  width: 1230px;
}
</style>
