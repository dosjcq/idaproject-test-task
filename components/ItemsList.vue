<template lang="html">
  <TransitionGroup :class="$style.itemsList" :name="$style.list" tag="div">
    <UIBaseCard
      v-for="item in getItems"
      :key="item.id"
      :image="item.image"
      :title="item.title"
      :desc="item.desc"
      :price="item.price"
      :id="item.id"
    />
  </TransitionGroup>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ItemsList",
  computed: {
    ...mapGetters(["getItems"]),
  },
  methods: {
    ...mapActions(["fetchItems"]),
  },
  created() {
    this.fetchItems("http://localhost:3001/items");
  },
};
</script>

<style module lang="scss">
.itemsList {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  grid-column: 5/13;
}

.list {
  &:global(-enter-active) {
    transition: all 0.5s ease-out;
  }
  &:global(-leave-active) {
    transition: all 0.5s ease-out;
  }
  &:global(-enter-from) {
    opacity: 0;
  }
  &:global(-leave-to) {
    opacity: 0;
  }
}
</style>
