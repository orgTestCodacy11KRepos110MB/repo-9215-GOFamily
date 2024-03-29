# 工程中的 error 规范

## 错误码

为了定位错误，以及给客户端显示必要的信息，错误码应该保证清晰和安全，并且返回给客户端的错误码不应该是全部，应该还要保留一些内容仅供系统自我查验。通常来说，错误码是十进制的整数，这样便于用户去理解，并且计算机去理解也不难。

### 常见的错误处理 模式

- 第一种，永远只返回 http status code 200 ，具体内容，失败或者成功在信息里去显示。

- 直接返回具体的 http status code，并且在body中返回简单的错误信息，以及自定义的错误代码，例如说某个请求参数没带，你可与你自定义为6687 反正是自定义的，你想定义啥就是啥。

- 直接返回具体的 http status code，并且在body中尽可能的返回非常详细的错误信息，同时也返回自定义的代码，这里要说明一下，为什么已经返回了详细的错误信息了还返回错误自定义代码，原因是，错误信息给用户查看，错误代码是让机器去使用的，所以即返回详细错误信息又返回错误代码。这种方法更优。

跟http code代码有区别，我们来设计一套自定义的错误代码

### 自定义错误代码

规则：纯数字表示，不同的部位代表了不同的模块，例如 100101： 第10服务 的01模块 的01错误

为了防止 http status code太复杂，服务端给前端返回的code尽量保证在个位数，例如只保留 200 400 500 或者顶多是 200 400 401 403 404 500，分别表示，成功，客户端错误，认证错误，授权失败，资源找不到例如URL访问错误，服务器错误

在定义错误码的时候尽量遵循不重复造轮子的原则，先定义一些通用服务的错误代码，比如例如说`通用服务-数据库错误模块` `通用服务-基本错误` 等方式，避免了重复定义错误码

对外暴漏给用户的错误，要使用 `你应该这么做` 而不应该用 `你这里做错了`

## 如何设计一个错误包

错误包应该可以支持以下特性：

1. 应当可以设计支持错误栈的错误包

2. 要求打印不同格式的错误

3. 在已有的错误上，追加一些新的信息

4. 要能判断某个error是否是指定的error

5. 要含括 error.Is 和 error.As 方法

6. 要自我定义错误码

GitHub上有众多优秀的errors包，比如 https://github.com/pkg/errors ,可以对这个包进行二次开发。

