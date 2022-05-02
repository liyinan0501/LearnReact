import React from 'react'
import ReactDOM from 'react-dom'

/* class component 
    1. must inheriate from React.Component
    2. must provide render() and return
*/
class Hello extends React.Component {
  render() {
    return <div>Hello Class Component</div>
  }
}

const element = (
  <div>
    <h1>class component</h1>
    {/* using clss component */}
    <Hello></Hello>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
