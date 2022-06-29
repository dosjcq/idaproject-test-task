<template lang="html">
  <form class="new-item-form" @submit.prevent="submitForm">
    <div class="input-holder">
      <div class="input-holder__label">
        <label class="input-holder__label-text" for="title"
          >Наименование товара</label
        >
        <span class="circle"></span>
      </div>
      <input
        type="text"
        id="title"
        placeholder="Введите наименование товара"
        v-model="form.title"
        class="input-holder__input"
        :class="{ formError: formErrors.title }"
        @focus="changeErrorStatus"
      />
    </div>
    <div class="input-holder">
      <div class="input-holder__label">
        <label class="input-holder__label-text" for="desc"
          >Описание товара</label
        >
      </div>
      <textarea
        name="desc"
        id="desc"
        cols="30"
        rows="7"
        placeholder="Введите описание товара"
        v-model="form.desc"
        class="input-holder__textarea"
        @focus="changeErrorStatus"
      ></textarea>
    </div>
    <div class="input-holder">
      <div class="input-holder__label">
        <label class="input-holder__label-text" for="image"
          >Ссылка на изображение товара</label
        >
        <span class="circle"></span>
      </div>
      <input
        type="text"
        id="image"
        placeholder="Введите ссылку"
        v-model="form.image"
        class="input-holder__input"
        :class="{ formError: formErrors.image }"
        @focus="changeErrorStatus"
      />
    </div>
    <div class="input-holder">
      <div class="input-holder__label">
        <label class="input-holder__label-text" for="price">Цена товара</label>
        <span class="circle"></span>
      </div>
      <input
        type="text"
        id="price"
        placeholder="Введите цену"
        v-model="form.price"
        class="input-holder__input"
        :class="{ formError: formErrors.price }"
        @focus="changeErrorStatus"
      />
    </div>
    <button class="new-item-form__submit-button" :disabled="buttonIsDisabled">
      Добавить товар
    </button>
  </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "NewItemForm",
  data() {
    return {
      form: {
        title: "",
        desc: "",
        price: "",
        image: "",
      },
      buttonIsDisabled: true,
      formErrors: {
        title: false,
        price: false,
        image: false,
      },
    };
  },
  watch: {
    form: {
      handler(newValue) {
        const formFieldsValues = Object.values(newValue);
        const isFormEmpty = formFieldsValues.every((elem) => elem === "");
        if (isFormEmpty) {
          this.buttonIsDisabled = true;
        } else {
          this.buttonIsDisabled = false;
        }
      },
      deep: true,
    },
  },
  methods: {
    ...mapActions(["addItem"]),

    submitForm() {
      const baseErrorObj = { ...this.formErrors };

      const formPairsArr = Object.entries(this.form);
      formPairsArr.forEach((item) => {
        if (item[1] === "" && item[0] !== "desc") {
          this.formErrors[item[0]] = true;
        }
      });

      const { title, image, price } = this.formErrors;

      if (title || image || price) {
        this.buttonIsDisabled = true;
      } else {
        this.addItem(this.form);

        this.formErrors = baseErrorObj;
        this.form = { title: "", desc: "", price: "", image: "" };
      }
    },

    changeErrorStatus(event) {
      if (this.formErrors[event.target.id]) {
        this.formErrors[event.target.id] = false;
        this.buttonIsDisabled = true;
      }
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
      margin-bottom: 4px;

      .input-holder__label-text {
        font-family: "Source Sans Pro", sans-serif;
        font-weight: 400;
        font-size: 10px;
        line-height: 13px;
        letter-spacing: -0.02em;
        color: #49485e;
      }

      .circle {
        width: 4px;
        height: 4px;
        border-radius: 4px;
        background-color: #ff8484;
      }
    }

    &:last-child {
      margin-bottom: 24px;
    }

    .input-holder__input,
    .input-holder__textarea {
      background: #fffefb;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      border: none;
      font-family: "Source Sans Pro", sans-serif;

      &::placeholder {
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
        color: #b4b4b4;
      }

      &:focus,
      &:focus-visible {
        border: 1px solid #b4b4b4;
        outline: none;
      }
    }

    .formError {
      border: 1px solid red;
    }

    .input-holder__input {
      padding: 10px 0 11px 16px;
    }

    .input-holder__textarea {
      padding: 10px 0 0 16px;
      resize: none;
      height: 98px;
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
    background-color: #7bae73;
    color: #ffffff;
    border-radius: 10px;
    border: none;

    &:disabled {
      background-color: #eeeeee;
      color: #b4b4b4;
    }
  }
}
</style>
