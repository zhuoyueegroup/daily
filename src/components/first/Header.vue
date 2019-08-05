<template>
    <div class="header">
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
        height: 600px
        background: #ccc
        .search
            height:100px
            line-height:100px

</style>

