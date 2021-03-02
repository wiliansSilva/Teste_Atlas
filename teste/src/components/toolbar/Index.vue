<template>
  <div class="containerToolbar">
    <img v-on:click="back" id="img" src="../../assets/back.png">
    <div class="containerLabelLogo">
      <img id="imgLogo" src="../../assets/logo.png">
      <h1 id="labelGit">GitSearch</h1>
    </div>
    <h2 id="label">{{title}}</h2>
  </div>
</template>

<script>


export default {
  name: 'Index',
  props:{
    title: String
  },
  methods: {
    back(){
      if(this.title == 'Lista de Usuários'){
        window.location.href = "http://localhost:8080/#/";
      }else{
        window.location.href = "http://localhost:8080/#/listausuario";
      }
    }
  },

}
</script>

<style lang="scss" >
  @import 'index.scss';
  
</style>