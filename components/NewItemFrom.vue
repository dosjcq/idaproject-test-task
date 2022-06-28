<template lang="html">
  <form class="new-item-form" @submit.prevent="submitForm">
    <div class="input-holder">
      <div class="input-holder__label">
        <label for="title">Наименование товара</label>
        <span class="circle"></span>
      </div>
      <input
        type="text"
        id="title"
        placeholder="Введите наименование товара"
        v-model="title"
      />
    </div>
    <div class="input-holder">
      <div class="input-holder__label">
        <label for="title">Описание товара</label>
        <span class="circle"></span>
      </div>
      <input
        type="text"
        id="title"
        placeholder="Введите описание товара"
        v-model="desc"
      />
    </div>
    <div class="input-holder">
      <div class="input-holder__label">
        <label for="title">Ссылка на изображение товара</label>
        <span class="circle"></span>
      </div>
      <input
        type="text"
        id="title"
        placeholder="Введите ссылку"
        v-model="image"
      />
    </div>
    <div class="input-holder">
      <div class="input-holder__label">
        <label for="title">Цена товара</label>
        <span class="circle"></span>
      </div>
      <input
        type="text"
        id="title"
        placeholder="Введите цену"
        v-model="price"
      />
    </div>
    <button class="new-item-form__submit-button">Добавить товар</button>
  </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "NewItemForm",
  data() {
    return {
      title: "",
      desc: "",
      image: "",
      price: "",
    };
  },
  methods: {
    ...mapActions(["addItem"]),
    submitForm() {
      console.log("add");
      this.addItem({
        image: this.image,
        title: this.title,
        desc: this.desc,
        price: this.price,
      });
    },
  },
};
</script>

<style lang="scss">
.new-item-form {
  padding: 24px;
  background: #fffefb;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  grid-column: 1/5;

  .input-holder {
    display: flex;
    flex-direction: column;
    font-family: "Source Sans Pro", sans-serif;
    margin-bottom: 16px;

    &__label {
      display: flex;
    }

    &:last-child {
      margin-bottom: 24px;
    }

    label {
      font-weight: 400;
      font-size: 10px;
      line-height: 13px;
      letter-spacing: -0.02em;
      color: #49485e;
      margin-bottom: 4px;
    }

    input {
      background: #fffefb;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      border: none;
      height: 36px;
    }

    .circle {
      width: 4px;
      height: 4px;
      border-radius: 4px;
      background-color: #ff8484;
    }
  }

  .new-item-form__submit-button {
    cursor: pointer;
    width: 100%;
    padding: 10px 0;
    text-align: center;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: -0.02em;
    color: #b4b4b4;
    background: #eeeeee;
    border-radius: 10px;
    border: none;
  }
}
</style>
