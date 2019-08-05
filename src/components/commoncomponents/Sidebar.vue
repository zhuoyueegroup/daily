<template>
    <van-sidebar class="brands-list" v-model="activeKey">
      <van-sidebar-item  v-for="item in data" class="brands-item" :key="item.id" :title="item.name" />
    </van-sidebar>
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
.classify-container{
  .brands-list{
    width: 200px;
    text-align: center;
    .brands-item{
      width: 200px;
      height: 100px;
    }
  }
}
</style>
