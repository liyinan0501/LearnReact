import { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  state = {
    count: 0,
  }

  render() {
    return (
      <div>
        <h1>from root component</h1>
        <div>{this.state.count}</div>
        <button onClick={this.clickFn}>+1</button>
      </div>
    )
  }
  clickFn = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
