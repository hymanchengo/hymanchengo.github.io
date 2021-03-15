(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{563:function(v,_,t){"use strict";t.r(_);var l=t(4),e=Object(l.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h2",{attrs:{id:"java基础"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java基础"}},[v._v("#")]),v._v(" Java基础")]),v._v(" "),t("blockquote",[t("p",[v._v("本篇对Java语言的基础知识做下罗列")])]),v._v(" "),t("h3",{attrs:{id:"_1-类型系统"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-类型系统"}},[v._v("#")]),v._v(" 1. 类型系统")]),v._v(" "),t("p",[v._v("首先来思考一个问题，为什么要定义类型呢？")]),v._v(" "),t("blockquote",[t("p",[v._v("我的理解是，程序本质的是输入数据，处理数据，输出数据，因此核心就是数据及处理数据的算法。那么程序员怎么才能处理数据呢，在机器语言时代，\n通过穿孔磁带来操作0，1。汇编语言时代抽象出字节，字等来表示数据及指令，高级语言为了更好的屏蔽对低级表示的数据的操作设置了类型。当然类型\n肯定不是必须的，类型的意义也不仅用于定义数据，也表示了一种约束。高级语言中通过编译期类型检查确保程序的健壮和安全。")])]),v._v(" "),t("p",[v._v("关于为什么要定义类型，以及为什么要定义变量，这个问题有兴趣可以进一步思考和查资料，确实是个很不错的问题，只有当你带着思考去学习编程时，才会提出这样一些直达灵魂的追问")]),v._v(" "),t("blockquote",[t("p",[v._v("知乎上有个"),t("a",{attrs:{href:"https://www.zhihu.com/question/425821639",target:"_blank",rel:"noopener noreferrer"}},[v._v("提问"),t("OutboundLink")],1)])]),v._v(" "),t("ul",[t("li",[v._v("类型\n"),t("ul",[t("li",[v._v("计算机只认识0和1，如果我们用一个数据类型来表示0或者1，那么假设我们定义这个类型为Bit")]),v._v(" "),t("li",[v._v("因此，类型是这一种抽象。")]),v._v(" "),t("li",[v._v("类型定义了结构和取值范围")]),v._v(" "),t("li",[v._v("类型是我们操作低层表示的数据的接口")])])]),v._v(" "),t("li",[v._v("变量、变量声明、变量初始化、变量定义\n"),t("ul",[t("li",[v._v("假设我们定义一个取值范围在"),t("code",[v._v("[0,1]")]),v._v("之间的表示x，那么这个x叫做Bit的变量。")]),v._v(" "),t("li",[t("code",[v._v("Bit x;")]),v._v("声明Bit类型的变量x")]),v._v(" "),t("li",[t("code",[v._v("Bit x = 0;")]),v._v(" 称为声明Bit类型的变量x，并初始化为0。可以认为是定义了变量x。")])])]),v._v(" "),t("li",[v._v("Java类型"),t("br"),v._v("\n我们说Java是一门高级语言，那么她又支持哪些类型呢？\n"),t("ul",[t("li",[v._v("首先Java是一门静态类型语言，定义变量时，必须声明变量的类型。")]),v._v(" "),t("li",[v._v("Java分为基本数据类型和引用类型（非基本数据类型）\n"),t("ul",[t("li",[t("p",[v._v("基本数据类型"),t("br"),v._v("\n基本数据类型是Java语言的预定义类型，基本数据类型的变量定义在堆栈中。总的来说，分为布尔和数值两大类。数值分为整型和浮点型。\n"),t("table",[t("tr",[t("td",[v._v("简单分类"),t("br")]),t("td",[v._v("具体类型")]),v._v(" "),t("td",[v._v("表示范围")]),v._v(" "),t("td",[v._v("字节数")])]),v._v(" "),t("tr",[t("td",{attrs:{rowspan:"1"}},[v._v(" 布尔类 ")]),v._v(" "),t("td",[v._v(" boolean ")]),v._v(" "),t("td",[v._v(" true或false ")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",{attrs:{rowspan:"1"}},[v._v(" 字符类 ")]),v._v(" "),t("td",[v._v(" char ")]),v._v(" "),t("td",[v._v(" 0 ~ 65535 (以int表示)")]),v._v(" "),t("td",[v._v(" 2 ")])]),v._v(" "),t("tr",[t("td",{attrs:{rowspan:"7"}},[v._v(" 数值类 ")])]),v._v(" "),t("tr",[t("td",[v._v(" byte ")]),v._v(" "),t("td",[v._v("-128 ~ 127 ")]),v._v(" "),t("td",[v._v(" 1 ")])]),v._v(" "),t("tr",[t("td",[v._v(" short ")]),v._v(" "),t("td",[v._v(" -32768 ~ 32767 ")]),v._v(" "),t("td",[v._v(" 2 ")])]),v._v(" "),t("tr",[t("td",[v._v(" int ")]),v._v(" "),t("td",[v._v("-2147483648 ~ 2147483647")]),v._v(" "),t("td",[v._v(" 4 ")])]),v._v(" "),t("tr",[t("td",[v._v(" long ")]),v._v(" "),t("td",[v._v("-9223372036854775808 ~ 9223372036854775807")]),v._v(" "),t("td",[v._v(" 8 ")])]),v._v(" "),t("tr",[t("td",[v._v(" float ")]),v._v(" "),t("td",[v._v(" 1.4E-45 ~ 3.4028235E38")]),v._v(" "),t("td",[v._v(" 4 ")])]),v._v(" "),t("tr",[t("td",[v._v(" double ")]),v._v(" "),t("td",[v._v("4.9E-324 ~ 1.7976931348623157E308")]),v._v(" "),t("td",[v._v(" 8 ")])])])])]),v._v(" "),t("li",[t("p",[v._v("引用类型")]),v._v(" "),t("blockquote",[t("p",[v._v("null本身作为null类型，由于不能定义其变量，也不能强转为null类型，通常可以忽略将其作为null类型，而是将其作为任何引用类型的特殊值。")])]),v._v(" "),t("p",[v._v("引用类型的对象X定义在堆上，引用类型的变量x定义在堆栈上，变量x的值保存了堆上X的内存地址，读作变量x指向对象X\n引用类型包括Class，Interface，array。")])])])])])]),v._v(" "),t("li",[v._v("运算符"),t("br"),v._v("\n运算存在着优先级，如乘除运算的优先级高于加减运算。对于拿不准的优先级使用圆括号显式表示运算数的结合\n"),t("ul",[t("li",[v._v("算术运算\n"),t("code",[v._v("+ - * / % 正负 前置++，后置++，前置--，后置--")])]),v._v(" "),t("li",[v._v("关系运算\n"),t("code",[v._v("> >= < <= ==")])]),v._v(" "),t("li",[v._v("位移运算\n"),t("code",[v._v("<< <<< >>>")])]),v._v(" "),t("li",[v._v("位运算\n"),t("code",[v._v("& | ~")])]),v._v(" "),t("li",[v._v("逻辑运算\n"),t("code",[v._v("&& || !")])]),v._v(" "),t("li",[v._v("三目运算\n"),t("code",[v._v("? :")])])])]),v._v(" "),t("li",[v._v("表达式\n"),t("ul",[t("li",[v._v("表达式是右值表达式，表达式计算的结果可赋值给等号左边的变量，或作为方法返回值，或作为方法入参。")]),v._v(" "),t("li",[v._v("表达式通常由运算符和参与对应运算的操作数组成。如加法表达式"),t("code",[v._v("a + b")]),v._v("。")]),v._v(" "),t("li",[v._v("注意运算符的操作数类型必须兼容，基本数据类型的运算，如果运算数之间的类型不同，那么会转换为相同的精度更高的类型后进行运算。例如int类型的操作数和long类型的操作数做加法运算，那么int类型的操作数会被转换为long类型。")]),v._v(" "),t("li",[v._v("Java不支持运算符重载，例如，不能对两个类的对象进行相加（基本类型的包装类及String类除外）")])])]),v._v(" "),t("li",[v._v("语句\n"),t("ul",[t("li",[v._v("Java中语句以分号结尾"),t("code",[v._v(";")])]),v._v(" "),t("li",[v._v("声明语句"),t("br"),v._v(" "),t("code",[v._v("int a = 0;")])]),v._v(" "),t("li",[v._v("条件语句\n"),t("ul",[t("li",[t("code",[v._v("if")]),v._v(" "),t("code",[v._v("if else")]),v._v(" "),t("code",[v._v("if else if else")])]),v._v(" "),t("li",[t("code",[v._v("switch case")])])])]),v._v(" "),t("li",[v._v("循环语句\n"),t("ul",[t("li",[t("code",[v._v("for")])]),v._v(" "),t("li",[t("code",[v._v("while")])]),v._v(" "),t("li",[t("code",[v._v("do while")])])])]),v._v(" "),t("li",[v._v("返回语句\n"),t("ul",[t("li",[t("code",[v._v("return")])])])]),v._v(" "),t("li",[v._v("break，continue语句")]),v._v(" "),t("li",[v._v("方法调用语句\n"),t("ul",[t("li",[t("code",[v._v("objectX.doSomething()")])])])])])])])])}),[],!1,null,null,null);_.default=e.exports}}]);