<template>
   <div class="home-container">
     <home-header></home-header>
      <home-recommend></home-recommend>
      <home-thank></home-thank>
      <tab-bar></tab-bar>
   </div>
</template>


<script>
import TabBar from '../tabbar/TabBar'
import HomeHeader from '../first/Header'
import HomeRecommend from '../first/Recommend'
import HomeThank from '../first/Thank'
export default {
    name: "Home",
    components: {
      TabBar,
      HomeHeader,
      HomeRecommend,
      HomeThank
    },


}
</script>

<style lang="stylus" scoped>


</style>



