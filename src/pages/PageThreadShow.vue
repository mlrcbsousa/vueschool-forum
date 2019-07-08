<template>
  <div class="col-large push-top">
    <h1>{{ thread.title }}</h1>
    <PostList :posts="posts" />
    <PostEditor
      :threadId="id"
      @save="addPost"
    />
  </div>
</template>

<script>
import sourceData from '@/data';
import PostList from '&/PostList';
import PostEditor from '&/PostEditor';

export default {
  components: {
    PostList,
    PostEditor
  },
  props: {
    id: { type: String, required: true }
  },
  data () {
    return {
      thread: sourceData.threads[this.id]
    };
  },
  computed: {
    posts () {
      const postIds = Object.values(this.thread.posts)
      return Object.values(sourceData.posts)
        .filter(post => postIds.includes(post['.key']))
    }
  },
  methods: {
    addPost ({ post }) {
      const postId = post['.key']

      this.$set(sourceData.posts, postId, post)
      this.$set(this.thread.posts, postId, postId)
      this.$set(sourceData.users[post.userId].posts, postId, postId)
    }
  }
};
</script>
