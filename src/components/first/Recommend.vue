<template>
    <div class="reco">
        <p class="p1">
              热卖商品，火热感恩
                
            
        </p>
        <p>千元全面屏随便抢</p>
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

        <div class="slogan">
            <img src="" alt="">
            <p>感恩季省钱大攻略</p>
            <div>怎么买最划算？</div>
        </div>
    </div>

</template>

<script>
export default {
    name: "HomeRecommend"

}
</script>

<style lang="stylus"  scoped>
    .reco
        width:100%
        overflow:hidden
        background-color:orange
        padding:10px
        
        p
            text-align:center
            color:#3F0C00
        .p1
            font-size:50px
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
        .content2
            margin-top:30px;
            background-color:white
            margin-left:20px
            margin-right:20px
            overflow:hidden
            
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


        .slogan
            width:100%
            height:400px
            margin-top:30px      
            background-color:#FF6600
            color:white
            text-align:center
            p
                color:white
            div
                margin-left:160px
                
</style>
