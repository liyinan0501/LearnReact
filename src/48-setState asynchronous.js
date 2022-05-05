import React, { Component } from 'react'
import { createRoot } from 'react-dom/client'

class App extends Component {
  state = {
    count: 0,
    money: 100,
  }
  render() {
    return (
      <div>
        <h1>App Component</h1>
        <div>
          Click: {this.state.count} - {this.state.money}
        </div>
        <button onClick={this.handleClick}>Button</button>
      </div>
    )
  }
  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
    })
    this.setState({
      count: this.state.count + 1,
    })
    this.setState({
      money: 200,
    })
    this.setState({
      count: this.state.count + 1,
    })
    this.setState({
      count: this.state.count + 2,
    })

    //以上setState 合并成以下，统一更新
    // this.setState({
    //   count: this.state.count + 2,
    //   money: 200,
    // })
    //无论调用多少次setState，只会触发一次重新渲染
    //并不需要担心多次调用setState 会带来性能问题
    //不要让后面的setState依赖前面的setState 因为只会执行一次渲染

    // 先执行log 然后setState
    console.log(this.state.count) //count: 0
  }
}

createRoot(document.getElementById('root')).render(<App />)
