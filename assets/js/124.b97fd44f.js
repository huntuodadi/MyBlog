(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{354:function(n,s,a){"use strict";a.r(s);var e=a(0),r=Object(e.a)({},(function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"react的类型检查"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react的类型检查","aria-hidden":"true"}},[n._v("#")]),n._v(" React的类型检查")]),n._v(" "),a("p",[n._v("随着应用的变大，保证组件的正确使用也是非常必要的，因此引入React.PropTypes来对组件中的数据进行类型检查，验证有效性，当向props传入无效数据时，JavaScript 控制台会抛出警告。\n")]),n._v(" "),a("h2",{attrs:{id:"第一种方式-组件外"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第一种方式-组件外","aria-hidden":"true"}},[n._v("#")]),n._v(" 第一种方式: 组件外")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("class MyComponent extends React.Component {\n  render(){\n        return (\n            <div>MyComponent</div>\n        )\n    }\n  }\nMyComponent.propTypes = {\n  // 你可以定义一个js原始类型的prop,默认请情况下，这是都是可选的\n  optionalArray: React.PropTypes.array,\n  optionalBool: React.PropTypes.bool,\n  optionalFunc: React.PropTypes.func,\n  optionalNumber: React.PropTypes.number,\n  optionalObject: React.PropTypes.object,\n  optionalString: React.PropTypes.string,\n  optionalSymbol: React.PropTypes.symbol,\n\n  // 任何可以渲染的东西：数字，字符串，元素或数组（或片段）。\n  optionalNode: React.PropTypes.node,\n\n  // React元素\n  optionalElement: React.PropTypes.element,\n\n  // 你也可以声明prop是某个类的实例。 内部使用的是JS的instanceof运算符。\n  optionalMessage: React.PropTypes.instanceOf(Message),\n\n  // 你可以通过将它作为枚举来确保你的prop被限制到特定的值。\n  optionalEnum: React.PropTypes.oneOf(['News', 'Photos']),\n\n  // 可以是许多类型之一的对象\n  optionalUnion: React.PropTypes.oneOfType([\n    React.PropTypes.string,\n    React.PropTypes.number,\n    React.PropTypes.instanceOf(Message)\n  ]),\n\n  // 某种类型的数组\n  optionalArrayOf: React.PropTypes.arrayOf(React.PropTypes.number),\n\n  // 具有某种类型的属性值的对象\n  optionalObjectOf: React.PropTypes.objectOf(React.PropTypes.number),\n\n  // 采取特定样式的对象\n  optionalObjectWithShape: React.PropTypes.shape({\n    color: React.PropTypes.string,\n    fontSize: React.PropTypes.number\n  }),\n\n  // 你可以用`isRequired`来连接到上面的任何一个类型，以确保如果没有提供props的话会显示一个警告。\n  requiredFunc: React.PropTypes.func.isRequired,\n\n  // 任何数据类型\n  requiredAny: React.PropTypes.any.isRequired,\n\n  // 您还可以指定自定义类型检查器。 如果检查失败，它应该返回一个Error对象。 不要`console.warn`或throw，因为这不会在`oneOfType`内工作。\n  customProp: function(props, propName, componentName) {\n    if (!/matchme/.test(props[propName])) {\n      return new Error(\n        'Invalid prop `' + propName + '` supplied to' +\n        ' `' + componentName + '`. Validation failed.'\n      );\n    }\n  },\n\n  // 您还可以为`arrayOf`和`objectOf`提供自定义类型检查器。 如果检查失败，它应该返回一个Error对象。\n  // 检查器将为数组或对象中的每个键调用验证函数。\n  // 检查器有两个参数，第一个参数是数组或对象本身，第二个是当前项的键。\n  customArrayProp: React.PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName) {\n    if (!/matchme/.test(propValue[key])) {\n      return new Error(\n        'Invalid prop `' + propFullName + '` supplied to' +\n        ' `' + componentName + '`. Validation failed.'\n      );\n    }\n  })\n};\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br"),a("span",{staticClass:"line-number"},[n._v("32")]),a("br"),a("span",{staticClass:"line-number"},[n._v("33")]),a("br"),a("span",{staticClass:"line-number"},[n._v("34")]),a("br"),a("span",{staticClass:"line-number"},[n._v("35")]),a("br"),a("span",{staticClass:"line-number"},[n._v("36")]),a("br"),a("span",{staticClass:"line-number"},[n._v("37")]),a("br"),a("span",{staticClass:"line-number"},[n._v("38")]),a("br"),a("span",{staticClass:"line-number"},[n._v("39")]),a("br"),a("span",{staticClass:"line-number"},[n._v("40")]),a("br"),a("span",{staticClass:"line-number"},[n._v("41")]),a("br"),a("span",{staticClass:"line-number"},[n._v("42")]),a("br"),a("span",{staticClass:"line-number"},[n._v("43")]),a("br"),a("span",{staticClass:"line-number"},[n._v("44")]),a("br"),a("span",{staticClass:"line-number"},[n._v("45")]),a("br"),a("span",{staticClass:"line-number"},[n._v("46")]),a("br"),a("span",{staticClass:"line-number"},[n._v("47")]),a("br"),a("span",{staticClass:"line-number"},[n._v("48")]),a("br"),a("span",{staticClass:"line-number"},[n._v("49")]),a("br"),a("span",{staticClass:"line-number"},[n._v("50")]),a("br"),a("span",{staticClass:"line-number"},[n._v("51")]),a("br"),a("span",{staticClass:"line-number"},[n._v("52")]),a("br"),a("span",{staticClass:"line-number"},[n._v("53")]),a("br"),a("span",{staticClass:"line-number"},[n._v("54")]),a("br"),a("span",{staticClass:"line-number"},[n._v("55")]),a("br"),a("span",{staticClass:"line-number"},[n._v("56")]),a("br"),a("span",{staticClass:"line-number"},[n._v("57")]),a("br"),a("span",{staticClass:"line-number"},[n._v("58")]),a("br"),a("span",{staticClass:"line-number"},[n._v("59")]),a("br"),a("span",{staticClass:"line-number"},[n._v("60")]),a("br"),a("span",{staticClass:"line-number"},[n._v("61")]),a("br"),a("span",{staticClass:"line-number"},[n._v("62")]),a("br"),a("span",{staticClass:"line-number"},[n._v("63")]),a("br"),a("span",{staticClass:"line-number"},[n._v("64")]),a("br"),a("span",{staticClass:"line-number"},[n._v("65")]),a("br"),a("span",{staticClass:"line-number"},[n._v("66")]),a("br"),a("span",{staticClass:"line-number"},[n._v("67")]),a("br"),a("span",{staticClass:"line-number"},[n._v("68")]),a("br"),a("span",{staticClass:"line-number"},[n._v("69")]),a("br"),a("span",{staticClass:"line-number"},[n._v("70")]),a("br"),a("span",{staticClass:"line-number"},[n._v("71")]),a("br"),a("span",{staticClass:"line-number"},[n._v("72")]),a("br"),a("span",{staticClass:"line-number"},[n._v("73")]),a("br"),a("span",{staticClass:"line-number"},[n._v("74")]),a("br"),a("span",{staticClass:"line-number"},[n._v("75")]),a("br"),a("span",{staticClass:"line-number"},[n._v("76")]),a("br")])]),a("h2",{attrs:{id:"第二种方式-组件内"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第二种方式-组件内","aria-hidden":"true"}},[n._v("#")]),n._v(" 第二种方式: 组件内")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("import React,{PropTypes} from 'react';\nclass MyComponent extends React.Component {\n  static propTypes = {\n    optionalArray: PropTypes.array.isRequired,\n    optionalBool: PropTypes.bool.isRequired,\n    optionalFunc: PropTypes.func.isRequired,\n    optionalNumber: PropTypes.number.isRequired,\n    optionalObject: PropTypes.object.isRequired,\n    optionalString: PropTypes.string.isRequired,\n    optionalSymbol: PropTypes.symbol.isRequired,\n  };\n  render(){\n        return (\n            <div>MyComponent</div>\n        )\n    }\n  }\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);