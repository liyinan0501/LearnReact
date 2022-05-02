import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
/*
  1. 展示评论列表功能
    1.1 通过state提供评论列表的数据
    1.2 通过map可以动态渲染
  2. 清空评论功能
  3. 没有更多评论的处理
  4. 删除评论功能
  5. 发布新的评论功能
*/
class App extends React.Component {
  state = {
    list: [
      { id: 1, name: 'jack', content: 'like you' },
      { id: 2, name: 'tom', content: 'jerry!' },
      { id: 3, name: 'mummi', content: 'from finland' },
    ],
    name: '',
    content: '',
  }
  render() {
    return (
      <div className="app">
        <div>
          <input
            className="user"
            type="text"
            placeholder="user name"
            value={this.state.name} //5.第一步
            onChange={this.handleChange} //5.第二步
            name="name"
          />
          <br />
          <textarea
            className="content"
            cols="30"
            rows="10"
            placeholder="comment"
            value={this.state.content}
            onChange={this.handleChange}
            name="content"
          />
          <br />
          <button onClick={this.add}>comment</button>
          <button onClick={this.clear}>clear</button>
        </div>
        {this.renderList()}
        {/* 没问题 直接call 没经过像onClick的叫 */}
      </div>
    )
  }
  clear = () => {
    this.setState({
      list: [],
    })
  }
  renderList() {
    if (this.state.list.length === 0) {
      return <div className="no-comment">no more comment</div>
    }
    return (
      <ul>
        {this.state.list.map((item) => (
          <li key={item.id}>
            <h3>user: {item.name}</h3>
            <p>content: {item.content}</p>
            <button onClick={this.del.bind(this, item.id)}>delete</button>
            {/* <button onClick={() => this.del(item.id)}>delete</button> */}
            {/* bind也可以 */}
          </li>
        ))}
      </ul>
    )
  }
  del = (id) => {
    // console.log(id)
    this.setState({
      list: this.state.list.filter((item) => item.id !== id),
    })
  }
  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value,
    })
  }
  add = () => {
    const { name, content, list } = this.state
    if (!name || !content) {
      return alert('Please input user name and comment')
    }
    this.setState({
      list: [{ id: Date.now(), name, content }, ...list],
      name: '',
      content: '',
    })
  }
}
// 渲染组件
createRoot(document.getElementById('root')).render(<App />)
