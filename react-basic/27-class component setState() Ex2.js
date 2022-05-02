import { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  state = {
    count: 0,
    msg: 'hello',
    user: {
      name: 'jack',
      age: '18',
    },
    list: ['tom', 'wu', 'tomas'],
  }

  render() {
    return (
      <div>
        <h1>from root component</h1>
        <div>
          {this.state.count} - {this.state.msg}
        </div>
        <div>
          {this.state.user.name} - {this.state.user.age}
        </div>
        <div>{this.state.list}</div>
        <button onClick={this.clickFn}>edit data</button>
      </div>
    )
  }
  clickFn = () => {
    this.setState({
      count: 1,
      msg: 'good morning',
      user: {
        ...this.state.user,
        name: 'Lee',
      },
      list: this.state.list.filter((item) => item != 'wu'),
    })
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
