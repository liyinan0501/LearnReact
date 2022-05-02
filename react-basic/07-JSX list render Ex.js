import ReactDOM from 'react-dom'

const list = [
  { id: 1, name: 'Hangzhou21', salary: 15000 },
  { id: 2, name: 'Shanghai83', salary: 14000 },
  { id: 3, name: 'Beijing21', salary: 5000 },
]

const element = (
  <div>
    <ul>
      {list.map((item) => (
        <li key={item.id}>
          <h3>Class: {item.name}</h3>
          <p>Salary: {item.salary}</p>
        </li>
      ))}
    </ul>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
