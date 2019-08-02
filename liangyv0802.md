主题：日报

日期：2019.8.2 星期五

内容：

1、今天学习的内容：

- 学习Vue视频
- 学习红宝书的数据类型知识点
- 整理三栏式布局的知识
- 整理数据类型的知识点
- 做一道算法上传到码云

2、未解决的问题：

- Vue页面还没放到脚手架里

3、明天的学习计划

- 学习Vue视频

- 整理老师讲解的知识点

- 做算法题

- 整理cookie、LocalStorage、sessionStorage的知识点
  4、今日总结

  **数据类型详解**

  1、出现undefined的情况：变量定义但是没有初始化、没有声明的变量调用typeof方法、函数没有返回值
2、null的判断类型是对象，但不能添加自定义属性
  3、字符串类型：string 没有固定大小的原始类型 有length属性：字符串的长度，空格也算  和 charAt()方法：输出（）内下标的字符
4、布尔值：在判断时使用，可以自动转换
  5、数字类型：number
6、对象类型：object(Array、Function、Json、Date等)
       对象声明：var  obj1={...} //字面量    var obj1=new Object() //构造函数实例化
     对象也可以添加自定义属性，获取方法有点操作（obj1.name）和中括号操作(obj1["name"])
  
  **数据类型转换**
  
1、字符串类型：强制类型转换（显示转换）：toString()、String()    隐式转换：+    String对于null和undefined的强制类型转换得到字符串，toString会报错
  2、数字类型：强制类型转换（显示转换）：Number()方法、parseInt()、parseFloat()            隐式转换：-、*、/、%、++、--
     Number()方法转换规则：空字符串、空格字符串、空对象null转换为0；布尔值转换为1和0；非空字符串、函数、json、undefined和其他对象转换为NaN;
       parseInt()方法转换规则：从左到右依次判断，碰到非数字后将前面的数字输出；数据不是字符串时会返回NaN；只保留整数；
     parseFloat()方法转换规则：与parseInt()一致，但可以保留小数
       NaN转换为布尔值是false，它与它本身不相等；判断一个数字类型是不是NaN的方法是isNaN()，不是返回true，是则返回false
  3、布尔值类型：至少一个字符的字符串、非0数字、对象转换为true；0、null、空字符串、undefined、NaN都转换为false
                          >和<比较字符串和数字，若是两个字符串则比较Unicode编码值、！取反、==数值相等就相等（判断前就变成了数字）、===会判断类型，类型相同数值相等
  4、注意事项：不要使用构造函数实例化的方法创建 Number、Boolean、String对象
                       判断Array使用Array.isArray(arr)判断是不是数组，是则输出true，不是输出false
                       判断null使用myVar==null
  	     Number对象调用toString()报SyntaxError，需要特殊处理：123..toString()/(123).toString

**三栏式布局**

三栏式布局：两边固定，中间自适应
1、**流体布局**：左右模块各自向左右浮动，并设置中间模块的 margin 值使中间模块宽度自适应
	缺点就是主要内容无法最先加载，当页面内容较多时会影响用户体验
2、**BFC三栏布局**：BFC 区域，不会与浮动元素重叠。左右模块各自向左右浮动，
	并设置中间模块的overflow：hidden，使中间模块宽度自适应
3、**双飞翼布局**：利用的是浮动元素和 margin 负值（中间设置子元素，margin的左右值是左右两边元素的宽度）
	主体内容可以优先加载，HTML 代码结构稍微复杂点
4、**圣杯布局**：圣杯布局使用padding和定位（父元素设置左右padding，再给左右元素设置相对定位）
**圣杯布局和双飞翼布局的前提元素：**
	按照“中左右”的顺序排放元素，都设置浮动，最中间元素宽度设置为100%，
	利用左右margin负边距将左右元素拉到左右位置
5、**Flex布局**:
6、**Table布局**：给父元素设置：display: table，子元素设置display: table-cell，子元素有一定的宽高。无法设置栏间距
7、**绝对定位布局**：给父元素设置相对定位，左右子元素设置绝对定位，left:0,right:0,top:0
8、**网格布局**：
​			display: grid;
​	 	  grid-template-rows: 200px;/*行：高度*/
​     grid-template-columns: 100px auto 100px;/*列：宽度*/