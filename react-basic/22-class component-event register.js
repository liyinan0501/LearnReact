import { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  state = {
    msg: 'Hello',
    count: 0,
  }

  render() {
    return (
      <div>
        <h1>from root component</h1>
        <div>{this.state.msg}</div>
        <div>{this.state.count}</div>
        <button onClick={this.clickFn} onMouseEnter={this.monseFn}>
          +1
        </button>
        <a href="http://www.google.com" onClick={this.clickFn}>
          Google
        </a>
      </div>
    )
  }
  clickFn(e) {
    //e接收事件对象
    e.preventDefault() //阻止跳转
    e.stopPropagation() //阻止冒号
    console.log('click event')
  }
  monseFn() {
    console.log('mouseenter event')
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
