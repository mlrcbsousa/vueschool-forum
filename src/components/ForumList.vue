<template>
  <div class="forum-list">
    <h2 class="list-title">
      <a href="#">Forums</a>
    </h2>

    <ForumListItem
      v-for="forum in forums"
      :key="forum['.key']"
      :forum="forum"
    />

  </div>
</template>

<script>
import ForumListItem from './ForumListItem.vue';

export default {
  components: {
    ForumListItem
  },
  props: {
    forums: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
</style>
