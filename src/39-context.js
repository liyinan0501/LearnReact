import React, { Component } from 'react'
import { createRoot } from 'react-dom/client'

const { Provider, Consumer } = React.createContext()
//export { Consumer }

class App extends Component {
  state = {
    color: 'red',
  }
  render() {
    return (
      <Provider value={this.state.color}>
        <div>
          <h1>App Component</h1>
          <Father></Father>
        </div>
      </Provider>
    )
  }
}

class Father extends Component {
  render() {
    return (
      <div>
        <h3>Father Component</h3>
        <Son></Son>
      </div>
    )
  }
}

class Son extends Component {
  render() {
    return (
      <div>
        <h4>Son Component</h4>
        <Sun></Sun>
      </div>
    )
  }
}

// import { Consumer } from './index'
class Sun extends Component {
  render() {
    return (
      <div>
        <Consumer>
          {(value) => <h5 style={{ color: value }}>Sun Component--{value}</h5>}
        </Consumer>
      </div>
    )
  }
}

createRoot(document.getElementById('root')).render(<App />)
