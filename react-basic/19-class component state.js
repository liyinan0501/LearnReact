import { Component } from 'react'
import ReactDOM from 'react-dom'
/* component classification
   1. 有状态state组件 class can provide the state(data)
      if state(data) change, auto update
   2. 无状态state组件 function can not provide the state(data) 
      (before hooks)
   state = data
*/

// 给类组件提供数据（state）
class App extends Component {
  constructor() {
    super()
    //给this增加一个属性 state
    this.state = {
      msg: 'Hello',
      count: 0,
    }
  }
  render() {
    return (
      <div>
        <h1>from root component</h1>
        <div>{this.state.msg}</div>
        <div>{this.state.count}</div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
