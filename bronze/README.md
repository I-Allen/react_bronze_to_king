


![](https://pic4.zhimg.com/v2-bfd620be2c5bb85fe9c51d62a8033c5b_r.png)

# React 从青铜到王者系列教程之倔强青铜篇

前端大陆乃是技术界近年来新兴起的板块，随着人们对网站交互和性能越来越高， 前往前端大陆修炼 Javascript 的召唤师如过江之鲫，数不胜数，前端奇人异士之多，故修炼之法林林总总，俱不相同， Web 前端的未来尚无定论，内部却已起了门户之见， 幸而前端圈核心门派正道大昌，人气鼎盛，其中尤以 React、Vue、Angular 为三大支柱，是为领袖，今天的故事，便是从 React 峡谷开始的

React 峡谷的每个前端召唤师，根据对 React 技术栈 和前端的理解，分别是青铜，白银，黄金，铂金，钻石，星耀和王者段位，也对应这这个系列教程的七个模块

1. 倔强青铜 
    * 初入峡谷的初始段位，默认召唤师已经有了`ES6`，`nodejs` 的基础
    * 使用 `create-react-app` 建立 `React` 开发环境
    * 学习 `React` 世界里的基本玩法，例如组件化，`JSX`，事件监听，内部 `state`，组件的`props`、生命周期函数等
    * 这篇文章主要介绍 `React` 青铜升白银需要的基础知识，看完你就白银啦
2. 秩序白银
    * 到了白银段位，基本都是有了基本的操作，不会出现呆萌的站在地方塔下被打死的情况了
    * 我们需要买一个皮肤来提升页面美观并且多加练习
    * 学习使用蚂蚁金服 `ant-design` 的使用
3. 荣耀黄金
    * 到了这个阶段，召唤师对 `React` 有了基本的认识，想进一步的提升段位，我们需要提高自己的大局观
    * 学习使用 `React-Router4` 来让我们有多面作战能力
    * 学会使用 `BrowserRouter`，`Router`，`Link` 等组件
    * 学会使用 `Redux` 和队友配合，修炼大局观
    * 了解单项数据流开发模式和 `Redux` 的各种概念,如 `dispatch`,`action`,`reducers`
    * 使用 `react-redux` 更好的和 `Redux` 配合有大局观意识，上铂金也是很 easy 了

4. 尊贵铂金
    * 很多召唤师卡在铂金上不去，因为铂金想上钻石，需要了解更多的细节和原理
    * `React` 原理剖析
    * 对自己技能的原理有深刻的了解，上钻石必备

5. 永恒钻石
    * 钻石段位开始了征兆模式，召唤师的技能池要足够深才能更进一步，对自己擅长技能的理解也要更深刻
    * `Redux` 中间件机制，实现自己的中间件
    * 常见的React 性能优化方式
    * 服务端渲染
    * `Redux` 之外其他的数据解决方案如 `mobx`，`dva`

6. 至尊星耀
    * 这个段位已经是独当一面的强者了，目标仅限于 React 这个库很难更近一层，需要了解更底层的原理
    * `Redux` 原理剖析+实现自己的 `Redux`
    * `React-Router`+实现自己的 `React-Router`
    * `Webppack` 工作机制和原理剖析
    * `Babel` 工作机制和原理剖析
7. 最强王者
    * 达到最强王者已经是顶尖召唤师，在整个 React 峡谷都是鼎鼎大名的存在，听说上面还有传说中的荣耀王者的段位，我这辈子是达不到了，也没法教你们了，囧
    * 这个阶段，我只推荐《程序员健康指南》一本书，保持身心健康，成为荣耀王者是早晚的事


下面开始我们的正文，倔强青铜篇目录

1. 环境搭建
2. 第一个组件
3. 组件嵌套和属性传递
4. 状态处理
5. 生命周期


### 环境搭建
默认大家已经有 node 环境了，先安装脚手架

```
npm install create-react-app -g
```

然后建立项目，并启动
```
create-react-app bronze
cd bronze
npm start
```

看到下面的图，意味着第一个 `React` 应用已经启动起来了
![](https://pic1.zhimg.com/v2-047445cc7672f8cfbea08e81898d016c_b.jpg)

我们打开 src 目录
```
src
├── App.css
├── App.js
├── App.test.js
├── index.css
├── index.js
├── logo.svg
└── registerServiceWorker.js
```

`index.js`是入口文件,核心内容就是分别引入 `React` 和 `ReactDom`，然后渲染了一个组件 `App` 在`#root` 这个元素上

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />,document.getElementById('root'));

```
然后重点看下 `App.js` 是我们组件的具体内容


```javascript

import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

```


这个基本上是最简单的 `React` 组件了，自己实现组件也是分这么几个步骤
1. `import React`
2. 新建一个类，继承 `React.Component`，`React` 里每个组件都可以写成一个类
3. 类的 `render` 函数返回值，就是显示在页面的内容
4. `render` 里返回的是东西有点诡异，表面上是`html` 其实 `Babel` 会把 `JSX` 转成 `React.createElememt`来执行
5. 由于 `JSX` 本质就是 js，`class` 是 js 的关键字，所以要用 `className` 代替
6. 如果想在 `JSX` 里渲染变量，使用`{}`包裹即可

现在[Babel官网]](http://babeljs.io/repl/),看下 `JSX`编译后的代码，再划下重点，所谓的 `JSX`，其实就是js 对象，再用 `ReactDom.render` 方法，渲染成dom

![](https://pic3.zhimg.com/v2-bc94a13f2d593658cc4c3c3fa7717e51_b.jpg)
```javascript
// jsx
<div className="App">
  <p>hello react</p>
</div>

// 转换后
React.createElement(
  "div",
  { className: "App" },
  React.createElement(
    "p",
    null,
    "hello react"
  )
)

```

### 第一个组件

我们实现自己的第一个组件,修改 `App.js` 为

```javascript
import React, { Component } from 'react'

class App extends Component {
  render() {
    const level='最强王者'
    return (
      <div>
        <h2>我们的目标是{level}</h2>
      </div>
    )
  }
}

export default App

```

由于`JSX` 本质上其实就是 js，所以我们可以在`{}`里面使用 js 的表达式等功能，比如三元、函数、变量等等，还可以把数组映射为列表，我们把代码修改为

```javascript
import React, { Component } from 'react'

class App extends Component {
  render() {
    const level='最强王者'
    const isKing = true

    const title = isKing
                    ? <p>早睡早起，理性游戏</p>
                    : <h2>我们的目标是{level}</h2>

     const wordList = ['俺老孙来也','有妖气','取经之路，就在脚下']
    return (
      <div>
        {title}
        {isKing ? <p>我就是王者</p>: null}
        <ul>
          {wordList.map(v=><li key={v}>{v}</li>)}
        </ul>
      </div>
    )
  }
}

export default App
```

这里要稍微注意一点，就是 `render` 里，如果 `return` 多个元素，必须有一个父元素包裹，否则会有个报错

我们在return 之外把 `JSX` 复制给变量，`JSX` 里也可以在`{}`内部使用三元表达式，大家可以修改 `isKing` 是 `false` 试一试

然后就是渲染列表，我们使用 `map` 函数直接映射为 `JSX` 的数组，记得列表里每个元素都有一个 `key` 属性，关于它的作用，我们讲虚拟dom 的时候会介绍

### 组件嵌套和属性传递

如果我们继续设计我们的应用，现在再设计一个`Tank` 组件，可以直接放在 `App` 里使用,并且可以传递一个属性，在组件内部，使用 `this.props.key` 获取

```javascript

import React, { Component } from 'react'

class App extends Component {
  render() {
    const level='最强王者'
    const isKing = true

    const title = isKing
                    ? <p>早睡早起，理性游戏</p>
                    : <h2>我们的目标是{level}</h2>
    return (
      <div>
        {title}
        {isKing ? <p>我就是王者</p>: null}
        <Tank name='程咬金'></Tank> 
      </div>
    )
  }
}
class Tank extends Component {
  render() {
    return (
        <div>
          <h3>{this.props.name}是一个坦克</h3>
        </div>
    )
  }
}

export default App

```

如果我们的组件只有一个 `render` 方法，还可以写成一个函数，props 是函数的参数，我们称呼这种组件为无状态组件,这种组件的特点，就是返回只和 props 有关，复用性高

```javascript
function Tank(props){
  return (
    <div>
      <h3>{props.name}是一个坦克</h3>
    </div>
  )
}
```

这样我们就可以把应用分成多个组件，然后用拼积木的形式拼接应用，但是现在的组件都没法变化，下一步，我们学习 React 的状态管理，也就是 state

### React 状态管理和事件监听

我们通过在构造函数constructor里初始 state，其实就是一个普通的 js 对象，然后可以调用 this.setState函数修改 state，每次 setState，都会重新渲染组件
组件里可以使用 onClick来绑定一个函数，可以监听用户的事件，话不多说看代码

```javascript
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      isKing:true
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    this.setState({
      isKing: !this.state.isKing
    })
  }
  render() {
    const level='最强王者'

    const title = this.state.isKing
                    ? <p>早睡早起，理性游戏</p>
                    : <h2>我们的目标是{level}</h2>
    return (
      <div>
        <button onClick={this.handleClick}>点我</button>
        {title}
        {this.state.isKing ? <p>我就是王者</p>: null}
        <Tank name='程咬金'></Tank> 
      </div>
    )
  }
}

