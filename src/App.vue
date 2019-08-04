<template>
  <div id="app">
    <img src="./assets/logo.png">
    <van-loading type="spinner" color="#1989fa" />
    <van-button class="add" plain hairline type="primary">卓越乐乐手机卖场</van-button>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;


}

</style>
