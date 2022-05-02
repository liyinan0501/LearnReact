import { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  state = {
    count: 0,
    list: ['jack', 'join', 'tom'],
  }

  render() {
    return (
      <div>
        <h1>from root component</h1>
        <div>{this.state.count}</div>
        <ul>
          {this.state.list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <button onClick={this.clickFn}>+1</button>
        <button onClick={this.add}>add data</button>
      </div>
    )
  }
  /*
    React 并不会监听数据的变化，所以直接修改数据，react不知道，dom就不会自动更新
    React 提供了一个方法 setState 
    这个方法有两个作用: 1.修改state的值。2.更新DOM

    结论：
     1.react中不能直接修改state中的数据
     2.react中必须使用setState去修改数据
  */
  clickFn = () => {
    // console.log(this.state.count)
    // this.state.count++
    // console.log(this.state.count)
    this.setState({
      count: this.state.count + 1,
    })
  }
  add = () => {
    this.setState({
      list: [...this.state.list, 'newPerson'],
    })
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
