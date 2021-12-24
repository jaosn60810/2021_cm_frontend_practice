<template>
  <div id="app">
    <header class="header">
      <h1 class="header__tit text-center">台灣水庫即時水情</h1>
    </header>
    <main class="main mx-auto">
      <section class="base" v-for="item in watersData" :key="item.id">
        <header class="base_head">
          <h2 class="base__tit text-center">{{ item.name }}</h2>
        </header>

        <div class="base__water water" :class="getState(item.percentage)">
          <h3 class="water__percentage text-center">
            {{ item.percentage.toFixed(2) }}%
          </h3>

          <div
            class="water__volume"
            :style="{ bottom: item.percentage + '%' }"
          ></div>

          <div class="water__cntr"></div>
        </div>

        <div class="base__cntr">
          <p class="base__available">
            有效蓄水量 : {{ item.baseAvailable }} 萬立方公尺
          </p>
          <p :class="getDaliyNetflowState(item.daliyNetflow)">
            {{ getDaliyNetflow(item.daliyNetflow, item.baseAvailable) }}
          </p>
          <p class="base__date">{{ item.updateAt }}</p>
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
      watersData: [],
    };
  },
  created() {
    this.axios
      .get('https://www.taiwanstat.com/waters/latest')
      .then((res) => {
        let data = res.data[0];
        Object.keys(data).forEach((item) => {
          this.watersData.push(data[item]);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    getState(val) {
      if (val < 30) {
        return 'water--low';
      } else if (val < 50) {
        return 'water--mid';
      } else {
        return 'water--high';
      }
    },
    getDaliyNetflow(daliy, base) {
      if (isNaN(daliy)) {
        daliy = 0;
      }
      let str = daliy < 0 ? '下降 ' : '上升 ';
      return '昨日水量' + str + Math.abs((daliy / base) * 100).toFixed(2) + '%';
    },
    getDaliyNetflowState(daily) {
      return daily < 0
        ? 'base__daliy-netflow--down'
        : 'base__daliy-netflow--up';
    },
  },
};
</script>

<style lang="scss">
@import './assets/sass/all';

.main {
  width: 1200px;
  display: flex;
  flex-wrap: wrap;
}

.base {
  width: 25%;
  padding: 1rem;

  &__tit {
    font-size: 1.5rem;
  }

  &__daliy-netflow {
    &--up {
      color: $high_bg;
    }

    &--down {
      color: $low_bg;
    }
  }

  &__date {
    color: #999;
  }
}

.water {
  position: relative;
  width: 270px;
  height: 270px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-radius: 50%;
  border-width: 5px;
  border-style: solid;
  overflow: hidden;

  &--low {
    color: $low_color;
    border-color: $low_bg;
    background-color: $low_bg;
  }

  &--mid {
    color: $mid_color;
    border-color: $mid_bg;
    background-color: $mid_bg;
  }

  &--high {
    color: $high_color;
    border-color: $high_bg;
    background-color: $high_bg;
  }

  &__percentage {
    font-size: 3rem;
    position: absolute;
    z-index: 30;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &__cntr {
    position: relative;
    z-index: 20;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border-width: 5px;
    border-style: solid;
    border-color: white;
  }

  &__volume {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 10;
    background-color: white;
  }
}
</style>
