(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{476:function(t,s,a){"use strict";a.r(s);var n=a(25),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"求值顺序"}},[t._v("求值顺序")]),t._v(" "),a("h2",{attrs:{id:"包级变量声明语句中的表达式求值顺序"}},[t._v("包级变量声明语句中的表达式求值顺序")]),t._v(" "),a("ul",[a("li",[t._v("按照变量的声明顺序，"),a("strong",[t._v("从上到下，从左到右")]),t._v("，进行求值")]),t._v(" "),a("li",[t._v("如果a求值时有依赖项b，或者是间接的依赖项b，那么先求值b")]),t._v(" "),a("li",[t._v("在求值的过程中会一直对于变量是否拥有依赖项进行查找，直到查询到没有依赖项的变量将其求值，然后重复这个查找，最后全部求值。")]),t._v(" "),a("li",[t._v("同一个包不同文件的处理，原则上如果a文件在b文件前面，那么a文件中的所有变量求值比b文件中的更早，除非a文件变量依赖了b中的变量。")])]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b\n  b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("_")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  d "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  d "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" d\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ol",[a("li",[t._v("查找没有依赖项的变量将其求值，这一轮中是d，此时只有[d=3]")]),t._v(" "),a("li",[t._v("查找没有依赖项的变量进行求值，这一轮中a还是不符合，但是b符合了，所以现在是[b=4,d=4]")]),t._v(" "),a("li",[t._v("查找没有依赖项的变量进行求值，这一轮中是_ ,此时[b=4,d=5]")]),t._v(" "),a("li",[t._v("查找没有依赖项的变量进行求值，这一轮中是c，此时[b=4,c=6,d=6]")]),t._v(" "),a("li",[t._v("查找没有依赖项的变量进行求值，这一轮中是a,此时[a=10,b=4,c=6,d=6]")])]),t._v(" "),a("p",[t._v("输出 10 4 6 6")]),t._v(" "),a("h2",{attrs:{id:"普通求值顺序"}},[t._v("普通求值顺序")]),t._v(" "),a("p",[t._v("这包括了，函数，方法，channel中的求值顺序。")]),t._v(" "),a("ul",[a("li",[t._v("规定是从左到右")])]),t._v(" "),a("p",[t._v("y[f()], ok = g(h(), i()+x[j()], <-c), k()")]),t._v(" "),a("p",[t._v("这个语句的求值顺序就是 f()  h() i() j() x[] <-c g() k()")]),t._v(" "),a("p",[t._v("普通值求值顺序和包级变量求值依赖顺序一起使用的时候，包级变量优先级更高，并且它在导入包的时候就已经求值了，而普通的求值顺序只有调用的时候才会求值。")]),t._v(" "),a("h2",{attrs:{id:"赋值语句中的求值顺序"}},[t._v("赋值语句中的求值顺序")]),t._v(" "),a("p",[t._v("赋值语句求值有两个阶段 --- “先算后赋”")]),t._v(" "),a("ul",[a("li",[t._v("对等号左边的下标表达式，指针解引用表达式，以及等号右边的表达式，从左到右的依次求值")]),t._v(" "),a("li",[t._v("按照从左到右的顺序将变量进行赋值")])]),t._v(" "),a("p",[t._v("例如")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[t._v("n0 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nn1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\nn0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("n1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" n0"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("n1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("n0\n")])])]),a("ol",[a("li",[t._v("左边没有要处理的表达式，右侧有，那么第一个位置就是n0+n1 ,因为n0和n1已经存在了初始化的内容了，所以这里直接就是3，no = 1，这时n0和n1还是1 2，因为还没有赋值呢。")]),t._v(" "),a("li",[t._v("开始赋值：右侧一个是3 一个是1，那么最新的no和n1就是 3 1")])]),t._v(" "),a("h2",{attrs:{id:"switch-select中的表达式的求值顺序"}},[t._v("switch select中的表达式的求值顺序")]),t._v(" "),a("p",[t._v("这里主要想说一下惰性求值：就是只有需求的时候才会进行求值")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      fmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"--"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("首先先求值的是 switch 后面的f（2）")]),t._v(" "),a("p",[t._v("然后对 f(1) f(2) 求值； f(3) 不会求值,因为f（2）已经满足了要求。")]),t._v(" "),a("p",[t._v("在select case中，如果case中存在表达式，最开始会依次计算所有的表达式，只有一种除外，收case中，位于左侧的表达式，它会在接受数据之前才会计算，然后赋值。")]),t._v(" "),a("h2",{attrs:{id:"参考资料"}},[t._v("参考资料")]),t._v(" "),a("ul",[a("li",[t._v("https://go.dev/ref/spec#Order_of_evaluation")]),t._v(" "),a("li",[t._v("https://book.douban.com/subject/35720728/ 132页 - 142页")])])])}),[],!1,null,null,null);s.default=e.exports}}]);