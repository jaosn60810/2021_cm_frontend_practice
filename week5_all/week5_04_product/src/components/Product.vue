<template>
  <section class="product" :class="{ product__lg: pdIndex === 0 }">
    <div class="product__cntr">
      <h2 class="product__brand">{{ pdData.brand }}</h2>
      <h3 class="product__feature">{{ pdData.feature }}</h3>
      <p class="product__desc">{{ pdData.desc.slice(0, 30) }}</p>
    </div>
    <figure class="product__img">
      <img
        :src="pdData.src"
        :alt="pdData.feature"
        class="img-resp"
        width="500"
        height="500"
      />
    </figure>
  </section>
</template>

<script>
export default {
  name: 'Product',
  props: ['pdData', 'pdIndex'],
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.product {
  position: relative;
  width: 277.5px;
  height: 277.5px;
  margin: 15px;
  float: left;
  overflow: hidden;

  &:hover {
    .product__img {
      transform: scale(1.2, 1.2);
    }

    .product__cntr {
      transform: translateY(0%);
    }

    .product__brand {
      color: #ffa500;
    }
  }

  &__lg {
    width: 585px;
    height: 585px;
  }

  &__img {
    transition: transform 0.5s;
  }

  &__brand {
    font-style: italic;
    font-weight: bold;
    color: #ccc;
    transition: color 0.5s;
  }

  &__cntr {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10;
    padding-top: 3rem;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 1rem;
    color: white;
    background: linear-gradient(transparent, rgba(0, 0, 0, 1));
    transform: translateY(35%);
    transition: transform 0.5s;
  }

  &__desc {
    height: 2rem;
  }
}
</style>
