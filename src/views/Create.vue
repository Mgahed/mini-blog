<template>
  <div class="create-post">
    <h1>Create</h1>
    <form @submit.prevent="handle_submit">
      <label for="title">Title</label>
      <input id="title" type="text" v-model="title" required>
      <label for="body">Content</label>
      <textarea id="body" v-model="body" required></textarea>
      <label for="tag">Tags (Hit enter to add tag)</label>
      <input type="text" id="tag" v-model="tag" @keydown.enter.prevent="handle_keydown">
      <div v-for="tag in tags" :key="tag" class="pill">
        #{{ tag }}
      </div>
      <button>Add Text</button>
    </form>
  </div>
</template>

<script>
import {ref} from "vue";
import {useRouter} from "vue-router";

export default {
  name: "Create",
  setup() {
    const title = ref('')
    const body = ref('')
    const tag = ref('')
    const tags = ref([])

    const router = useRouter()

    const handle_keydown = () => {
      if (!tags.value.includes(tag.value)) {
        tag.value = tag.value.replace(/\s/, '') //remove white spaces
        tags.value.push(tag.value)
      }
      tag.value = ''
    }
    const handle_submit = async () => {
      const post = {
        title: title.value,
        body: body.value,
        tags: tags.value
      }
      let data = await fetch('https://mgahed-api.herokuapp.com/api/posts/create', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(post)
      })
      let response = await data.json();
      if (response.Status === 'Success') {
        router.push({name: 'Home'})
      } else {
        alert('Coudnt Create post')
      }

    }
    return {title, body, tag, handle_keydown, tags, handle_submit}
  }
}
</script>

<style scoped>
.create-post {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}

form {
  max-width: 480px;
  margin: 0 auto;
  text-align: left;
}

input, textarea {
  display: block;
  margin: 10px 0;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #eee;
}

textarea {
  height: 160px;
}

label {
  display: inline-block;
  margin-top: 30px;
  position: relative;
  font-size: 20px;
  color: white;
  margin-bottom: 10px;
}

label::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: #ff8800;
  position: absolute;
  z-index: -1;
  padding-right: 40px;
  left: -30px;
  transform: rotateZ(-1.5deg);
}

button {
  cursor: pointer;
  display: block;
  margin-top: 30px;
  background: #ff8800;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 18px
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