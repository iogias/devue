const app = Vue.createApp({
  // data, functions
  data() {
    return {
      showGames:true,
      games:[
        {title:"Counter Strike GO", publisher:"Valve Corp.",img:"assets/csgo.jpg", isFav:true},
        {title:"Free Fire", publisher:"Garena",img:"assets/ff.jpg", isFav:false},
        {title:"Call of Duty Mobile", publisher:"Activision",img:"assets/cod.jpg", isFav:true}
      ],
    }
  },
  methods:{
    toggleshowGames(){
      this.showGames = !this.showGames
    },
    toggleFavGames(game){
      game.isFav = !game.isFav
    },
  },
  computed:{
    filteredGames(){
      return this.games.filter((game)=>game.isFav)
    }
  }
})

app.mount('#app')
