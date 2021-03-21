<template>
  <h1>{{ title }}</h1>
  <p>Welcome</p>
  <teleport to="#modals" v-if="showModal">
    <Modal theme="sale" @close="toggleModal">
      <template v-slot:links>
        <a href="#">More Info</a>
        <a href="#">Subscribe</a>
      </template>
      <h1>Sign me up</h1>
      <p>Give me something new</p>
    </Modal>
  </teleport>

  <teleport to="#modals" v-if="showModalTwo">
    <Modal @close="toggleModalTwo">
      <h1>Send me news letter</h1>
      <p>Yes, give me promos and something news</p>
    </Modal>
  </teleport>

  <button @click.alt="toggleModal">Show Modal (+alt)</button>
  <button @click="toggleModalTwo">Show Modal Two</button>
</template>

<script>
import Modal from "./components/Modal.vue"
export default {
  name: "App",
  components: { Modal },
  data() {
    return {
      title: "Vue first look",
      showModal: false,
      showModalTwo: false
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo
    }
  }
}
</script>

<style>
#app,
#modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
  display: inline-block;
}
</style>
