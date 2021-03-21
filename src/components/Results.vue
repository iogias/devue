<template>
    <p>Reaction time : {{ score }} ms</p>
    <p class="rank">{{ rank }}</p>
</template>

<script>
export default {
  props:["score"],
  data(){
    return {
      rank:null
    }
  },
  mounted(){
    if(this.score < 250) {
      this.rank = 'Ninja finger'
    } else if(this.score < 400) {
      this.rank = 'Good reflexes'
    } else {
      this.rank = 'Snail pace ..'
    }
  }
}
</script>

<style>
.rank {
  color:teal;
  font-size: 1.2em;
  padding: 5px;
  font-weight: bold;
}
</style>