import React, { Component } from 'react'
import { createRoot } from 'react-dom/client'

//father
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
        <Hello car="bmw" money={101} check={true}></Hello>
      </div>
    )
  }
}
//son
function Demo(props) {
  //解构
  //function Demo({car, money, check}) {
  console.log(props)
  return (
    <div>
      <h3>Function Component</h3>
      <div>{props.car}</div>
      <div>{props.money}</div>
      <div>{props.check ? 'yes' : 'no'}</div>
    </div>
  )
}

class Hello extends Component {
  render() {
    console.log(this.props)
    //解构
    const { car, money, check } = this.props
    return (
      <div>
        <h3>Class Component</h3>
        <div>{car}</div>
        <div>{money}</div>
        <div>{check ? 'yes' : 'no'}</div>
      </div>
    )
  }
}

createRoot(document.getElementById('root')).render(<App />)