```
我们需要关注的点，一个是`constructor`，我们称之为构造函数，组件初始化状态放在这里，设置了 `isKing` 是 `true`,然后`button` 元素上的 `onClick` 的时候，执行`handleClick`，在`handleClick`内部，调用 `this.setState` 来修改 `isKing`

`constructor`函数里的 `bind` 是强行把`handleClick`的 `this` 绑定在组件上，否则 `onClick` 的时候会获取 `this` 引用出错，解决这个问题还有其他的形式，可以不用写 `bind` 这一行
```javascript
import React, { Component } from 'react'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      isKing:true
    }
    this.handleClick = this.handleClick.bind(this)
  }
  // 在constructor里手动 bind
  handleClick(){
    
    this.setState({
      isKing: !this.state.isKing
    })
  }
  // 绑定的时候传递箭头函数
  handleClick1(){
    this.handleClick()
  }
  // 定义的时候是剪头函数
  handleClick2 = ()=>{
    this.handleClick()
  }
  // onClick 的时候直接绑定
  handleClick3(){
    this.handleClick()
  }
  render() {
    const level='最强王者'

    const title = this.state.isKing
                    ? <p>早睡早起，理性游戏</p>
                    : <h2>我们的目标是{level}</h2>
    return (
      <div>
        <button onClick={this.handleClick}>点我</button>
        <button onClick={()=>this.handleClick1()}>点我1</button>
        <button onClick={this.handleClick2}>点我2</button>
        <button onClick={this.handleClick3.bind(this)}>点我3</button>
        {title}
        {this.state.isKing ? <p>我就是王者</p>: null}
        <Tank name='程咬金'></Tank> 
      </div>
    )
  }
}


