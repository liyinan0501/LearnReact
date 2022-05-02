import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Demo1 from './Demo1'

class App extends Component {
  state = {
    money: 100,
  }
  render() {
    return (
      <div>
        <h1>App Component</h1>
        <div>Father Component Money: {this.state.money}</div>
        <button onClick={this.buy}>Buy</button>
        <Demo1
          name="jack" // 字符串不用花括号直接可以接受
          money={this.state.money}
          flag={true}
          fn={() => {
            console.log('fn function')
          }}
          list={[1, 2, 3]}
          user={{ name: 'zs', age: 18 }} //obj
          content={<div>I am content</div>} //jsx
        ></Demo1>
      </div>
    )
  }
  buy = () => {
    this.setState({ money: this.state.money - 10 })
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
