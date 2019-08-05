<template>
    <div class="home-container">
      这是home
      <TabBar :active="0"></TabBar>
    </div>
</template>
<script>
import TabBar from '../tabbar/TabBar'
export default {
  data () {
    return{

    }
  },
  components:{
    TabBar
  }
}
</script>
