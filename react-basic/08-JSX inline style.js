import ReactDOM from 'react-dom'

const color = 'red'
const bgcolor = 'pink'
// style tag, if width, height, using number without px
const element = (
  <div>
    <h1 style={{ backgroundColor: bgcolor, width: 400, height: 400 }}>
      Inline Style
    </h1>
    <p style={{ color: color }}>Gold is always shaining</p>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
