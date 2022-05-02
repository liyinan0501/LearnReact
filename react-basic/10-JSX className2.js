import ReactDOM from 'react-dom'
import './index.css'

const isRed = true
const isPink = true

// option2
// const classArr = ['box']
// if (isRed) classArr.push('red')
// if (isPink) classArr.push('pink')

//option3
function classNames(obj) {
  //for(const k in obj)
  return Object.keys(obj)
    .filter((key) => obj[key])
    .join(' ')
}

const element = (
  <div>
    {/* option1 */}
    {/* <h1 className={`box ${isRed ? 'red' : ''} ${isPink ? 'pink' : ''}`}> */}

    {/* option2 */}
    {/* <h1 className={classArr.join(' ')}> */}

    {/* option3 */}
    <h1 className={classNames({ box: true, red: isRed, pink: isPink })}>
      I am header
    </h1>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
