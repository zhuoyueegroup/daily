<template>
  <div class="sidebar-container">
    <van-sidebar class="brands-list" v-model="activeKey">
      <van-sidebar-item  v-for="item in data" class="brands-item" :key="item.id" :title="item.name" />
    </van-sidebar>
  </div>

</template>
<script>
export default {
  //从父组件接收值
  props:['data'],
  data () {
    return {
      activeKey:0
    }
  }
}
</script>

<style lang="less" scoped>
.sidebar-container{
  width: 300px;
  position: relative;
  overflow: hidden;
  .brands-list{
    width: 200px;
    position: fixed;
    text-align: center;
    .van-sidebar-item--select{
      color:#ff8a5c;
      border-color: #ff8a5c;
    }
    .brands-item{
      width: 200px;
      height: 100px;
    }
  }
}
</style>
