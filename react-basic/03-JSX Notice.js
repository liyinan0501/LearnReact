import React from 'react'
import ReactDOM from 'react-dom'
// 必须要根节点
// 幽灵节点 不会渲染任何内容
// <></> or <React.Fragment></React.Fragment>
const element = // 包裹()
  (
    <React.Fragment>
      <div>123</div>
      <span>456</span>
      <a href="http://www.google.com">Google</a>

      {/* 需要结束标签 */}
      <br />
      <img src="#" alt="" />

      {/* class = className */}
      <div className="class1">haha</div>

      {/* for = htmlFor */}
      <label htmlFor="box">Checkbox</label>
      <input type="checkbox" id="box"></input>
    </React.Fragment>
  )

function render() {
  return (
    //无包裹（）的话return后面有；
    <div>123</div>
  )
}

ReactDOM.render(element, document.getElementById('root'))
