import ReactDOM from 'react-dom'
import './index.css'

// style tag, if width, height, using number without px.
const isRed = true
const element = (
  <div>
    <h1 className={`${isRed ? 'red' : ''} box`}>Inline Style</h1>
    {/* <h1 className={isRed ? 'red box' : 'box'}>Inline Style </h1> */}
    <p className="red">Gold is always shaining</p>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
