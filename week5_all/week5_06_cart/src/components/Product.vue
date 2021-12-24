<template>
  <section class="product text-center">
    <header class="product__head">
      <h2 class="product__tit">{{ productInfo.name }}</h2>
    </header>

    <div class="product__cntr">
      <p class="product__desc">{{ productInfo.desc }}</p>
      <div class="product__price">
        ${{ productInfo.price.toLocaleString('en-US') }}
      </div>
    </div>

    <div class="product__img">
      <figure class="img__inner">
        <img
          :src="productInfo.src"
          :alt="productInfo.name"
          class="img-resp"
          width="640"
          height="640"
        />
      </figure>
    </div>

    <div class="product__btn btn">
      <button
        type="button"
        class="btn__minus"
        @click="countNum(-1)"
        :disabled="isDisabledMinus"
      >
        -
      </button>
      <div class="product__count">
        {{ count }}
      </div>
      <button
        id="Plus"
        type="button"
        class="btn__plus"
        @click="countNum(1)"
        :disabled="isDisabledPlus"
      >
        +
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Product',
  props: ['productInfo'],
  data() {
    return {
      count: 0,
    };
  },

  methods: {
    countNum(n) {
      if (this.count + n < 0 || this.count + n > 5) {
        return;
      }
      this.count += n;
      this.$emit('getCount', n);
    },
  },

  computed: {
    isDisabledMinus() {
      return this.count === 0;
    },
    isDisabledPlus() {
      return this.count === 5;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.product {
  width: 285px;
  margin-right: 20px;
  border: 1px solid #dddddd;
  padding: 1rem;
  border-radius: 5px;

  &__desc {
    font-size: 0.75rem;
  }

  &__price {
    font-size: 2rem;
    color: #ff007c;
    font-weight: bold;
  }

  &__count {
    font-size: 1.5rem;
  }
}

.btn {
  display: flex;
  justify-content: space-around;
  align-items: center;

  &__minus,
  &__plus {
    display: block;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1.5rem;
    border: 1px solid #ddd;
    background-color: white;

    &:disabled {
      background-color: #f7f7f7;
    }
  }
}
</style>
