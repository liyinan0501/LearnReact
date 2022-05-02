import { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  state = {
    msg: 'Hello',
    count: 0,
  }

  render() {
    //在类组件中render的this不会有问题，，，this指向当前组件

    //解决react类组件中注册事件的this问题
    // 1.把函数调用包裹在箭头函数中
    //      原本写法（错误）：onClick={this.clickFn} 用onClick去调
    //      正确写法：onClick={() => this.clickFn()} 用this去调

    // 2.用bind修改this的指向
    //      onClick={this.clickFn}
    //      bind优化 onClick={this.clickFn.bind(this)}

    // 3.Class新语法：类实例语法
    //      onClick={this.clickFn}
    //      修改方法 clickFn = () => {console.log(123, this)}
    console.log('render', this)
    return (
      <div>
        <h1>from root component</h1>
        <div>{this.state.msg}</div>
        <div>{this.state.count}</div>
        {/* option1 */}
        {/* <button onClick={() => this.clickFn()}>+1</button> */}

        {/* option2 */}
        {/* <button onClick={this.clickFn.bind(this)}>+1</button> */}

        {/* option3 */}
        <button onClick={this.clickFn}>+1</button>
      </div>
    )
  }
  // clickFn() {
  //   console.log(123, this)
  // }
  clickFn = () => {
    console.log(123, this)
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
