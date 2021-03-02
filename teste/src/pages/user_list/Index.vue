<template>
  <div class="containerList">
    <Toolbar title="Lista de Usuários" class="tlb" />
    <SearchBar @childResponse="resp" id="searchBarMob" />
    <div class="containerSearchList">
      <div class="containerSearchLabel">
        <h1 id="labelResults">Search Results</h1>
        <SearchBar @childResponse="resp"/>
      </div>
      <div id="listDivider"></div>
      <div class="containerItems">

        <div v-on:click="profile(post.id,post.login)" v-for="(post,index) in filteredList" :key="index" class="containerItem">
          <img class="imgPerfil" :src="post.avatar_url"/>
          <h3 id="name">{{post.login}}</h3>
        </div>
        <div v-if="loader" class="circleLoader"/>
        <div v-if="filteredList.length" v-observe-visibility="handleScrolledToBottom"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Toolbar from "../../components/toolbar/Index.vue";
import SearchBar from "../../components/search/Index.vue";
import List from "../../services/listUser"
import Swal from "sweetalert2";

export default {
  name: "Index",
  components: {
    Toolbar,
    SearchBar
  },
  data() {
    return {
      search: "",
      postList: [],
      currentPage: 10,
      loader: false
    };
  },
  computed: {
    filteredList() {
      return this.postList.filter(post => {
        return post.login.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  },
  methods:{
    async fetch(){
      const response = await List.listPerPage(this.currentPage);
      this.postList = response.data;
    },
    resp(params){
      this.search = params
    },
    handleScrolledToBottom(isVisible){
      if(!isVisible){return}
      if(this.postList.length == 100){
        Swal.fire('Não exitem mais itens')
      }
      this.loader = true
      setTimeout(() => {
        this.currentPage += 10
        this.fetch()
        this.loader = false
      },2000)
    },
    profile(user_id,name){
        localStorage.setItem('userId',user_id);
        localStorage.setItem('name',name)
        window.location.href = "http://localhost:8080/#/profile";
    }
  },
  
  mounted(){
    this.fetch();
  },
  
};
</script>

<style lang="scss" >
@import "index.scss";
</style>
