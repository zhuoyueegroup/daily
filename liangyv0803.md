主题：日报

日期：2019.8.3 星期六

内容：

1、今天学习的内容：

- 学习Vue视频
- 复习老师讲的知识点
- 将页面完成放在脚手架里
- 做一道算法上传到码云

2、未解决的问题：

- 闭包知识还未复习

3、明天的学习计划

- 学习Vue视频

- 整理老师讲解的知识点

- 做算法题

- 整理闭包的知识点
  4、今日总结

  **CSS3的动画属性**

  1、transition:过渡，就是元素从这个属性的某个值过渡到这个属性的另外一个值，
  	这是一个状态的改变，需要一种条件来触发这种转变。如：:hover、:focus、:checked、媒体查询等
  	transition产生动画的条件是transition设置的property发生变化
  	需要事件触发，所以没法在网页加载时自动发生
  	是一次性的，不能重复发生，除非一再触发
  	只能定义开始状态和结束状态，不能定义中间状态，也就是说只有两个状态
  	一条transition规则，只能定义一个属性的变化，不能涉及多个属性
  transition的作用在于，指定状态变化所需要的时间
  语法：transition: property duration timing-function delay;
  2、animation:（@keyframes规则）是由多个transition的效果叠加，并且可操作性更强，能够做出复杂酷炫的效果
  语法：animation: name duration timing-function delay iteration-count direction play-state fill-mode;
  keyframes提供更多的控制，尤其是时间轴的控制
  需要指定动画一个周期持续的时间，以及动画效果的名称
  3、tranform:变形
  	属性：
  	旋转rotate（中心为原点）
  	扭曲、倾斜skew（skew(x,y), skewX(x), skewY(y)）
  	缩放scale（scale(x,y), scaleX(x), scaleY(y)）
  	移动translate（translateX,translateY）
  	矩阵变形matrix。

  **JS的事件**

  1、鼠标滚轮事件：onmousewheel、DOMMouseScroll(火狐，需要事件监听)
  2、键盘事件：onkeydown/up(event.keyCode——键盘按键值)
  	只有能接受焦点的元素才能接收键盘事件，特殊的document可以接收，如不能直接给div加
  3、元素的拖拽：
  	获取到鼠标的位置：ev.clientX/ev.clientY; ev.pageX/ev.pageY;
  	选择元素时（鼠标按下）保存下鼠标的位置和元素位置的差值
  	var disX = ev.pageX - 元素.offsetLeft;
      	var disY = ev.pageY - 元素.offsetTop;
  	移动元素时（鼠标移动），不停的给元素赋值（当前鼠标位置减去保存的差值）
  	元素.style.left = ev.pageX - disX + 'px';
      	元素.style.top= ev.pageY - disY + 'px';
  	释放元素（鼠标抬起）时，取消移动事件
  	元素.onmousemove = 元素.onmouseup =  null;

