module.exports = {
  title: '无畏前端路', 
  description: '乾坤未定,诸事可为',
  head: [
    ['link', { rel: 'icon', href: '/logo.jpeg'}]
  ],
  markdown: {
    lineNumbers: true
  }, 
  plugins: ['@vuepress/back-to-top'],
  themeConfig: {
    lastUpdated: '最后更新时间',
    sidebarDepth: 4,
    nav:[
      { text: '主页', link: '/' }, 
      { text: '博客文章', link: '/article/' }, 
      { text: '前端算法', link: '/algorithm/' },
      { text: '设计模式', link: '/designMode/' },
      { text: '源码释界', link: '/sourceCode/' },
      { text: '前端译界', link: '/translation/' },
      { text: '每周阅读', link: '/weekRead/' },
      { text: '读书笔记', link: '/readRecord/' },
      { text: '前端面试', link: '/interviewQuestions/' },
      { text: 'GitHub',link: 'https://github.com/Rashomon511'},
      { text: '关于', link: '/about/' },       
    ],
    sidebar:{
       '/article/': [
          {
            title: 'Javascript',
            collapsable: true,
            children: [
              '/article/Javascript/如何理解服务端渲染', 
              '/article/Javascript/AMD-CMD-COMMONJS浅析', 
              '/article/Javascript/从头手写一个Promise', 
              '/article/Javascript/函数柯里化', 
              '/article/Javascript/call,apply,bind以及实现方式', 
              '/article/Javascript/this', 
              '/article/Javascript/Object.defineProperty实现双向绑定', 
              '/article/Javascript/Proxy-与-Object-defineProperty的对比', 
              '/article/Javascript/关于数组扁平化',
              '/article/Javascript/你不知道的类型转换',
            ]
          },
          {
            title: 'CSS',
            children: [
              '/article/CSS/图片实现滤境对三种方式',
            ]
          },
          {
            title: 'React',
            children: [
              '/article/React/Next服务端渲染框架',
              '/article/React/React性能优化的8种方式了解一下？',
              '/article/React/Hooks模拟生命周期',
              '/article/React/react中的key值',
              '/article/React/react生命周期',
              '/article/React/ref和DOM操作',
              '/article/React/setFieldsValue',
              '/article/React/react16新特性',
              '/article/React/react的受控组件和非受控组件',
              '/article/React/React创建组件的三种方式',
              '/article/React/React的类型检查',  
            ]
          },
          {
            title: 'HTTP',
            children: [
              '/article/Http/前端必懂的HTTP缓存机制',
            ]
          },
          {
            title: '浏览器',
            children: [
              '/article/浏览器/浏览器渲染机制',
              '/article/浏览器/彻底搞清楚Event-Loop',
            ]
          },
          {
            title: 'Webpack',
            children: [
              '/article/Webpack/webpack热更新',
              '/article/Webpack/利用webpack搭建脚手架一套完整流程',
              '/article/Webpack/手撸loader和plugin全解析',
            ]
          },
          {
            title: 'Typescript',
            children: [
              '/article/Typescript/TypeScript入门—类型一',
              '/article/Typescript/TypeScript入门二',
              '/article/Typescript/TypeScript入门三',
              '/article/Typescript/Typescript入门接口与类',
              '/article/Typescript/Typescript文件模块知多少',
            ]
          },
          {
            title: '数据流',
            children: [
              '/article/数据流/前端数据流管理方案之一',
              '/article/数据流/前端数据流管理方案之二',
              '/article/数据流/前端数据流管理方案之三',
              '/article/数据流/前端数据流管理方案之四',
            ]
          },
          {
            title: 'Node',
            children: []
          },
          {
            title: '其他',
            children: [
              '/article/other/发布npm包',
              '/article/other/利用nginx部署静态页面',
              '/article/other/install安装软件的路径',
              '/article/other/linux系统安装yum环境',
            ]
          },

        ],
        '/algorithm/': [],
        '/designMode/': [],
        '/sourceCode/': [
          {
            title: 'Redux',
            collapsable: true,
            children: [
              '/sourceCode/redux/redux源码分析一',
              '/sourceCode/redux/redux源码分析二',
            ]
          },
          {
            title: 'Redux-Saga',
            children: [
              '/sourceCode/Saga/redux-saga源码分析一',
              '/sourceCode/Saga/redux-saga源码分析二',
            ]
          },
          {
            title: 'React',
            children: []
          },
        ],
        '/translation/': [
          {
            title: '外文翻译',
            children: [
              '/translation/flat',
            ]
          }
        ],
        '/readRecord/': [
          {
            title: 'Javascript高级程序设计',
            children: [
              '/readRecord/高程/javascript继承方式',
              '/readRecord/高程/javascript创建对象方式',
            ]
          },
          {
            title: '你所不知道的Javascript',
            children: [
              '/readRecord/你不知道的js/你不知道的js上',
              '/readRecord/你不知道的js/你不知道的js中',
              '/readRecord/你不知道的js/你不知道的js下',
            ]
          },
          {
            title: 'webpack',
            children: [
              '/readRecord/webpack/webpack4学习笔记一',
              '/readRecord/webpack/webpack4学习笔记二',
              '/readRecord/webpack/webpack4学习笔记三',
              '/readRecord/webpack/webpack4学习笔记四',
              '/readRecord/webpack/webpack4学习笔记五',
              '/readRecord/webpack/webpack4学习笔记六',
              '/readRecord/webpack/webpack4学习笔记七',
              '/readRecord/webpack/webpack4学习笔记八',
              '/readRecord/webpack/webpack4学习笔记九',
            ]
          },
          {
            title: '正则表达式迷你书',
            children: [
              '/readRecord/正则小书/正则表达式学习总结一',
              '/readRecord/正则小书/正则表达式学习总结二',
              '/readRecord/正则小书/正则表达式学习总结三',
              '/readRecord/正则小书/正则表达式学习总结四',
            ]
          },
        ],
        '/interviewQuestions/': [
          {
            title: '前端知识体系',
            children: [
              '/interviewQuestions/Javascript',
              '/interviewQuestions/Javascript手写',
              '/interviewQuestions/Css',
              '/interviewQuestions/Html',
              '/interviewQuestions/浏览器相关',
              '/interviewQuestions/计算机网络',
              '/interviewQuestions/前端框架',
              '/interviewQuestions/前端工程',
              '/interviewQuestions/安全与性能',
              '/interviewQuestions/Node',
              '/interviewQuestions/版本控制',
              '/interviewQuestions/测试相关',
            ]
          }

        ]
    }
  }
}