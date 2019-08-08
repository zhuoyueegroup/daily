<template>
    <div class="thank">
        <p class="p1">旗舰手机感恩特惠</p>
        <p>多款手机享花呗六期，小米手机十二期免息</p>

          <div class="content2">
            <img src="@/assets/cat.jpeg" alt="">
            <div class="sec1">
                <p>小米Note 36GB+128GB</p>
                <p>6GB+128GB 支持人脸解锁</p>
            </div>
            <div  class="sec2">
                <p>￥2599起</p>
                <div class="bought2">立即购买</div>
            </div>
        </div>

        <div class="content1">
            <div>
                <img src="@/assets/cat.jpeg" alt="">
                <p class="p1">红米5PLUS</p>
                <p class="p2">千元全面屏，前置柔光自拍</p>
                <p class="p3">￥ 999 元起</p>
                <div class="bought">
                    立即购买
                </div>
            </div>
            <div>
                <img src="@/assets/cat.jpeg" alt="">
                <p class="p1">红米5PLUS</p>
                <p class="p2">千元全面屏，前置柔光自拍</p>
                <p class="p3">￥ 999 元起</p>
                 <div class="bought">
                    立即购买
                </div>
            </div>

        </div>

        <p>千元全面屏，国民红米手机</p>

        <div class="content2">
            <img src="@/assets/cat.jpeg" alt="">
            <div class="sec1">
                <p>小米Note 36GB+128GB</p>
                <p>6GB+128GB 支持人脸解锁</p>
            </div>
            <div  class="sec2">
                <p>￥2599起</p>
                <div class="bought2">立即购买</div>
            </div>
        </div>

        <div class="cheaper">
            <p>送一百万张一百元代金券</p>
            <div class="get">
                立即领取
            </div>
        </div>


    </div>

</template>

<script>
export default {
    name:"HomeThank"

}
</script>

<style lang="stylus"  scoped>

    .thank
        background-color:#FF9F9F
        overflow:hidden
        padding-top:30px
        height:4000px
        p
            text-align:center
        .p1
            margin-bottom:2rem
            font-size:50px
        .content2
            margin-top:30px;
            background-color:white
            margin-left:20px
            margin-right:20px
            overflow:hidden
            margin-top:30px
            
            img 
                width:100%
                height:400px
            div
                float:left
                .bought2   
                    width:250px
                    height:100px
                    background-color:red
                    margin: 0 auto
                    margin-left:90px
                    color:white
                    font-size 25px
                    text-align:center
                    line-height:100px
                    margin-bottom:25px
                p
                    font-size:30px
            .sec1
                margin-left:20px
            .sec2
                margin-left:40px

                p
                    color:red
        

        .content1
            overflow hidden
            padding-left:20px
            margin-left:10px
           
            div
                float:left
                background-color:white
                width:400px
                margin-right:15px
                padding-bottom:50px
                
                img
                    width:100%
                    height:300px
                .p2
                    font-size 25px
                .p3
                    font-size:35px
                    color:red
                .bought
                    width:250px
                    height:40px
                    background-color:red
                    margin: 0 auto
                    margin-left:90px
                    color:white
                    font-size 25px
                    text-align:center
                    line-height:100px

        .cheaper
            background-color:#7F7FFF
            height:200px
            color:white
            padding-top:20px
            margin-left:20px
            margin-right:20px
            margin-top:20px
            p
                margin-left:350px
                font-size:30px
                
            div
                width:250px
                height:60px
                background-color:#FF9F9F
                margin-left:490px
                text-align:center
                line-height:60px
                font-size:25px
</style>
