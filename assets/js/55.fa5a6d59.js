(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{500:function(t,o,s){"use strict";s.r(o);var v=s(25),a=Object(v.a)({},(function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"命令"}},[t._v("命令")]),t._v(" "),s("p",[t._v("go拥有众多命令操作，这里将讲述关于这些命令的使用方法")]),t._v(" "),s("p",[t._v("介绍一下最常见的命令")]),t._v(" "),s("ul",[s("li",[t._v("go help 显示一个命令基本的用法，例如："),s("code",[t._v("go help fmt")])]),t._v(" "),s("li",[t._v("go doc 显示一个命令全部的用法，例如："),s("code",[t._v("go doc cmd/gofmt")])])]),t._v(" "),s("p",[t._v("使用go help 可以显示全部的形如 "),s("code",[t._v("go fmt")]),t._v(" "),s("code",[t._v("go build")]),t._v(" 这种挂靠在go后面的命令，然后 help加具体的命令，就可以显示基本用法，然后在help提示的内容中，通常会有提示你，如果使用go doc 命令去寻找更加详细的内容，比如下文要写到的，使用"),s("code",[t._v("go help fmt")]),t._v("就会显示去寻找"),s("code",[t._v("go doc cmd/gofmt")])]),t._v(" "),s("h2",{attrs:{id:"gofmt"}},[t._v("gofmt")]),t._v(" "),s("blockquote",[s("p",[t._v("go fmt 命令简单封装了gofmt命令")])]),t._v(" "),s("p",[t._v("gofmt的目的是标准化go语言的代码，增加代码的亲切感，消除不同人员写的代码的之间的隔阂感")]),t._v(" "),s("p",[t._v("介绍几个常见的使用方法，详细内容可以使用 "),s("code",[t._v("go doc cmd/gofmt")])]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("gofmt -s")]),t._v(" 简化代码")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[t._v("v "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 复杂")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("_")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("range")]),t._v(" v "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用 -s 后")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("range")]),t._v(" v "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("不过，这个命令虽然会显示出来要优化的简单写法，但是，并不会更改用户的代码，需要自己去更改。")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("gofmt -r")]),t._v(" 代码重构 replace能力")]),t._v(" "),s("p",[t._v("例子："),s("code",[t._v("gofmt -r 'a -> Student'")]),t._v(" 意思可不是 a 字符改变成 Student，这里是采用的通配符，意思就是所有的英文字符都要改成student。只要是小写字母都会被视为通配符。再举一个例子，"),s("code",[t._v("gofmt -r 'a[b:len(a)] -> a[b:]'")]),t._v(" 这里的a代表所有的英文字符串，b就会代表整数类型")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("gofmt -l")]),t._v(" 输出不满足gofmt要求的文件")]),t._v(" "),s("p",[t._v("比如 "),s("code",[t._v("gofmt -l $GOROOT")]),t._v(" 就会输出这个路径下不满足的文件列表，可以看出go的标准库不满足标准的也不少，😂")])])]),t._v(" "),s("h2",{attrs:{id:"goimports"}},[t._v("goimports")]),t._v(" "),s("p",[t._v("安装方法 "),s("code",[t._v("go get golang.org/x/tools/cmd/goimports")]),t._v("，一般的IDE都会内置这个工具，比如goland")]),t._v(" "),s("ul",[s("li",[t._v("对于代码中使用了，但是没有import的包")]),t._v(" "),s("li",[t._v("对于代码中没有使用，但是import了的包")])]),t._v(" "),s("p",[t._v("这个工具都会一一管理，少了加上，多了取消掉")]),t._v(" "),s("h2",{attrs:{id:"go-build"}},[t._v("go build")]),t._v(" "),s("h2",{attrs:{id:"go-install"}},[t._v("go install")]),t._v(" "),s("h2",{attrs:{id:"go-get"}},[t._v("go get")]),t._v(" "),s("h2",{attrs:{id:"go-clean"}},[t._v("go clean")]),t._v(" "),s("h2",{attrs:{id:"go-doc-godoc"}},[t._v("go doc godoc")]),t._v(" "),s("h2",{attrs:{id:"go-run"}},[t._v("go run")]),t._v(" "),s("h2",{attrs:{id:"go-test"}},[t._v("go test")]),t._v(" "),s("h2",{attrs:{id:"go-list"}},[t._v("go list")]),t._v(" "),s("h2",{attrs:{id:"go-fix-go-tool-fix"}},[t._v("go fix go tool fix")]),t._v(" "),s("h2",{attrs:{id:"go-vet-go-tool-vet"}},[t._v("go vet / go tool vet")]),t._v(" "),s("h2",{attrs:{id:"go-tool-pprof"}},[t._v("go tool pprof")]),t._v(" "),s("h2",{attrs:{id:"go-tool-cgo"}},[t._v("go tool cgo")]),t._v(" "),s("h2",{attrs:{id:"go-env"}},[t._v("go env")])])}),[],!1,null,null,null);o.default=a.exports}}]);