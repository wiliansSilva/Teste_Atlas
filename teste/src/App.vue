<template>
  <div id="app">
    <img class="img" alt="Vue logo" src="./assets/logo.png">
    <div class="container">
      <input class="Bsearch" type="text" v-model="search" placeholder="Pesquisar..."/>
      <div class="container_btns">
        <button class="btn_see">Ver Todos</button>
        <button v-on:click="filterList" class="btn_search">Buscar</button>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'App',
  data(){
    return{
      searchList:['React','Native','Vue'],
      search: '',
    }
  },
  methods:{
    filterList: function(){
      return this.searchList.filter((item) => {
        var bol = item.toLowerCase().includes(this.search.toLowerCase())
        if(bol){
          console.log(bol)
          return;
        }
      });
    }
  },
  components: {},

}
</script>

<style lang="scss" >
  @import 'main.scss';
  
</style>
