<template>
    <div class="containerSelect">
       <div class="containerSonSelect">
         <img class="icon" alt="Vue logo" src="../../assets/lupa.png">
         <input v-model="resultSearch" class="input_search" type="text"/>
       </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
      resultSearch: ''
    }
  },
  methods:{
    
  }
}
</script>

<style lang="scss" >
  @import 'index.scss';
  
</style>