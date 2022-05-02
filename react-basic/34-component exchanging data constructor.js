import React, { Component } from 'react'
import { createRoot } from 'react-dom/client'

//father
class App extends Component {
  render() {
    return (
      <div>
        <h1>App Component</h1>
        <Hello car="bmw" money={101} check={true}></Hello>
      </div>
    )
  }
}

class Hello extends Component {
  constructor(props) {
    super(props)
    this.state = {
      money: this.props.money + 100,
    }
  }
  render() {
    const { money } = this.props
    return (
      <div>
        <h3>Class Component</h3>
        <p>{this.props.money}</p>
        <p>{this.state.money}</p>
      </div>
    )
  }
}

createRoot(document.getElementById('root')).render(<App />)
