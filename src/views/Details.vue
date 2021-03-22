<template>
  <div class="details">
    <div class="error" v-if="error">{{ error }}</div>
    <div v-if="post" class="post">
      <h3>{{ post.title }}</h3>
      <p class="pre">{{ post.body }}</p>
      <span v-for="tag in post.tags" :key="tag" class="pill">
        <router-link :to="{ name: 'Tag', params: { tag: tag } }">
          #{{ tag }}
        </router-link>
      </span>
    </div>
    <div v-else>
      <div v-if="!error">
        <Spinner />
      </div>
    </div>
  </div>
</template>

<script>
import getPost from "../composable/getPost";
import Spinner from "../components/Spinner.vue";
export default {
  props: ["id"],
  components: { Spinner },
  setup(props) {
    const { post, error, load } = getPost(props.id);
    load();
    return { post, error };
  },
};
</script>

<style>
.post {
  max-width: 1200px;
  margin: 0 auto;
}
.post p {
  color: #444;
  line-height: 1.5em;
  margin-top: 40px;
}
.pre {
  white-space: pre-wrap;
}
</style>