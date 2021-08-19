<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-else-if="posts.length" class="layout">
      <PostList :posts="posts"/>
      <TagCloud :tags="tags"/>
    </div>
    <div v-else>
      <Spinner/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import {computed, ref, watch, watchEffect} from 'vue'
import PostList from "@/components/PostList";
import getPosts from "@/composables/getPosts";
import Spinner from "@/components/Spinner";
import TagCloud from "@/components/TagCloud";

export default {
  name: 'Home',
  components: {TagCloud, Spinner, PostList},
  setup() {
    const {posts, tags, error, load} = getPosts()
    load()
    return {posts, tags, error}
  }
}
</script>

<style>
.home{
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
.layout{
  display: grid;
  grid-template-columns: 3fr 3fr;
  gap: 20px;
}
</style>
