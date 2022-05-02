//expression can print out via console.log
//statement can not print out via console.log like if, switch, for
import ReactDOM from 'react-dom'
const username = 'Jack'
const address = 'Beijing'
const car = {
  brand: 'audi',
}
const friend = ['Minion', 'Miki']
const age = 19
const fn = () => {
  return (
    <div>
      <p>sentence1</p>
      <p>sentence2</p>
    </div>
  )
}
const element = (
  <div>
    {/* JSX support any expression via {} */}
    <h1>jsx expression</h1>
    <div>Name: {username + 'eating'}</div>
    <div>Address: {address}</div>
    <div>Car: {car.brand}</div>
    <div>Friend: {friend[0]}</div>
    <div title={car.brand}>Age: {age > 18 ? 'adult' : 'under age'}</div>
    <div>{fn()}</div>
    {/* <div>{const num = 1}</div> */}
    {/* <div>{if()</div> */}
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
