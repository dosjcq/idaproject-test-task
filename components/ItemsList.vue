<template lang="html">
  <div class="items-list">
    <UIBaseCard
      v-for="item in getItems"
      :key="item.id"
      :image="item.image"
      :title="item.title"
      :desc="item.desc"
      :price="item.price"
    />
  </div>
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

<style lang="scss">
.items-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  grid-column: 5/13;
}
</style>
