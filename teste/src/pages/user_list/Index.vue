<template>
  <div class="containerList">
    <Toolbar class="tlb"/>
    <SearchBar/>
  </div>
</template>

<script>

import Toolbar from '../../components/toolbar/Index.vue'
import SearchBar from '../../components/search/Index.vue'

export default {
  name: 'Index',
  components: {
    Toolbar,
    SearchBar
  },

}
</script>

<style lang="scss" >
  @import 'index.scss';
  
</style>
