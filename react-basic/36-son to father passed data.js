import React, { Component } from 'react'
import { createRoot } from 'react-dom/client'

//father
class Father extends Component {
  state = {
    wife: '',
    sonWife: '',
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
        <div>Son's wife: {this.state.sonWife}</div>
        <hr />
        <Child wife={this.state.wife} changeName={this.changeName}></Child>
      </div>
    )
  }
  handleChange = (e) => {
    this.setState({
      wife: e.target.value,
    })
  }
  changeName = (name) => {
    console.log('received', name)
    this.setState({
      sonWife: name,
    })
  }
}

class Child extends Component {
  state = {
    wife: '',
  }
  render() {
    return (
      <div>
        <h3>Child Component</h3>
        <div>Mother's name: {this.props.wife}</div>
        <div>
          <input
            type="text"
            placeholder="name of spouse"
            value={this.state.wife}
            onChange={this.handleChange}
          />
        </div>
      </div>
    )
  }
  handleChange = (e) => {
    this.setState({ wife: e.target.value })
    this.props.changeName(e.target.value)
  }
}

createRoot(document.getElementById('root')).render(<Father />)
