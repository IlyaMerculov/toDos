<template>
  <div id="todo">
    <Menu/>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'

UIkit.use(Icons)

export default {
  name: 'App',
  components: {
    Menu
  }
}
</script>

<style lang="scss">
@import "../node_modules/uikit/src/scss/variables.scss";
@import "../node_modules/uikit/src/scss/uikit.scss";

#todo{
  height: 100%;
}

</style>
