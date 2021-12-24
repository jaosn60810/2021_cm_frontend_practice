<template>
  <div id="app">
    <main class="main mx-auto">
      <section class="base" v-for="item in listData" :key="item.title">
        <div class="base__cntr">
          <header class="base__head">
            <a :href="item.url" target="_blank">
              <h2 class="base__tit">{{ item.title }}</h2>
            </a>
          </header>
          <p class="base__desc">{{ item.excerpt }}</p>
        </div>
        <div class="base__img">
          <figure class="img__inner">
            <a :href="item.url" target="_blank">
              <img
                :src="item.src"
                alt="item.title"
                class="img-resp"
                width="250"
                height="171"
            /></a>
          </figure>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      listData: [],
    };
  },
  created() {
    this.axios
      .get('/data/data.json')
      .then((response) => {
        this.listData = response.data;
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
  width: 800px;
}

.base {
  background-color: #fff;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  margin-top: 1rem;
  margin-bottom: 1rem;

  &__tit {
    font-size: 1.25rem;
    color: #007bff;
    @include single-ellipsis;
  }

  &__img {
    width: 30%;
  }

  &__cntr {
    padding: 1rem;
    width: 70%;
  }
}
</style>
