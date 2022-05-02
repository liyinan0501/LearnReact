import React from 'react'
import { Component } from 'react'
import { createRoot } from 'react-dom/client'

//表单处理
//controlled component 受控组件 - 表单的value值受到了react的控制

class App extends Component {
  state = {
    username: '',
    desc: '',
    city: '2',
    agree: true,
  }

  render() {
    return (
      <div>
        <h1>常见的受控组件</h1>
        <h3>text</h3>
        <div>
          Name:
          <input
            type="text"
            value={this.state.username}
            onChange={this.changUsername}
          />
        </div>

        <h3>textarea</h3>
        <div>
          Describe:
          <textarea
            value={this.state.desc}
            onChange={this.changeDesc}
            cols="30"
            rows="10"
          ></textarea>
        </div>

        <h3>Select list:</h3>
        <div>
          Choose city:
          <select value={this.state.city} onChange={this.changeCity}>
            <option value="1">Helsinki</option>
            <option value="2">Turku</option>
            <option value="3">Tampere</option>
            <option value="4">Oulu</option>
            <option value="5">Rovaniemi</option>
          </select>
        </div>

        <h3>
          <div>
            <input
              type="checkbox"
              checked={this.state.agree}
              onChange={this.changeAgree}
            />
            Are you read and agree our contract and terms
          </div>
        </h3>
      </div>
    )
  }
  changUsername = (e) => {
    this.setState({ username: e.target.value })
  }
  changeDesc = (e) => {
    this.setState({
      desc: e.target.value,
    })
  }
  changeCity = (e) => {
    this.setState({
      city: e.target.value,
    })
  }
  changeAgree = (e) => {
    this.setState({
      agree: e.target.checked,
    })
  }
}

createRoot(document.getElementById('root')).render(<App />)
