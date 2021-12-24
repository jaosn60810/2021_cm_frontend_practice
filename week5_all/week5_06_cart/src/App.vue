<template>
  <div id="app">
    <main class="main mx-auto">
      <div class="base">
        <Product
          v-for="item in productData"
          :key="item.name"
          :product-info="item"
          @getCount="getTotalCount"
        />
      </div>
      <Total :count="totalCount" />
    </main>
  </div>
</template>

<script>
import Product from './components/Product.vue';
import Total from './components/Total.vue';

export default {
  name: 'App',

  data() {
    return {
      productData: [],
      totalCount: 0,
    };
  },

  components: {
    Product,
    Total,
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

  methods: {
    getTotalCount(n) {
      this.totalCount += n;
    },
  },
};
</script>

<style lang="scss">
@import './assets/sass/all';

.main {
  width: 1220px;
}

.base {
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;
}
</style>
