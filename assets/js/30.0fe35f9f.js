(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{475:function(t,n,a){"use strict";a.r(n);var e=a(25),s=Object(e.a)({},(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"go数字类型"}},[t._v("go数字类型")]),t._v(" "),a("p",[a("strong",[t._v("导读：")])]),t._v(" "),a("ul",[a("li",[t._v("int")]),t._v(" "),a("li",[t._v("float")]),t._v(" "),a("li",[t._v("complex")]),t._v(" "),a("li",[t._v("issues")])]),t._v(" "),a("h2",{attrs:{id:"int"}},[t._v("int")]),t._v(" "),a("p",[t._v("int 是go语言的整数类型，一共分为下面这么几类")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("int")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("有符号的整数类型，具体占几个字节要看操作系统的分配，不过至少分配给32位")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("uint")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("非负整数类型，具体占几个字节要看操作系统的分配，不过至少分配给32位")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("int8")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("有符号的整数类型，占8位bit，1个字节。范围从负的2的7次方到正的2的7次方减1")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("int16")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("有符号的整数类型，占16位bit，2个字节。范围从负的2的15次方到正的2的15次方减1")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("int32")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("有符号的整数类型，占32位bit，4个字节。范围从负的2的31次方到正的2的31次方减1")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("int64")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("有符号的整数类型，占64位bit，8个字节。范围从负的2的63次方到正的2的63次方减1")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("uint8")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("无符号的正整数类型，占8位，从0到2的8次方减1.也就是0到255")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("uint16")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("无符号的正整数类型，占16位，从0到2的16次方减1")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("uint32")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("无符号的正整数类型，占32位，从0到2的32次方减1")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("uint64")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("无符号的正整数类型，占64位，从0到2的64次方减1")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("uintptr")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("无符号整数类型。它大到足以容纳任何指针")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("rune")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("int32的别名，代表一个 UTF-8 字符")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("byte")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("uint8别名，代表了ASCII 码的一个字符")])])])]),t._v(" "),a("p",[t._v("go使用"),a("code",[t._v("'\\x12'")]),t._v(" 或者使用 "),a("code",[t._v("0x12")]),t._v("来表示16进制")]),t._v(" "),a("p",[t._v("go使用"),a("code",[t._v("'\\012'")]),t._v("或者使用"),a("code",[t._v("012")]),t._v("来表示8进制")]),t._v(" "),a("p",[t._v("go不能直接显示2进制，使用"),a("code",[t._v('fmt.Printf("%b",12)')]),t._v(" "),a("code",[t._v("1000")]),t._v(" 来输出一个二进制")]),t._v(" "),a("h2",{attrs:{id:"float"}},[t._v("float")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("float32")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("浮点型，包括正负小数，IEEE-754 32位的集合，提供大约 6 个十进制数的精度，math.MaxFloat32 表示 float32 能取到的最大数值,math.SmallestNonzeroFloat32表示最小值")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("float64")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("浮点型，包括正负小数，IEEE-754 64位的集合，提供约 15 个十进制数的精度，math.MaxFloat64 表示 float64 能取到的最大数值,math.SmallestNonzeroFloat64表示最小值")])])])]),t._v(" "),a("p",[t._v("浮点数使用 "),a("code",[t._v('fmt.Printf("%.4f\\n", math.Pi)')]),t._v(" ，"),a("code",[t._v("%.nf")]),t._v(" 来控制保留几位小数")]),t._v(" "),a("h2",{attrs:{id:"complex-复数"}},[t._v("complex 复数")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("complex64")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("复数，实部和虚部是float32")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("complex128")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("复数，实部和虚部都是float64")])])])]),t._v(" "),a("p",[t._v("使用go语言内置的函数 "),a("code",[t._v("real()")]),t._v("和"),a("code",[t._v("imag()")]),t._v("来分别获取到复数的实部和虚部，构建复数的时候使用内置函数"),a("code",[t._v("complex()")])]),t._v(" "),a("h2",{attrs:{id:"issues"}},[t._v("issues")]),t._v(" "),a("p",[a("em",[a("strong",[t._v("问题一：")])]),t._v(" go语言数字之间的类型转化是如何进行的")]),t._v(" "),a("p",[t._v("go语言的类型转换是显性转化的，数字类型之间可以使用这种方法")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("\nf "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("float64")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("em",[a("strong",[t._v("问题二：")])]),t._v(" 能说说"),a("code",[t._v("uintptr")]),t._v("和"),a("code",[t._v("unsafe.Pointer")]),t._v("的区别吗")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("unsafe.Pointer")]),t._v("是通用指针类型，它不能参与计算")]),t._v(" "),a("li",[a("code",[t._v("uintptr")]),t._v("是指针运算的工具，但是它不能持有指针对象（意思就是它跟指针对象不能互相转换）")]),t._v(" "),a("li",[a("code",[t._v("unsafe.Pointer")]),t._v("和"),a("code",[t._v("uintptr")]),t._v("可以相互转换，"),a("code",[t._v("unsafe.Pointer")]),t._v("和指针对象可以相互转换，但是"),a("code",[t._v("uintptr")]),t._v("和指针对象不能相互转换")]),t._v(" "),a("li",[t._v("unsafe.Pointer是指针对象进行运算（也就是uintptr）的桥梁")])]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"unsafe"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指针对象")]),t._v("\n\tv "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("new")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将指针对象转化为通用指针类型")]),t._v("\n\tvp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" unsafe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Pointer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将通用指针类型转换为指针对象")]),t._v("\n\tvo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//将通用指针对象转化为uintptr")]),t._v("\n\tuv "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("uintptr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//将uintptr转换为通用指针对象")]),t._v("\n\tvpp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" unsafe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Pointer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("uv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" uv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vpp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对指针对象的地址进行计算")]),t._v("\n\tt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("new")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 首先先将t转化为unsafe.Pointer类型")]),t._v("\n\tpt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" unsafe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Pointer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 然后将pointer再转化为 uintptr")]),t._v("\n\trt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("uintptr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//进行计算")]),t._v("\n\tnpt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" rt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("uintptr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 计算完毕后，再将uintptr转化为unsafe.Pointer再转换为*string类型")]),t._v("\n\tnt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("unsafe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Pointer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("npt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" npt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("p",[a("em",[a("strong",[t._v("问题三：")])]),t._v(" rune和byte的区别")]),t._v(" "),a("p",[t._v("rune是int32，byte是uint8，相比byte来说，rune可以容纳的字符个数要多很多，所以utf8编码的字符使用rune，而ascii使用byte,例如'中' byte无法承受，\"中\"转为"),a("code",[t._v("[]byte")]),t._v("的时候是"),a("code",[t._v("[228 184 173]")]),t._v(',"中"转换为'),a("code",[t._v("[]rune")]),t._v("则是等于"),a("code",[t._v("[20013]")]),t._v("因为rune可承受的数值更大，并且一个utf8的字符就等于一个rune的数值，如果是使用'中'那默认就是rune类型")]),t._v(" "),a("blockquote",[a("p",[t._v("unicode是一种字符编码，让每个字符和一个数字对应起来，仅此而已，至于这个数字如何存储它就不管了。utf8就是定义了如何具体存储这个编码数字的一种方法")])]),t._v(" "),a("h2",{attrs:{id:"参考资料"}},[t._v("参考资料")]),t._v(" "),a("ul",[a("li",[t._v("https://zhuanlan.zhihu.com/p/145220416")]),t._v(" "),a("li",[t._v("http://www.manongjc.com/article/50416.html")]),t._v(" "),a("li",[t._v("http://c.biancheng.net/view/18.html")])])])}),[],!1,null,null,null);n.default=s.exports}}]);