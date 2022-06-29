<template lang="html">
  <div :class="$style.cardWrapper">
    <div :class="$style.cardWrapper__imageWrapper">
      <img :src="image" :alt="title" :class="$style.cardWrapper__image" />
    </div>
    <div :class="$style.cardWrapper__info">
      <h3 :class="$style.cardWrapper__title">{{ title }}</h3>
      <p :class="$style.cardWrapper__desc">
        {{ desc }}
      </p>
      <p :class="$style.cardWrapper__price">{{ price }} руб.</p>
    </div>
    <div @click="deleteItem" :class="$style.cardWrapper__deleteButton">
      <img
        :class="$style.cardWrapper__deleteImage"
        src="../../assets/imgs/delete.svg"
        alt="delete"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseCard",
  props: ["image", "title", "desc", "price", "id"],
  methods: {
    deleteItem() {
      console.log(1);
      this.$store.dispatch("deleteItem", {
        id: this.id,
      });
    },
  },
};
</script>

<style module lang="scss">
.cardWrapper {
  background: #fffefb;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  position: relative;

  .cardWrapper__imageWrapper {
    max-width: 332px;
    max-height: 200px;

    .cardWrapper__image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .cardWrapper__info {
    font-family: "Source Sans Pro", sans-serif;
    padding: 16px 16px 24px;
    color: #3f3f3f;

    .cardWrapper__title {
      font-weight: 600;
      font-size: 20px;
      line-height: 25px;
    }

    .cardWrapper__desc {
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
    }

    .cardWrapper__price {
      font-weight: 600;
      font-size: 24px;
      line-height: 30px;
    }
  }

  .cardWrapper__deleteButton {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    right: 0;
    max-width: 32px;
    max-height: 32px;
    background: #ff8484;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 8px;
    transition: all 0.3s ease-out;

    &:hover {
      background: #f05f5f;
    }

    .cardWrapper__deleteImage {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
