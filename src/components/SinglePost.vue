<template>
  <div class="single-post">
    <router-link :to="{name: 'Details', params:{id: post.id}}">
      <h3>{{ post.title }}</h3>
    </router-link>
    <p>{{ snippet }}</p>

    <span v-for="tag in tags" :key="tag" class="pill">
      <router-link :to="{name: 'Tag', params: {tag: tag}}">
        #{{ tag }}
      </router-link>
    </span>

    <br>
    <button v-if="show_body" @click="show">Show</button>
    <button v-if="!show_body" @click="hide">Hide</button>
  </div>
</template>

<script>
import {computed, ref} from "vue";

export default {
  name: "SinglePost",
  props: ['post'],
  setup(props) {
    const snippet = ref(
        props.post.body.substring(0, 10) + '.....'
        // computed(() => {
        //   return props.post.body.substring(0, 10) + '.....'
        // })
    )
    const tags = ref(props.post.tags)
    // console.log((tags.value))

    const show_body = ref(true)

    const show = () => {
      snippet.value = props.post.body
      show_body.value = false
    }

    const hide = () => {
      snippet.value = props.post.body.substring(0, 10) + '.....'
      show_body.value = true
    }
    return {snippet, show, hide, show_body, tags}
  }
}
</script>

<style scoped>
button {
  cursor: pointer;
}

.single-post {
  margin: 0 40px 30px;
  padding-bottom: 30px;
  border-bottom: 1px dashed #e7e7e7;
}

.single-post h3 {
  display: inline-block;
  position: relative;
  font-size: 26px;
  color: white;
  margin-bottom: 10px;
  max-width: 400px;
}

.single-post h3::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: #ff8800;
  position: absolute;
  z-index: -1;
  padding-right: 40px;
  left: -30px;
  transform: rotateZ(-1deg);
}

button {
  display: block;
  margin-top: 30px;
  background: #ff8800;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 8px 16px;
  font-size: 18px
}

button:hover {
  background: #bf6e12;
}

.pill {
  display: inline-block;
  margin: 10px 10px 0 0;
  color: #444;
  background: #ddd;
  padding: 8px;
  border-radius: 20px;
  font-size: 14px;
}
</style>