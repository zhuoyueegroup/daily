<template>
    <div class="message">
        <header>
            <div id="slogan"></div>
            消息通知
        </header>
        <div class="item">
            
        </div>
        

    </div>

</template>


<script>
export default {
    name:"MessageList",

    data () {
        return {
            [
                {
                    title:"你的小米正在运输",
                    main:"您的订单正在配送，预计7/18送达",
                    time:"7月16日"
                },
                {
                    title:"你的小米正在运输",
                    main:"您的订单正在配送，预计7/18送达",
                    time:"7月16日"
                }
            ]
        }
    }

}
</script>

<style lang="stylus"  scoped>
    .message
        background-color:#eee
        header 
            background-color:white
            text-align:center

</style>