```

### 生命周期

最后要介绍的，就是 `React` 组件的生命周期，每个组件在不同的时期，会有不同的钩子函数执行，比如组件加载完毕后，会执行 `componentDidMount` 钩子函数

```javascript

class App extends Component{
  componentDidMount(){
    console.log('组件渲染完毕')
  }
  render(){
    console.log('组件正在渲染')
    return <h2>倔强青铜</h2>
  }
}

// 组件正在渲染
// 组件渲染完毕

```

`React` 在不同的阶段，会执行不同的函数，我从网上找了个图,很清晰的说明各个生命周期函数执行的时机，

![](https://pic2.zhimg.com/v2-1db67230f5235f87522415c4d1ae867c_b.jpg)

```javascript
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      isKing:true
    }
    this.handleClick = this.handleClick.bind(this)
    console.log('constructor App 的构造函数，初始化先执行')
  }
  handleClick(){
    this.setState({
      isKing: !this.state.isKing
    })
  }
  componentWillMount(){
    console.log('componentWillMount，组件 App 准备渲染')
  }
  componentDidMount(){
    console.log('componentDidMount，组件 App 渲染完毕')
  }
  shouldComponentUpdate(){
    console.log('shouldComponentUpdate，判断 App 组件是否应该渲染， 默认返回 true')
    return true
  }
  componentWillUpdate(){
    console.log('componentWillUpdate，组件 App 准备更新了')
  }
  componentDidUpdate(){
    console.log('componentDidUpdate, 组件 App 更新完毕了')
  }
  render() {
    const level='最强王者'

    const title = this.state.isKing
                    ? <p>早睡早起，理性游戏</p>
                    : <h2>我们的目标是{level}</h2>
    const wordList = ['俺老孙来也','有妖气','取经之路，就在脚下']
    console.log('组件 App 正在渲染')
    return (
      <div>
        <button onClick={this.handleClick}>点我</button>
        {title}
        {this.state.isKing ? <p>我就是王者</p>: null}

        <ul>
          {wordList.map(v=><li key={v}>{v}</li>)}
        </ul>
        <Tank name='程咬金'></Tank> 
      </div>
    )
  }
}

// 首次加载打印
constructor App 的构造函数，初始化先执行
componentWillMount，组件 App 准备渲染
组件 App 正在渲染
componentDidMount，组件 App 渲染完毕

// 点击按钮修改状态时打印
shouldComponentUpdate，判断 App 组件是否应该渲染， 默认返回 true
componentWillUpdate，组件 App 准备更新了
组件 App 正在渲染
componentDidUpdate, 组件 App 更新完毕了

```

除了上面介绍的，还有需要注意的
1. `React16`新增的`componentDidCatch`生命周期，用来处理报错
2. `shouldComponentUpdate`返回 `false`，那么组件就不会渲染
3. 如果是子组件，还有个`componentWillReceiveProps`
4. 组件卸载有`componentWillUnmount`，用来做资源的清理
5. 合理利用生命周期，在不同的阶段做不同的事情
如果你能看到这里，那真的对 `React` 是真爱，恭喜你，你已经是秩序白银啦,今天的代码都在[github](https://github.com/shengxinjing/react_bronze_to_king/tree/master/bronze)

下期预告：秩序白银篇-- 使用 `ant-design` UI 库，有问题私聊，或者加微信，我们还可以开黑，一起上王者