<template lang="html">
  <div :class="$style.header">
    <h1 :class="$style.headerHeading">Добавление товара</h1>
    <select
      :class="$style.headerSelect"
      name="itemsFilter"
      id="itemsFilter"
      @change="selectFilter"
    >
      <option :class="$style.headerSelectOption" value="idle" default>
        По умолчанию
      </option>
      <option :class="$style.headerSelectOption" value="fromMin">
        По возрастанию
      </option>
      <option :class="$style.headerSelectOption" value="fromMax">
        По убыванию
      </option>
      <option :class="$style.headerSelectOption" value="alphabet">
        По алфавиту
      </option>
    </select>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "TheHeader",
  methods: {
    ...mapActions(["filterItems"]),
    selectFilter(event) {
      this.filterItems({ filter: event.target.value });
    },
  },
};
</script>

<style module lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 0 16px;
  grid-column: 1/13;

  &Heading {
    font-family: "Source Sans Pro", sans-serif;
    font-weight: 600;
    font-size: 28px;
    line-height: 35px;
    color: #3f3f3f;
  }

  &Select {
    background: #fffefb;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    border: none;
    font-family: "Source Sans Pro", sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #b4b4b4;
    padding: 10px 16px;

    &Option {
      color: #3f3f3f;

      &:hover {
        background-color: red;
      }
    }
  }
}
</style>
