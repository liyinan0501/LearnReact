import React, { Component } from 'react'
import { createRoot } from 'react-dom/client'

const { Provider, Consumer } = React.createContext()
//export { Consumer }

class App extends Component {
  state = {
    color: 'red',
    bgColor: 'green',
  }
  changeColor = (color) => {
    this.setState({ color })
  }
  render() {
    const { color, bgColor } = this.state
    return (
      <Provider value={{ color, bgColor, changeColor: this.changeColor }}>
        {/* <Provider value={(color:color, bgColor:bgColor)}> */}
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
        <Son color></Son>
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
          {({ color, bgColor, changeColor }) => (
            <h5 style={{ color: color, backgroundColor: bgColor }}>
              Sun Component
              <button onClick={() => changeColor('yellow')}>Change</button>
            </h5>
          )}
        </Consumer>
      </div>
    )
  }
}

createRoot(document.getElementById('root')).render(<App />)
