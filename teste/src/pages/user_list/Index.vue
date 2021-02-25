<template>
  <div class="containerList">
    <Toolbar class="tlb" />
    <SearchBar @childResponse="resp" id="searchBarMob" />
    <div class="containerSearchList">
      <div class="containerSearchLabel">
        <h1 id="labelResults">Search Results</h1>
        <SearchBar @childResponse="resp"/>
      </div>
      <div id="listDivider"></div>
      <div class="containerItems">

        <div v-for="post in filteredList" :key="post.id" class="containerItem">
          <img class="imgPerfil" />
          <h3 id="name">{{post.name}}</h3>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Toolbar from "../../components/toolbar/Index.vue";
import SearchBar from "../../components/search/Index.vue";

export default {
  name: "Index",
  components: {
    Toolbar,
    SearchBar
  },
  data() {
    return {
      search: "",
      postList: [
        {
          id:0,
          name: "wilians",
          foto: "foto1"
        },
        {
          id:1,
          name: "bruno",
          foto: "foto2"
        },
        {
          id:2,
          name: "kauane",
          foto: "foto3"
        },
        {
          id:3,
          name: "bianca",
          foto: "foto4"
        },
        {
          id:4,
          name: "tobias",
          foto: "foto4"
        },
        {
          id:5,
          name: "karen",
          foto: "foto5"
        }
        
      ]
    };
  },
  computed: {
    filteredList() {
      return this.postList.filter(post => {
        return post.name.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  },
  methods:{
    resp(params){
      this.search = params
    }
  }
};
</script>

<style lang="scss" >
@import "index.scss";
</style>
