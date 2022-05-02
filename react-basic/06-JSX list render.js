import ReactDOM from 'react-dom'

const list = ['jack', 'minion', 'chen']

// const list = [<li>jack</li>, <li>minion</li>, <li>chen</li>]
// const arr = list.map((item) => <li>{item}</li>)

const element = (
  <div>
    <h1>List render</h1>
    <ul>
      {list.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
