import { ref } from "vue";
const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);
  const uri = "http://localhost:3000/posts/" + id;
  const load = async () => {
    try {
      // Simulate delay
      // await new Promise((resolve) => {
      //   setTimeout(resolve, 1000);
      // });

      let data = await fetch(uri);
      if (!data.ok) {
        throw Error("Post not available");
      }
      post.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return { post, error, load };
};

export default getPost;
