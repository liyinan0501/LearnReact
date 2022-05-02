import React from 'react'
import { Component } from 'react'
import { createRoot } from 'react-dom/client'

//表单处理
//controlled component 受控组件 - 表单的value值受到了react的控制
//多个表单封装

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
            name="username"
            onChange={this.handleChange}
          />
        </div>

        <h3>textarea</h3>
        <div>
          Describe:
          <textarea
            value={this.state.desc}
            name="desc"
            onChange={this.handleChange}
            cols="30"
            rows="10"
          ></textarea>
        </div>

        <h3>Select list:</h3>
        <div>
          Choose city:
          <select
            value={this.state.city}
            name="city"
            onChange={this.handleChange}
          >
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
              name="agree"
              checked={this.state.agree}
              onChange={this.handleChange}
            />
            Are you read and agree our contract and terms
          </div>
        </h3>
      </div>
    )
  }
  handleChange = (e) => {
    console.log(e.target)
    const { name, type } = e.target
    console.log(name)
    this.setState({
      [name]: type === 'checkbox' ? e.target.checked : e.target.value,
    })
  }
}

createRoot(document.getElementById('root')).render(<App />)
