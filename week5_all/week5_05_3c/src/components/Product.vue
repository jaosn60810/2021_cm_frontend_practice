<template>
  <section class="base__product product">
    <div class="product__head">
      <span class="product__label label__fast" v-if="pdData.hasFast">24H</span>
      <div class="product__imgs">
        <figure class="product__img">
          <img
            :src="pdData.src"
            :alt="pdData.name"
            class="img-resp"
            width="400"
            height="400"
          />
        </figure>
      </div>
    </div>
    <div class="product__cntr" :class="{ product__limit: pdData.hasLimit }">
      <div class="product__desc">
        <h2 class="product__tit">{{ pdData.name }}</h2>
        <p class="product__price" v-if="!pdData.hasLimit">
          ${{ pdData.price.toLocaleString('en-US') }}
        </p>
        <p class="product__limit-tit" v-else>{{ pdData.desc }}</p>
        <span class="product__label label__gift" v-if="pdData.hasGift"
          >贈品</span
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Product',
  props: ['pdData'],
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.product {
  width: 216px;
  margin: 15px;
  border: 1px solid #e4e4e4;
  border-radius: 5px;
  display: flex;
  flex-direction: column;

  &__head {
    padding: 10px;
  }

  &__tit {
    font-size: 1rem;
  }

  &__cntr {
    padding: 10px;
  }

  &__price {
    color: #ff0000;
    font-weight: bold;
  }

  &__label {
    font-size: 0.75rem;
    padding: 3px 5px;
    border-radius: 3px;
  }

  &__limit {
    background-color: #f26591;
    color: white;
    display: flex;
    align-items: center;
    text-align: center;
    height: 180px;

    &-tit {
      font-size: 1.5rem;
    }
  }

  &__desc {
    width: 100%;
  }
}

.label {
  &__fast {
    color: white;
    background-color: #cc0000;
  }

  &__gift {
    color: #ff0000;
    background-color: white;
    border: 1px solid #ff0000;
  }
}
</style>
