<template>
    <div class="header">
        <div class="message">消息</div>
        <van-search placeholder="请输入搜索关键词" v-model="value"  class="search"/>
        
    </div>

</template>

<script>
export default {
    name: "HomeHeader",
    data () {
        return {
            value: ""
        }
    }

}
</script>

<style lang="stylus" scoped>
    .header
        width: 100%
        height: 800px
        background: #ccc
        .search
            height:150px
            line-height:150px

</style>

