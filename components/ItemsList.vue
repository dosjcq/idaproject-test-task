<template lang="html">
  <div class="items-list">
    <UIBaseCard
      v-for="item in items"
      :key="item.id"
      :image="item.image"
      :title="item.title"
      :desc="item.desc"
      :price="item.price"
    />
  </div>
</template>

<script>
export default {
  name: "ItemsList",

  data() {
    return {
      items: [
        {
          id: 1,
          image:
            "https://www.lg.com/ru/images/projectors/md05984180/gallery/medium01.jpg",
          title: "test",
          desc: "test",
          price: 1,
        },
        {
          id: 2,
          image:
            "https://www.lg.com/ru/images/projectors/md05984180/gallery/medium01.jpg",
          title: "test",
          desc: "test",
          price: 1,
        },
        {
          id: 3,
          image:
            "https://www.lg.com/ru/images/projectors/md05984180/gallery/medium01.jpg",
          title: "test",
          desc: "test",
          price: 1,
        },
        {
          id: 4,
          image:
            "https://www.lg.com/ru/images/projectors/md05984180/gallery/medium01.jpg",
          title: "test",
          desc: "test",
          price: 1,
        },
        {
          id: 5,
          image:
            "https://www.lg.com/ru/images/projectors/md05984180/gallery/medium01.jpg",
          title: "test",
          desc: "test",
          price: 1,
        },
        {
          id: 6,
          image:
            "https://www.lg.com/ru/images/projectors/md05984180/gallery/medium01.jpg",
          title: "test",
          desc: "test",
          price: 1,
        },
        {
          id: 7,
          image:
            "https://www.lg.com/ru/images/projectors/md05984180/gallery/medium01.jpg",
          title: "test",
          desc: "test",
          price: 1,
        },
        {
          id: 8,
          image:
            "https://www.lg.com/ru/images/projectors/md05984180/gallery/medium01.jpg",
          title: "test",
          desc: "test",
          price: 1,
        },
        {
          id: 9,
          image:
            "https://www.lg.com/ru/images/projectors/md05984180/gallery/medium01.jpg",
          title: "test",
          desc: "test",
          price: 1,
        },
      ],
    };
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
