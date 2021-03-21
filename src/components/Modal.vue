<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{ sale: theme === 'sale' }">
      <slot>default content</slot>
      <div class="actions">
        <slot name="links"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["theme"],
  methods: {
    closeModal() {
      this.$emit("close")
    }
  }
}
</script>
<style>
.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
.modal {
  width: 400px;
  padding: 30px;
  margin: 100px auto;
  background: white;
  border-radius: 10px;
}
.modal h1 {
  border: none;
  color: teal;
  padding: 0;
}
.modal p {
  font-style: normal;
}
.modal.sale {
  background: orangered;
  color: white;
}
.modal.sale h1 {
  color: white;
}
.modal.sale .actions a {
  color: white;
}
.modal .actions {
  text-align: center;
  margin: 30px 0 10px 0;
  color: #333;
}
.modal .actions a {
  padding: 8px;
  border: 1px solid #eee;
  border-radius: 5px;
  text-decoration: none;
  margin: 10px;
}
</style>
