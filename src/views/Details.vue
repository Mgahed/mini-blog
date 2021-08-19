<template>
  <div class="post-details">
    <h1>Details</h1>
    <div v-if="error">{{ error }}</div>
    <div v-else-if="post" class="post">
      <h3>{{ post.title }}</h3>
      <p class="pre">{{ post.body }}</p>
    </div>
    <div v-else><Spinner/></div>
  </div>
</template>

<script>

import getPost from "@/composables/getPost";
import Spinner from "@/components/Spinner";

export default {
  name: "Details",
  components: {Spinner},
  props: ['id'],
  setup(props) {
    const {post, error, load} = getPost(props.id)
    load()
    return {post, error}
  }
}
</script>

<style>
.post-details{
  max-width: 1200px;
  margin: 0 auto;
  /*padding: 10px;*/
}
.post{
  max-width: 1200px;
  margin: 0 auto;
}
.post-details p{
  color: #444;
  line-height: 1.5em;
  margin-top: 40px;
}
.pre{
  white-space: pre-wrap;
}
</style>