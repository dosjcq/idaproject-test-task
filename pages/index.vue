<template>
  <div :class="$style.container">
    <NewItemFrom />
    <ItemsList />
  </div>
</template>

<script>
import ItemsList from "../components/ItemsList.vue";
import NewItemFrom from "../components/NewItemFrom.vue";
export default {
  name: "IndexPage",
  components: { ItemsList, NewItemFrom },
};
</script>

<style module lang="scss">
.container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 32px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  gap: 16px;
  align-items: start;
}
</style>
