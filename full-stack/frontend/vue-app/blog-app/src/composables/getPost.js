import { ref } from 'vue'

const getPost = ({ id }) => {
  const post = ref({});

  const load = async () => {
    try {
      let data = await fetch(`http://localhost:3000/posts/${id}`);
      post.value = await data.json();
    } catch (error) {
      console.log(error?.message);
    }
  };

  return { post, load }
}

export default getPost