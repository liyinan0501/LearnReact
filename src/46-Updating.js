import React, { Component } from 'react'
import { createRoot } from 'react-dom/client'
//生命周期
//只有类组件有声明周期
export default class App extends Component {
  constructor(props) {
    super(props)
    console.log('1', 'constructor')
    //constructor 最先执行
    //作用：
    //1.提供数据
    //2.提供ref
    //3.绑定this指向
    this.state = {
      msg: '123',
      count: 0,
    }
    this.inputRef = React.createRef()
    // this.handleClick = this.handleClick.bind(this)
  }
  render() {
    console.log('2', 'render')
    //render其次执行
    //每次组件渲染都会触发
    //作用：
    //render用于渲染组件的解构
    //render里不能调用setState()
    return (
      <div>
        App Component
        <button onClick={this.handleClick}>Click</button>
        <div>{this.state.count}</div>
        <Child count={this.state.count}></Child>
        <input
          type="text"
          value={this.state.msg}
          onClick={() => this.setState({})}
          onChange={() => {}}
        />
        {/* 不要这么写，切记不要忽略箭头函数！
        <input
          type="text"
          value={this.state.msg}
          onClick={this.setState({})}
        /> */}
      </div>
    )
  }
  handleClick = () => {
    //触发render和componentDidUpdate
    // 1:
    this.setState({
      count: this.state.count + 1,
    })
    // 2:
    // this.state.count++
    // this.forceUpdate()
  }
  componentDidMount() {
    //最后执行，组件挂载（完成dom渲染）后
    //1.发送网络请求
    //2.DOM操作
    console.log('3', 'componentDidMount')
  }

  componentDidUpdate() {
    console.log('4', 'componentDidUpdate')
  }
}

class Child extends Component {
  //3. props发生变化的时候 触发render和componentDidUpdate
  render() {
    console.log('Child render')
    return (
      <div>
        <h3>I am Child Component: {this.props.count}</h3>
      </div>
    )
  }
  componentDidUpdate() {
    console.log('Child componentDidUpdate')
  }
}

createRoot(document.getElementById('root')).render(<App />)
