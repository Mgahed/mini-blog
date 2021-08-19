import {ref} from "vue";

const getPost = (id) => {
    const post = ref(null)
    const error = ref(null)
    const load = async () => {
        try {
            let data = await fetch('https://mgahed-api.herokuapp.com/api/posts/' + id)//https://jsonplaceholder.typicode.com/posts/
            if (!data.ok) {
                throw Error('Post Not Exist')
            }
            post.value = await data.json()
        } catch (err) {
            error.value = err.message
            console.log(error.value)
        }
    }

    return {post, error, load}
}

export default getPost