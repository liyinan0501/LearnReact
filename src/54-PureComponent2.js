import React, { PureComponent, Component } from 'react'
import { createRoot } from 'react-dom/client'

// 54-PureComponent
// shallow compare
// compared difference between old msg value and new msg value
class App extends PureComponent {
  state = {
    msg: 'hello',
    user: {
      name: 'zs',
      age: '18',
    },
  }
  render() {
    console.log('render...')
    return (
      <div>
        <h1>App Component -- {this.state.msg}</h1>
        <div>
          {this.state.user.name} - {this.state.user.age}
        </div>
        <button onClick={this.handleClick}>click</button>
      </div>
    )
  }
  handleClick = () => {
    // this.setState({
    //   // msg: 'hello',
    //   msg: 'world',
    // })
    this.setState({
      user: {
        ...this.state.user,
        age: 20,
      },
    })
  }
}

createRoot(document.getElementById('root')).render(<App />)
