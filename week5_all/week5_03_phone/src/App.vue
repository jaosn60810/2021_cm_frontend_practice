<template>
  <div id="app">
    <header class="header">
      <h1 class="header__tit text-center">iPhone 機型</h1>
    </header>

    <main
      class="main mx-auto"
      v-for="(item, index) in phoneData"
      :key="item.name"
    >
      <section
        class="base"
        :class="{
          'base__row--reverse': index % 2,
          'base__bottom--line': index !== phoneData.length - 1,
        }"
      >
        <div class="base__cntr">
          <header class="base__head">
            <h2 class="base__tit">{{ item.name }}</h2>
          </header>

          <ul class="base__list">
            <li class="list__item">
              推出年份：{{ item.date.split('/')[0] }} 年
            </li>
            <li class="list__item">容量：{{ item.capacity.join('、') }}</li>
            <li class="list__item">顏色：{{ item.color.join('、') }}</li>
            <li class="list__item">顏色：{{ item.model.join('、') }}</li>
          </ul>

          <p class="base__desc">
            {{ item.note }}
          </p>

          <footer class="base__footer">
            <p class="footer__desc">
              請參閱
              <a class="footer__link" :href="item.link" target="_blank"
                >{{ item.name }} 技術規格</a
              >。
            </p>
          </footer>
        </div>

        <div class="base__img">
          <figure class="img__inner">
            <img
              :src="item.src"
              :alt="item.name"
              class="img-resp"
              width="760"
              height="700"
            />
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
      phoneData: [],
    };
  },
  created() {
    this.axios
      .get('/data/data.json')
      .then((res) => {
        this.phoneData = res.data;
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
  width: 850px;
}

.header {
  &__tit {
    font-size: 3rem;
    margin-bottom: 100px;
  }
}

.base {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 12px 60px 12px;
  margin-top: 60px;

  &__bottom--line {
    border-bottom: 1px solid #ddd;
  }

  &__row--reverse {
    flex-direction: row-reverse;
  }

  &__tit {
    font-size: 2rem;
  }

  &__cntr {
    width: 400px;
  }

  &__img {
    width: 400px;
  }

  &__desc {
    font-size: 0.75rem;
    color: #666;
  }
}

.footer {
  &__desc {
    font-size: 0.75rem;
    color: #666;
  }

  &__link {
    color: #007bff;
  }
}
</style>
