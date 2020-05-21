(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{315:function(t,e,a){"use strict";a.r(e);var r=a(0),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"redux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redux","aria-hidden":"true"}},[t._v("#")]),t._v(" Redux")]),t._v(" "),a("p",[t._v("Redux 是 JavaScript 状态容器，提供可预测化的状态管理.核心概念就是初始状态通过reduce接收只是一个接收 state 和 action，并返回新的 state，所得的就是当前状态。\n")]),t._v(" "),a("h2",{attrs:{id:"redux三大原则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redux三大原则","aria-hidden":"true"}},[t._v("#")]),t._v(" Redux三大原则")]),t._v(" "),a("h3",{attrs:{id:"单一数据源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单一数据源","aria-hidden":"true"}},[t._v("#")]),t._v(" 单一数据源")]),t._v(" "),a("p",[t._v("整个应用的 state 被储存在一棵 object tree 中，并且这个 object tree 只存在于唯一一个 store 中。")]),t._v(" "),a("h3",{attrs:{id:"state-是只读的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#state-是只读的","aria-hidden":"true"}},[t._v("#")]),t._v(" State 是只读的")]),t._v(" "),a("p",[t._v("唯一改变 state 的方法就是触发 action，action 是一个用于描述已发生事件的普通对象。")]),t._v(" "),a("h3",{attrs:{id:"使用纯函数来执行修改"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用纯函数来执行修改","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用纯函数来执行修改")]),t._v(" "),a("p",[t._v("为了描述 action 如何改变 state tree ，你需要编写 reducers。Reducer 只是一些纯函数，它接收先前的 state 和 action，并返回新的 state。并不做其他操作（修改传入的参数；执行有副作用的操作；调用非纯函数）。")]),t._v(" "),a("h2",{attrs:{id:"redux各个组成部分"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redux各个组成部分","aria-hidden":"true"}},[t._v("#")]),t._v(" redux各个组成部分")]),t._v(" "),a("h3",{attrs:{id:"action"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#action","aria-hidden":"true"}},[t._v("#")]),t._v(" Action")]),t._v(" "),a("p",[t._v("Action 是把数据从应用传到 store 的有效载荷,它是 store 数据的唯一来源。一般来说你会通过 store.dispatch() 将 action 传到 store。")]),t._v(" "),a("blockquote",[a("p",[t._v("注意：“action” 和 “action 创建函数” 这两个概念很容易混在一起，使用时最好注意区分。Action 创建函数 就是生成 action 的方法")])]),t._v(" "),a("h3",{attrs:{id:"reducer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reducer","aria-hidden":"true"}},[t._v("#")]),t._v(" Reducer")]),t._v(" "),a("p",[t._v("actions 只是描述了有事情发生了这一事实，并没有描述应用如何更新 state。而Reducer就是一个纯函数，接收旧的 state 和 action，返回新的 state。\n现在只需要谨记 reducer 一定要保持纯净。只要传入参数相同，返回计算得到的下一个 state 就一定相同。没有特殊情况、没有副作用，没有 API 请求、没有变量修改，单纯执行计算。")]),t._v(" "),a("h3",{attrs:{id:"store"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#store","aria-hidden":"true"}},[t._v("#")]),t._v(" Store")]),t._v(" "),a("p",[t._v("Redux 应用只有一个单一的 store，Store是把action和reducer联系到一起到对象Store 有以下职责：")]),t._v(" "),a("p",[t._v("1.维持应用的 state；\n2.提供 getState() 方法获取 state；\n3.提供 dispatch(action) 方法更新 state；\n4.通过 subscribe(listener) 注册监听器;\n5.通过 subscribe(listener) 返回的函数注销监听器")]),t._v(" "),a("h2",{attrs:{id:"redux流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redux流程","aria-hidden":"true"}},[t._v("#")]),t._v(" Redux流程")]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/Redux/bg2016091802.jpg",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"react-redux流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-redux流程","aria-hidden":"true"}},[t._v("#")]),t._v(" react+redux流程")]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/Redux/react.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"redux优缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redux优缺点","aria-hidden":"true"}},[t._v("#")]),t._v(" Redux优缺点")]),t._v(" "),a("p",[t._v("优点\n1.纯函数的开发模式，无副作用。\n2.单向数据流流动自然清晰，任何的dispatch都会通知到reducer来处理，增强更新粒度可控性。\n3.利用中间件的模式来解决异步带来的副作用问题。\n4.可时间回溯。为了解决阻碍回溯的“对象引用”机制，将 immutable应用到了前端。这下所有状态都不会被修改，基于此的redux-dev-tools提高了开发体验\n缺点：")]),t._v(" "),a("p",[t._v("1.代码书写啰嗦，造成代码冗余")]),t._v(" "),a("p",[t._v("redux"),a("a",{attrs:{href:"https://github.com/LuoShengMen/React-Whole-barrels",target:"_blank",rel:"noopener noreferrer"}},[t._v("demo"),a("OutboundLink")],1)]),t._v(" "),a("h1",{attrs:{id:"扩展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#扩展","aria-hidden":"true"}},[t._v("#")]),t._v(" 扩展")]),t._v(" "),a("h2",{attrs:{id:"redux处理异步的中间件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redux处理异步的中间件","aria-hidden":"true"}},[t._v("#")]),t._v(" Redux处理异步的中间件")]),t._v(" "),a("p",[t._v("Redux针对异步数据流的情况，也设计出中间件这个概念来隔离异步所带来的副作用。它的主要目的就是控制异步dispatch，分离副作用。")]),t._v(" "),a("p",[t._v("接下来说说最具代表性的两个异步中间件：redux-thunk 和 redux-saga。")]),t._v(" "),a("h3",{attrs:{id:"redux-thunk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redux-thunk","aria-hidden":"true"}},[t._v("#")]),t._v(" redux-thunk")]),t._v(" "),a("p",[t._v("redux-thunk 的任务执行方式是从 UI 组件直接触发任务,redux-thunk 的主要思想是扩展 action，使得 action 从一个对象变成一个函数。")]),t._v(" "),a("h3",{attrs:{id:"redux-saga"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redux-saga","aria-hidden":"true"}},[t._v("#")]),t._v(" redux-saga")]),t._v(" "),a("p",[t._v("sages 采用 Generator 函数来 yield Effects（包含指令的文本对象）。Generator 函数的作用是可以暂停执行，再次执行的时候从上次暂停的地方继续执行.在 redux-saga 中，UI 组件自身从来不会触发任务，它们总是会 dispatch 一个 action 来通知在 UI 中哪些地方发生了改变，而不需要对 action 进行修改")]),t._v(" "),a("p",[t._v("redux-thunk 的缺点：\n（1）action 虽然扩展了，但因此变得复杂，后期可维护性降低；\n（2）thunks 内部测试逻辑比较困难，需要mock所有的触发函数；\n（3）协调并发任务比较困难，当自己的 action 调用了别人的 action，别人的 action 发生改动，则需要自己主动修改；\n（4）业务逻辑会散布在不同的地方：启动的模块，组件以及thunks内部。\nredux-saga 的优点：\n（1）声明式 Effects：所有的操作以JavaScript对象的方式被 yield，并被 middleware 执行。使得在 saga 内部测试变得更加容易，可以通过简单地遍历 Generator 并在 yield 后的成功值上面做一个 deepEqual 测试。\n（2）高级的异步控制流以及并发管理：可以使用简单的同步方式描述异步流，并通过 fork 实现并发任务。\n（3）架构上的优势：将所有的异步流程控制都移入到了 sagas，UI 组件不用执行业务逻辑，只需 dispatch action 就行，增强组件复用性。")]),t._v(" "),a("p",[t._v("redux-saga 实践"),a("a",{attrs:{href:"https://github.com/LuoShengMen/MyBlog-front",target:"_blank",rel:"noopener noreferrer"}},[t._v("demo"),a("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=s.exports}}]);