(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{589:function(t,n,a){"use strict";a.r(n);var s=a(4),e=Object(s.a)({},(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"条例6-避免创建不必要的对象。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#条例6-避免创建不必要的对象。"}},[t._v("#")]),t._v(" 条例6：避免创建不必要的对象。")]),t._v(" "),a("p",[t._v("通常适合重用单个对象而不是每次需要时创建一个功能相同的对象。重用更快，更优雅。如果对象是不可变的，那么对象总是可以重用的。\n作为什么不该去做的一个极端例子：考虑下面语句\n"),a("code",[t._v('String s = new String("bikini"); // DON\'T DO THIS!')]),t._v('\n这条语句每次执行的时候创建了一个新的字符串实例，这些对象的创建都是没有必要的。String构造函数的参数("bikini")本身就是一个\n字符串实例，和构造函数创建的所有字符串对象的功能是一样的。如果上面这种用法出现在一个循环或者频繁调用的方法里，百万个字符串\n实例被创建了，然而根本没必要。')]),t._v(" "),a("p",[t._v("改进的版本是如下简单的这句："),a("code",[t._v('String s = "bikini";')]),t._v("\n该版本使用了单个字符串实例，而不是每次执行的时候创建一个新的。甚者，它保障了该对象可以被运行在相同虚拟机里的恰巧包含相同\n字符串字面值的其他代码重用。")]),t._v(" "),a("p",[t._v("在同时提供了静态工厂和构造函数的不可变类中你可以经常优先使用静态工厂方法来避免创建不必要的对象。比如，工厂方法\n"),a("code",[t._v("Boolean.valueOf(String)")]),t._v("优先于构造函数"),a("code",[t._v("Boolean(String)")]),t._v("，该构造函数在Java 9中已被置为不建议使用。构造函数每次\n调用的时候必定会创建一个新的对象，而工厂方法则不被要求这么做，实际上也不会这么做。除了重用不可变对象，也可以重用那些你知道\n不会被更改的那些可变对象。")]),t._v(" "),a("p",[t._v("一些对象的创建开销比其他的要大得多。如果你反复需要这么一个昂贵的对象，建议将其缓存以备后用。不幸的是，当你创建这样的对象时，\n它并不是那么明显。假设你要写一个方法来确定字符串是否是一个合法的罗马数字。下面时使用正则表达处理的最简单方式。")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Performance can be greatly improved!")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isRomanNumeral")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("matches")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^(?=.)M*(C[MD]|D?C{0,3})"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("这个实现的问题在于，它依赖"),a("code",[t._v("String.matches")]),t._v("方法。尽管"),a("code",[t._v("String.matches")]),t._v("是检查一个字符串是否匹配正则表达式的最简单方式，但是\n在性能严苛的场景下不适合重复使用。问题是它内部创建了一个Pattern实例用于正则表达式，而且只使用一次。之后就待被垃圾回收。\n创建一个正则模式实例代价高昂因为需要将正则表达式编译成有限状态机。")]),t._v(" "),a("p",[t._v("为提升性能，作为类初始化一部分，显式将正则表达式编译为正则模式实例（它是不可变的），将其缓存，然后每次调用isRomanNumeral方法\n时重用相同的实例：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('// Reusing expensive object for improved performance\npublic class RomanNumerals {\nprivate static final Pattern ROMAN = Pattern.compile(\n"^(?=.)M*(C[MD]|D?C{0,3})"\n+ "(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$");\nstatic boolean isRomanNumeral(String s) {\nreturn ROMAN.matcher(s).matches();\n}\n}\n')])])]),a("p",[t._v("改进的isRomanNumeral版本在频繁调用时将提供显著的性能提升。在我的的机器上，对于8个字符的输入串，原始的版本花费1.1微秒\n然后改进的版本花费0.17微秒，快6.5倍。不仅性能提升，而且可以说清晰度也提升了。")]),t._v(" "),a("p",[t._v("将不可见的正则实例置为静态的不可修改的字段可以给实例一个名字，它远比正则表达式本身更具有可读性。")]),t._v(" "),a("p",[t._v("如果包含isRomanNumeral方法改进版本的类初始化后，但方法从未被使调用过，ROMAN字段的初始化是没有必要的。第一次调用\nisRomanNumeral方法时通过懒初始化字段可以消除初始化，但是这并不推荐。正如懒加载常见的问题，没有可观的性能提升的同时\n会复杂化实现。")]),t._v(" "),a("p",[t._v("当对象是不可变的，很明显可以被安全地重用，但有一些其他的场景远不那么明显，甚至违反直觉。考虑到适配器（也就是视图）的场景，\n适配器是代理到幕后对象的对象，提供一个可选的接口。因为适配器对象没有超出幕后对象的状态，没有必要为给定对象创建多于一个实例的\n适配器。")]),t._v(" "),a("p",[t._v("比如，Map接口的keySet方法返回Map对象的Set视图，包含了map中的所有键。乍看，貌似每次调用keySet会创建一个新的Set实例，但每次\n对给定Map对象的keySet调用可能会返回相同的Set实例。尽管返回的Set实例通常是可变的，所有的返回对象功能是相同的：当其中一个返回\n对象变更，其他的也会变更，因为它们幕后都是相同的Map实例。虽然创建keySet视图对象的多个实例很大程度上是无害的，但它是没有必要的，\n也是没有帮助的。")]),t._v(" "),a("p",[t._v("另一个创建不必要对象的方式是自动装箱，自动装箱允许程序员混用原始类型和原始类型的装箱类型，装箱和拆箱根据需要自动发生。\n自动装箱模糊但不会消除原始类型和装箱原始类型的区别。有细微的语义区别和不太细微的性能区别。考虑下面的方法，计算int类型\n所有正整数的和。程序必须使用long算术，因为int不足够容纳所有int型正整数的和。")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Hideously slow! Can you spot the object creation?")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Long")]),t._v(" sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0L")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MAX_VALUE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nsum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" sum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("程序可以得到正确的结果，但是它比原本应有的要慢得多，由于一个字符的输入错误。变量sum声明为了Long而不是long，这意味着\n程序构造了大约2的31次方个不必要的Long实例（大致每次long型的i加到Long型的sum时创建一个）。在我的机器上将sum的声明类型从Long变更为\nlong的运行时间从6.3s变为0.59s。教训很明显：优先原始类型于装箱原始类型，且当心意外的自动装箱。")]),t._v(" "),a("p",[t._v("本条例不应该被曲解为暗示你对象的创建时昂贵的且应该避免，相反，创建和回收其构造函数几乎没有做任何显式工作的对象\n是便宜的，尤其是在现代的JVM实现上。创建额外的对象来增强程序的清晰，简洁和功能通常是一件好事。")]),t._v(" "),a("p",[t._v("相反，通过维护自己的对象池来避免对象的创建是一个糟糕的想法，除非对象池的对象及其重量级。证明一个对象值得用对象池的\n一个经典例子是数据库连接。建立连接的成本足够高，因此重用这些对象是有意义的。然而，一般来说，维护你自己的对象池会使\n代码混乱，增加内存开销，且有损性能。现代JVM实现高度优化的垃圾收集器可以轻松的应对这些轻量级的对象，胜过这样的对象池。")]),t._v(" "),a("p",[t._v("和本条例相关的是条例50防御性复制。当前条例阐述的是，当你应该重用已有对象的时候不要创建一个新对象，而条例50阐述的是，\n当你应当创建一个新的对象的时候不要重用已存在的对象。注意，在需要防御性复制时重用对象的代价远远大于不必要地创建重复对象\n的代价。当需要创建对象时没有执行防御性复制会导致隐患和安全漏洞。创建不必要的对象仅仅影响代码优雅性和性能。")])])}),[],!1,null,null,null);n.default=e.exports}}]);