import React, { Component } from 'react'


// class App extends Component{
//   componentDidMount(){
//     console.log('组件渲染完毕')
//   }
  
  
//   render(){
//     console.log('组件正在渲染')
//     return <h2>倔强青铜</h2>
//   }
// }
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
    console.log('shouldComponentUpdate，判断 App 组件是否应该渲染， 默认返回 true')
    return true
  }
  componentWillUpdate(){
    console.log('componentWillUpdate，组件 App 准备更新了')
  }
  componentDidUpdate(){
    console.log('componentDidUpdate, 组件 App 更新完毕了')
  }
  handleClick1(){
    this.handleClick()
  }
  handleClick2 = ()=>{
    this.handleClick()
  }
  handleClick3(){
    this.handleClick()
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
        <button onClick={()=>this.handleClick1()}>点我1</button>
        <button onClick={this.handleClick2}>点我2</button>
        <button onClick={this.handleClick3.bind(this)}>点我3</button>
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
function Tank(props){

  return (
    <div>
      <h3>{props.name}是一个坦克</h3>
    </div>
  )
}
class Tank1 extends Component {
  render() {
    return (
        <div>
          <h3>{this.props.name}是一个坦克</h3>
        </div>
    )
  }
}

export default App