主题：日报

日期：2019.8.4 星期日

内容：

1、今天学习的内容：

- 学习Vue视频
- 将页面完成放在脚手架里并使用fetch发送请求
- vue项目基本已经完成 
- 做一道算法上传到码云

2、未解决的问题：

- fetch请求的方法不熟悉

3、明天的学习计划

- 学习Vue视频

- 开始编写手机商城页面的编写

- 做算法题

- 整理Vue生命周期的知识点
  4、今日总结

- **让一个元素隐藏的方式**

  1) Opacity：0	占据空间，可以点击

  2) Visibility：hidden占据空间，无法点击

  3) Display：none不占据空间，无法点击

  4) Position:position: absolute; top: -9999px; left: -9999px; 不占据空间，无法点击

  5) Clip-path：clip-path: polygon(0px 0px,0px 0px,0px 0px,0px 0px);占据空间，无法点击

  6) Overflow：hidden占据空间，无法响应点击事件

  7) z-index：-1000; 不占据空间，无法点击 

  8) transform：scale(0,0) 占据空间，无法点击

  9) Height:0

- **css实现文本溢出显示省略号的方法**

  单行文本溢出显示省略号

  1）overflow: hidden;/*–超出隐藏–*/

  2）text-overflow:ellipsis; /*–超出的文字以省略号显示–*/

  3）white-space: nowrap;/*–禁止换行–*/

  多行文本溢出显示省略号

  display:-webkit-box; /*–课伸缩盒子/弹性盒子–*/

  -webkit-box-orient:vertical;/*–从上向下垂直排列子元素–*/

  -webkit-line-clamp:3;/*–限制在一个块元素显示的文本的行数(超出3行显示省略号)–*/

  overflow:hidden;

- **跨域方法**
  	1）JSONP：在页面上引入不同域上的js脚本文件
  	2）CORS跨域：当使用XMLHttpRequest发送请求时，
  	浏览器发现该请求不符合同源策略，会给该请求加入一个响应头：Origin，
  	后台进行一系列处理，如果确定接受请求则在返回结果中加入一个响应头；
  	浏览器判断该相应头中是否包含Origin的值，
  	如果有则浏览器会有处理响应，我们就可以拿到响应的数据