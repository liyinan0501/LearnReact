import React from 'react'
import { Component } from 'react'
import { createRoot } from 'react-dom/client'
//uncontrolled component 非受控组件
/*  ref的使用步骤
    1. 通过React.createRef()创建一个ref
    2. 通过ref={this.textRef}关联给某个DOM对象和组件
    3. 通过this.txtRef.current属性就可以获取到对应的DOM
*/
class Form extends Component {
  render() {
    return <div>form compponent</div>
  }
  validate() {
    console.log('I can validate')
  }
}
class App extends Component {
  txtRef = React.createRef()
  formRef = React.createRef()
  render() {
    return (
      <div>
        <h1>非受控组件</h1>
        <h3>text</h3>
        <input type="text" ref={this.txtRef} />
        <Form ref={this.formRef}></Form>
        <button onClick={this.clickFn}>Take Value</button>
      </div>
    )
  }
  clickFn = () => {
    console.log(this.txtRef.current.value)
    this.formRef.current.validate()
  }
}

createRoot(document.getElementById('root')).render(<App />)
