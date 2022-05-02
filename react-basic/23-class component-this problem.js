import { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  state = {
    msg: 'Hello',
    count: 0,
  }

  render() {
    console.log('render', this)
    return (
      <div>
        <h1>from root component</h1>
        <div>{this.state.msg}</div>
        <div>{this.state.count}</div>
        <button onClick={this.clickFn}>+1</button>
      </div>
    )
  }
  clickFn() {
    console.log(this)
    console.log('click event')
    console.log(this.state.count)
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
