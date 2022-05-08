import React, { Component } from 'react'
import { createRoot } from 'react-dom/client'

// 52-setState optimization
class App extends Component {
  //if only app renders by button setState, all of parent and sons will render again.
  state = {
    list: ['Tom', 'Jack', 'John'],
    current: 0,
  }
  render() {
    console.log('app render...')
    return (
      <div>
        <h1>App Component</h1>
        <button onClick={() => this.setState({})}>click</button>
        <div>Girl Friend: {this.state.list[this.state.current]}</div>
        <button onClick={this.random}>Random</button>
        {/* <Parent></Parent> */}
      </div>
    )
  }
  random = () => {
    this.setState({
      // current: parseInt(Math.random() * this.state.list.length),
      current: (Math.random() * this.state.list.length) | 0,
    })
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.current === nextState.current) {
      //no changes
      return false
    }
    return true
  }
}

class Parent extends Component {
  state = {
    money: 100,
    car: 'volvo',
  }
  render() {
    const { money, car } = this.state
    console.log('parent render...')
    return (
      <div>
        <h2>Parent Component</h2>
        <Son1 money={money}></Son1>
        <Son2 car={car}></Son2>
        <button onClick={() => this.setState({ money: 200 })}>
          add more money
        </button>
        <button onClick={() => this.setState({ car: 'Ferrari' })}>
          change the car
        </button>
      </div>
    )
  }
}
class Son1 extends Component {
  render() {
    console.log('son1 render...')
    return (
      <div>
        <h3>Son1 Component - {this.props.money}</h3>
      </div>
    )
  }
  shouldComponentUpdate(nextProps) {
    //return true or false
    // console.log(this.props) //100
    // console.log(nextProps) //200
    if (this.props.money === nextProps.money) {
      return false
      //return false the Son1 won't render
    }
    return true
    //return true the Son1 will render
  }
}
class Son2 extends Component {
  render() {
    console.log('son2 render...')
    return (
      <div>
        <h3>Son2 Component - {this.props.car}</h3>
      </div>
    )
  }
}

createRoot(document.getElementById('root')).render(<App />)
