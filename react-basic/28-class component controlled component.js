import React from 'react'
import { Component } from 'react'
import { createRoot } from 'react-dom/client'

//表单处理
//controlled component 受控组件 - 表单的value值受到了react的控制

class App extends Component {
  state = {
    msg: 'hello',
  }

  render() {
    return (
      <div>
        <h1>受控组件</h1>
        {/* input 里面的值是同过value属性进行控制的 */}
        <input
          type="text"
          value={this.state.msg}
          onChange={this.handleChange}
        />
      </div>
    )
  }
  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({
      msg: e.target.value,
    })
  }
}

createRoot(document.getElementById('root')).render(<App />)
