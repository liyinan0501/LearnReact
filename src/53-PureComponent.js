import React, { PureComponent, Component } from 'react'
import { createRoot } from 'react-dom/client'

// 53-PureComponent
class App extends PureComponent {
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
      </div>
    )
  }
  random = () => {
    this.setState({
      // current: parseInt(Math.random() * this.state.list.length),
      current: (Math.random() * this.state.list.length) | 0,
    })
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.state.current === nextState.current) {
  //     //no changes
  //     return false
  //   }
  //   return true
  // }
}

createRoot(document.getElementById('root')).render(<App />)
