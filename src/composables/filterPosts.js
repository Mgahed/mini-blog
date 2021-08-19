import {ref} from "vue";

const filterPosts = (tag) => {
    const posts = ref([])
    const error = ref(null)
    const load = async () => {
        try {
            let data = await fetch('https://mgahed-api.herokuapp.com/api/posts/tag/' + tag)//https://jsonplaceholder.typicode.com/posts/
            if (!data.ok) {
                throw Error('Posts Not Exist')
            }
            posts.value = await data.json()
        } catch (err) {
            error.value = err.message
            console.log(error.value)
        }
    }

    return {posts, error, load}
}

export default filterPosts