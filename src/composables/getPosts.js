import {ref} from "vue";

const getPosts = () => {
    const posts = ref([])
    const tags = ref([])
    const error = ref(null)
    const load = async () => {
        try {
            let data = await fetch('https://mgahed-api.herokuapp.com/api/posts')
            if (!data.ok) {
                throw Error('Data not available')
            }
            let response = await data.json()
            posts.value = response.posts
            tags.value = response.tags
        } catch (err) {
            error.value = err.message
            console.log(error.value)
        }
    }

    return {posts, tags, error, load}
}

export default getPosts