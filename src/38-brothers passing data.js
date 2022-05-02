import React, { Component } from 'react'
import { createRoot } from 'react-dom/client'

class App extends Component {
  //兄弟组件通讯其实就是 父传子+子传父
  //1.状态提升到父组件
  state = {
    msg: '',
  }
  render() {
    return (
      <div>
        <h1>App Component</h1>
        <Jack say={this.changeMsg}></Jack>
        {/* 2.把状态给子组件显示 */}
        <Rose msg={this.state.msg}></Rose>
      </div>
    )
  }
  changeMsg = (words) => {
    this.setState({
      msg: words,
    })
  }
}

class Jack extends Component {
  render() {
    return (
      <div>
        <h3>I am Jack Component</h3>
        <button onClick={this.say}>Say</button>
      </div>
    )
  }
  say = () => {
    this.props.say('You jump, I look!')
  }
}

class Rose extends Component {
  render() {
    return (
      <div>
        <h3>I am Rose Component --{this.props.msg}</h3>
      </div>
    )
  }
}

createRoot(document.getElementById('root')).render(<App />)
