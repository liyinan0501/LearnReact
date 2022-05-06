import React, { Component } from 'react'
import { createRoot } from 'react-dom/client'

class App extends Component {
  state = {
    count: 0,
  }
  render() {
    return (
      <div>
        <h1>App Component</h1>
        <div>Click: {this.state.count}</div>
        <button onClick={this.handleClick}>Button</button>
      </div>
    )
  }
  handleClick = () => {
    //参数里的state可以保证是最新的state，上一次的state
    this.setState((state) => {
      return {
        count: state.count + 1,
      }
      //return 返回的是一个对象
    })
    // this.setState((state) => {
    //   return {
    //     count: state.count + 1,
    //   }
    // })
    //以上简写如下：
    this.setState((state) => ({ count: state.count + 1 }))
    // 以上的state依赖于上一次的state
  }
}

createRoot(document.getElementById('root')).render(<App />)
