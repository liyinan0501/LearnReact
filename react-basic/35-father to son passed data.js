import React, { Component } from 'react'
import { createRoot } from 'react-dom/client'

//father
class Father extends Component {
  state = {
    wife: '',
  }
  render() {
    return (
      <div>
        <h1>App Component</h1>
        <div>
          Spouse:{' '}
          <input
            type="text"
            placeholder="name of spouse"
            value={this.state.wife}
            onChange={this.handleChange}
          />
        </div>
        <hr />
        <Child wife={this.state.wife}></Child>
      </div>
    )
  }
  handleChange = (e) => {
    this.setState({
      wife: e.target.value,
    })
  }
}

function Child({ wife: mother }) {
  return (
    <div>
      <h3>Child Component</h3>
      <div>Mother's name: {mother}</div>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<Father />)
