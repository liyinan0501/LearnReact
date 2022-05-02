import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Demo from './Demo'
import Hello from './Hello'
class App extends Component {
  render() {
    return (
      <div>
        <h1>App Component</h1>

        {/* Function component */}
        {/* 1. 同过属性的方式，给组件提供数据 */}
        {/* 2. 子组件可以通过props来获取到数据 */}
        <Demo car="volvo" money={100} check={true}></Demo>

        {/* Class component */}
        {/* 1. 同过属性的方式，给组件提供数据 */}
        {/* 2. 子组件可以通过this.props来获取到数据 */}
        <Hello car="volvo" money={100} check={true}></Hello>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
