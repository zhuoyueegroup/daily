<template>
   <div>
     <home-header></home-header>
    <tab-bar></tab-bar>
   </div>
</template>


<script>
import TabBar from '../tabbar/TabBar'
import HomeHeader from '../first/Header'
export default {
    name: "Home",
    components: {
      TabBar,
      HomeHeader
    },

  
}
</script>

<style lang="stylus" scoped>


</style>



