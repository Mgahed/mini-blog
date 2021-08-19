<template>
  <div class="tags">
    <h1>Tag Filter</h1>
    <div v-if="error">{{ error }}</div>
    <div v-else-if="posts.length" class="post">
      <PostList :posts="posts"/>
    </div>
    <div v-else>
      <Spinner/>
    </div>
  </div>
</template>

<script>
import PostList from "@/components/PostList";
import Spinner from "@/components/Spinner";
import filterPosts from "@/composables/filterPosts";

export default {
  name: "Tag",
  props: ['tag'],
  components: {Spinner, PostList},
  setup(props) {
    const {posts, error, load} = filterPosts(props.tag)
    load()

    return {posts, error}
  }
}
</script>

<style>
.tags{
  max-width: 1200px;
  margin: 0 auto;
}
.tags .pill a{
  pointer-events: none;
  cursor: default;
}
</style>