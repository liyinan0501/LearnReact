import React, { Component } from 'react'
import { createRoot } from 'react-dom/client'

class App extends Component {
  state = {
    money: 0,
  }
  render() {
    return (
      <div>
        <div>App{this.state.money}</div>
        <Son price={this.showPrice}></Son>
      </div>
    )
  }
  showPrice = (sonPrice) => {
    this.setState({
      money: sonPrice,
    })
  }
}

class Son extends Component {
  render() {
    return <button onClick={this.sendPrice}>click</button>
  }
  sendPrice = () => {
    this.props.price(200)
  }
}

createRoot(document.getElementById('root')).render(<App />)
