import ReactDOM from 'react-dom'

const loadingStatus = true

function render() {
  //Option1
  // if (loadingStatus) {
  //   return <div>Now data is loading</div>
  // } else {
  //   return <div>Data is loaded</div>
  // }
  //Option2
  // return loadingStatus ? (
  //   <div>Now data is loading</div>
  // ) : (
  //   <div>Data is loaded</div>
  // )
}
const element = (
  <div>
    {/* {loadingStatus ? <div>Now data is loading</div> : <div>Data is loaded</div>} */}
    {loadingStatus && <div>Now data is loading</div>}
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
