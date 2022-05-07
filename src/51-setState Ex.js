import React, { Component } from 'react'
import { createRoot } from 'react-dom/client'

class App extends Component {
  state = {
    isShowInput: false,
  }
  inputRef = React.createRef()
  render() {
    return (
      <div>
        <h1>App Component</h1>
        {this.state.isShowInput ? (
          <input
            type="text"
            placeholder="Type your comments"
            ref={this.inputRef}
          />
        ) : (
          <button onClick={this.handleClick}>Post</button>
        )}
      </div>
    )
  }
  handleClick = () => {
    this.setState(
      {
        isShowInput: true,
      },
      () => {
        this.inputRef.current.focus()
      }
    )
  }
}

createRoot(document.getElementById('root')).render(<App />)
