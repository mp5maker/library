import { ref } from 'vue'

const getPosts = () => {
  const posts = ref([]);

  const load = async () => {
    try {
      let data = await fetch("http://localhost:3000/posts");
      posts.value = await data.json();
    } catch (error) {
      console.log(error?.message);
    }
  };

  return { posts, load }
}

export default getPosts