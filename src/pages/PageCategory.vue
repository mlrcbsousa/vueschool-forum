<template>
  <div class="col-full">
    <!-- <div class="col-full push-top"> -->
      <h1>{{ category.name }}</h1>
    <!-- </div> -->

    <CategoryListItem :category="category" />
  </div>
</template>

<script>
import CategoryListItem from '&/CategoryListItem';
import sourceData from '@/data';

export default {
  components: {
    CategoryListItem
  },

  props: {
    id: { type: String, required: true }
  },

  computed: {
    category () {
      return sourceData.categories[this.id];
    }
  }
};
</script>

