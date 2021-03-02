<template>
  <div id="app">
    <img class="img" alt="Vue logo" src="../../assets/logo.png">
    <div class="container">
      <input class="Bsearch" type="text" v-model="search" placeholder="Pesquisar..."/>
      <div class="container_btns">
        <button v-on:click="list" class="btn_see">Ver Todos</button>
        <button v-on:click="filterList" class="btn_search">Buscar</button>
      </div>
    </div>
  </div>
</template>

<script>

import list from '../../services/listUser'
export default {
  name: 'Index',
  data(){
    return{
      searchList:['React','Native','Vue'],
      search: '',
      listUser: []
    }
  },
  methods:{
    filterList: function(){
      return this.listUser.filter((item) => {
        var bol = item.login.toLowerCase().includes(this.search.toLowerCase())
        if(bol){
          localStorage.setItem('userId',item.id);
          localStorage.setItem('name',item.login)
          window.location.href = "http://localhost:8080/#/profile";
          return;
        }else{
          console.log('nao')
        }
      });
    },
    list: function(){
      window.location.href = "http://localhost:8080/#/listausuario";
    }
  },
   async created(){
    const response = await list.listUser();
    this.listUser = response.data
  },

}
</script>

<style lang="scss" >
  @import 'index.scss';
  
</style>
