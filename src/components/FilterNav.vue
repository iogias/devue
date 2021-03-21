<template>
  <nav class="filter-nav">
    <button
      @click="filterProject('all')"
      :class="{ active: current === 'all' }"
    >
      View All
    </button>
    <button
      @click="filterProject('completed')"
      :class="{ active: current === 'completed' }"
    >
      Completed
    </button>
    <button
      @click="filterProject('ongoing')"
      :class="{ active: current === 'ongoing' }"
    >
      On Going
    </button>
  </nav>
</template>

<script>
export default {
  props: ["current"],
  methods: {
    filterProject(param) {
      this.$emit("filterChange", param);
    },
  },
};
</script>

<style>
.filter-nav button {
  background: none;
  border: none;
  color: #bbb;
  outline: none;
  font-size: 12px;
  text-transform: uppercase;
  margin-right: 10px;
  letter-spacing: 1px;
  font-weight: bold;
  cursor: pointer;
}
.filter-nav button.active {
  color: #555;
}
</style>