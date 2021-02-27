<template>
  <div class="containerToolbar">
    <img id="img" src="../../assets/back.png">
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
  components: {},

}
</script>

<style lang="scss" >
  @import 'index.scss';
  
</style>