<template>
   <div>
     <home-header></home-header>
      <tab-bar></tab-bar>
      <home-recommend></home-recommend>
      <home-thank></home-thank>
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



