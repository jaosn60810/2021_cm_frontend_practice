<template>
  <div id="app">
    <main class="main mx-auto">
      <div class="base">
        <Product v-for="item in productData" :key="item.name" :pd-data="item" />
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
      productData: [],
    };
  },
  components: {
    Product,
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
};
</script>

<style lang="scss">
@import './assets/sass/all';

.main {
  width: 1230px;
}

.base {
  display: flex;
  flex-wrap: wrap;
}
</style>
