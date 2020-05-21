(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{312:function(a,s,n){"use strict";n.r(s);var e=n(0),t=Object(e.a)({},(function(){var a=this,s=a.$createElement,n=a._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h1",{attrs:{id:"利用nginx部署静态页面"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#利用nginx部署静态页面","aria-hidden":"true"}},[a._v("#")]),a._v(" 利用nginx部署静态页面")]),a._v(" "),n("p",[a._v("我看别人都有一个介绍自己的在线页面，所以我也手痒搞了一个，但是写的的让别人看见啊！\n这时候我们可以用nginx来部署自己的页面。")]),a._v(" "),n("h2",{attrs:{id:"需要条件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#需要条件","aria-hidden":"true"}},[a._v("#")]),a._v(" 需要条件")]),a._v(" "),n("ol",[n("li",[a._v("云服务器(我的是腾讯云)")]),a._v(" "),n("li",[a._v("一个自己的域名(codehao.com)")])]),a._v(" "),n("h2",{attrs:{id:"必要配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#必要配置","aria-hidden":"true"}},[a._v("#")]),a._v(" 必要配置")]),a._v(" "),n("h3",{attrs:{id:"第一步：登录云服务器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#第一步：登录云服务器","aria-hidden":"true"}},[a._v("#")]),a._v(" 第一步：登录云服务器")]),a._v(" "),n("p",[a._v("mac 电脑直接通过下面的命令行连接到你的服务器。连接时候会叫你输入密码，输入就是咯")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("ssh root@127.22.20.121 //你的服务器公有 ip\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br")])]),n("p",[a._v("现在你就登陆上了你的云服务器了，可以进行安装了")]),a._v(" "),n("h3",{attrs:{id:"第二步：安装git-node-nginx"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#第二步：安装git-node-nginx","aria-hidden":"true"}},[a._v("#")]),a._v(" 第二步：安装git,node,nginx")]),a._v(" "),n("p",[n("img",{attrs:{src:"/img/nginx/npmNginx.jpg",alt:""}})]),a._v(" "),n("p",[a._v("nginx启动成功后，在浏览器输入你IP,出现一下画面即可:\n"),n("img",{attrs:{src:"/img/nginx/nginxStart.png",alt:""}})]),a._v(" "),n("h2",{attrs:{id:"正式配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#正式配置","aria-hidden":"true"}},[a._v("#")]),a._v(" 正式配置")]),a._v(" "),n("p",[a._v("首先通过命令行新建一个 page文件夹")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("cd /usr/local\n\nmkdir page\n\ncd page\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br")])]),n("p",[a._v("进入page文件夹后，可以利用git将代码从github拉去下来")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("git clone git@github.com:LuoShengMen/Home.git\n\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br")])]),n("blockquote",[n("p",[a._v("tips: 这里不能克隆到的，需要把服务器本机的公钥添加到码云上面。这个有很多教程我就不细说了。")])]),a._v(" "),n("p",[a._v("代码都克隆到我们的服务器了之后，下面我们稍微配置一下 nginx 配置很简单，跟着我就可以了。进入到 nginx 配置目录")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("cd /etc/nginx/conf.d/\n\nvim page.conf\n\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br")])]),n("p",[a._v("然后通过 vim 命令新建一个配置文件后，按下 键盘的i 键，就可以写入内容，写入以下内容")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("server {\n   server_name www.yuming.com; //你的域名\n   root /usr/local/page;\n   index index.html;\n   location ~* ^.+\\.(jpg|jpeg|gif|png|ico|css|js|pdf|txt){\n   root /usr/local/rashomon/Home;\n   }\n}\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br")])]),n("p",[a._v("写入内容之后，按下esc然后输入:wq！来保存你编辑的内容。")]),a._v(" "),n("p",[a._v("退出之后我们需要通过命令行重启 nginx服务")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("sudo nginx -s reload\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br")])])])}),[],!1,null,null,null);s.default=t.exports}}]);