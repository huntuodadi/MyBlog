# 你不知道的js(中)

- JavaScript 有 七 种 内 置 类 型: String,Number,Object,Array,null,undefined,Symbol
- 变量没有类型，但它们持有的值有类型。类型定义了值的行为特征
- undefined 是变量未被复值。undeclared 则表示变量还没有被声明过，typeof都返回undefind
- 使用 Object.create(null) 创建的对象 [[Prototype]] 属性为 null，并且没 有 valueOf() 和 toString() 方法
- 简单值(即标量基本类型值，scalar primitive)总是通过值复制的方式来赋值 / 传递，包括 null、undefined、字符串、数字、布尔和 ES6 中的 symbol,复合值(compound value)——对象(包括数组和封装对象，参见第 3 章)和函数，则总 是通过引用复制的方式来赋值 / 传递
- 数字类型有几个特殊值，包括 NaN(意指“not a number”，更确切地说是“invalid number”)、+Infinity、-Infinity 和 -0
- void 运算符返回 undefined
- Array 构造函数只带一个数字参数的时候，该参数会被作为数组的预设长度(length)，而 非只充当数组中的一个元素
- Function.prototype 是一个函数，RegExp.prototype 是一个正则表达式，而 Array. prototype 是一个数组。
- JSON.stringify(..) 在对象中遇到 undefined、function 和 symbol 时会自动将其忽略，统一返回undefined,在<br />
数组中则会返回 null
- 一元运算 + 被普遍认为是显式强制类型转换
- 解析允许字符串中含有非数字字符，解析按从左到右的顺序，如果遇到非数字字符就停 止。而转换不允许出现非数字字符，否则会失败并返回 NaN
- 布尔值隐式强制类型转换。
- (1)if (..)语句中的条件判断表达式。
- (2)for ( .. ; .. ; .. )语句中的条件判断表达式(第二个)。
- (3) while (..) 和 do..while(..) 循环中的条件判断表达式。
- (4)? :中的条件判断表达式。
- (5) 逻辑运算符 ||(逻辑或)和 &&(逻辑与)左边的操作数(作为条件判断表达式)。
- ES6 允许 从符号到字符串的显式强制类型转换，然而隐式强制类型转换会产生错误
- == 允许在相等比较中进行强制类型转换，而 === 不允许
- ASI(自动分号插入)是 JavaScript 引擎的代码解析纠错机制，它会在需要的地方自动插 入分号来纠正解析错误
- 不要使用 arguments，如果非用不可，也切勿同时使用 arguments 和其对应的命名参数。
- 并发是指两个或多个事件链随时间发展交替执行，以至于从更高的层次来看，就像是同时 在运行(尽管在任意时刻只处理一个事件)
- 回调函数包裹或者说封装了程序的延续(continuation)<br />
*若向Promise.all([ .. ])传入空数组，它会立即完成，但Promise. race([ .. ]) 会挂住，且永远不会决议。
- promise解决了我们因只用回调的代码而备受困扰的控制反转问题
- yield/next(..)这一对不只是一种控制机制，实际上也是一种双向消息传递机制
- Web Worker 让你可以在独立的线程运行一个 JavaScript 文件(即程序)，使用异步事件在 线程之间传递消息。它们非常适用于把长时间的或资源密集型的任务卸载到不同的线程 中，以提高主 UI 线程的响应性
- SIMD 打算把 CPU 级的并行数学运算映射到 JavaScript API，以获得高性能的数据并行运 算
- asm.js 描述了 JavaScript 的一个很小的子集，它避免了 JavaScript 难以优化的部分 (比如垃圾收集和强制类型转换)，并且让 JavaScript 引擎识别并通过激进的优化运行这样 的代码
