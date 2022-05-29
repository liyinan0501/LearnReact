import React, { Component } from 'react'
import { createRoot } from 'react-dom/client'

class App extends Component {
  state = {
    money: 1000,
  }
  render() {
    return (
      <div>
        <div>App - {this.state.money}</div>
        <Son buy={this.buySome}></Son>
      </div>
    )
  }
  buySome = (price) => {
    this.setState({
      money: this.state.money - price,
    })
  }
}

class Son extends Component {
  render() {
    return <button onClick={this.sendPrice}>click</button>
  }
  sendPrice = () => {
    this.props.buy(200)
  }
}

createRoot(document.getElementById('root')).render(<App />)
