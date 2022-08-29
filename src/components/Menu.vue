<template>
  <div class="menu">
    <LeftBlock/>
    <CenterBlock/>
  </div>
</template>

<script>
import LeftBlock from './LeftBlock.vue'
import CenterBlock from './CenterBlock.vue'
import {store} from '../store'

export default {  
  name: 'Menu',
  components: {
    LeftBlock,
    CenterBlock
  },
  mounted(){
                console.log('mount' )
                store.dispatch('getToDos')
                // store.dispatch('getToDos')
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  $grey: #F2F4F7;

  html, body{
    height: 100%;
    width:  -webkit-fill-available;
  }

  body{
    position: fixed;
    margin: 0;
  }

  .menu{
    margin: 0;
    width: 100%;
    height: 100%;
    background: $grey;
    display: flex;
    flex-direction: row;
  }
  @media screen and (max-width: 764px) and (min-width: 320px) {
    .menu{
       flex-direction: column;
    }
  }
</style>
