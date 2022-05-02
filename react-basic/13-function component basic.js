import React from 'react'
import ReactDOM from 'react-dom'

/* create function component
    1.name should start with an uppercase letter
    2.need a return
    3.if component wont render anything, can return null
*/
function Hello() {
  return <div>Hello component</div>
}

/* arrow funmction */
const Hello = () => <div>function component from arrow function</div>

const element = (
  <div>
    <h1>function component</h1>
    {/* using function component */}
    <Hello></Hello>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
