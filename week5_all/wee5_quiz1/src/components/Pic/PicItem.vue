<template>
  <div class="gutter">
    <div class="pic__intro">
      <h2 class="pic__tit">{{ item.actName }}</h2>
    </div>
    <div class="imgContainer">
      <img
        loading="lazy"
        class="img-resp"
        :src="`https://cloud.culture.tw${item.imageUrl}`"
        :alt="item.actName"
        width="937"
        height="625"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "PicItem",
  props: {
    item: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
.pic__item {
  box-sizing: border-box;
  width: 25%;
  padding: 12px;
}

.pic .gutter {
  background-color: #fff;
  display: flex;
  flex-direction: column-reverse;
  justify-content: start;
  height: 100%;
}

.pic__intro {
  margin: 12px;
}

.pic__tit {
  margin: 0;
  font-size: 1.2rem;
  font-weight: normal;
}

.pic .img-resp {
  aspect-ratio: 16 / 9;
  object-fit: cover;
  object-position: center;
}
</style>
