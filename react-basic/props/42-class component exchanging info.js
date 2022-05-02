import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Hello1 from './Hello1'

// 类子组件使用中，需要把props传递给super()，否自构造函数无法获取props
class App extends Component {
  render() {
    return (
      <div>
        <h1>App Component</h1>
        <hr />
        <Hello1 money={100}></Hello1>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
