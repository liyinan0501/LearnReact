import React, { Component } from 'react'
import { createRoot } from 'react-dom/client'

//father
class Father extends Component {
  state = {
    money: 1000,
  }
  render() {
    return (
      <div>
        <h1>App Component</h1>
        <div>{this.state.money}</div>
        <Child money={this.state.money} buy={this.buyFather}></Child>
      </div>
    )
  }
  buyFather = (moneySon) => {
    this.setState({
      money: +(this.state.money - moneySon).toFixed(2),
    })
  }
}

class Child extends Component {
  //react中，一个组件只有两种数据来源 state 或 props
  render() {
    return (
      <div>
        <h3>Child Component</h3>
        <div>Money: {this.props.money}</div>
        <button onClick={this.buySon}>Buy Something</button>
      </div>
    )
  }
  buySon = () => {
    this.props.buy(128.8)
  }
}

createRoot(document.getElementById('root')).render(<Father />)
