<template lang="html">
  <div class="card-wrapper">
    <img :src="image" :alt="title" class="card-wrapper__image" />
    <div class="card-wrapper__info">
      <h3 class="card-wrapper__title">{{ title }}</h3>
      <p class="card-wrapper__desc">
        {{ desc }}
      </p>
      <p class="card-wrapper__price">{{ price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseCard",
  props: ["image", "title", "desc", "price"],
};
</script>

<style lang="scss">
.card-wrapper__info {
  font-family: "Source Sans Pro", sans-serif;
  padding: 16px 16px 24px;
  color: #3f3f3f;

  .card-wrapper__title {
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
  }

  .card-wrapper__desc {
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
  }

  .card-wrapper__price {
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
  }
}
</style>
