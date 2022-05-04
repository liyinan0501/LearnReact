import React, { Component } from 'react'
import { createRoot } from 'react-dom/client'

class App extends Component {
  render() {
    return (
      <div>
        <h1>children attribute</h1>
        <Header>
          <a href="#">Haha Link</a>
        </Header>
        <Header>Home Page</Header>
        <Header>Login Page</Header>
        <hr />
        {/* <Dialog title={<h4>Tips</h4>}>The Content</Dialog> */}
        <Dialog title={(value) => <h4>Tips-{value}</h4>}>The Content</Dialog>
      </div>
    )
  }
}

class Header extends Component {
  render() {
    return (
      <div
        className="header"
        style={{
          height: 40,
          backgroundColor: 'skyblue',
          lineHeight: '40px',
          textAlign: 'center',
        }}
      >
        {this.props.children}
      </div>
    )
  }
}

class Dialog extends Component {
  render() {
    return (
      <div>
        {/* <div className="title">{this.props.title}</div> */}
        <div className="title">{this.props.title('abc')}</div>
        <div className="content">{this.props.children}</div>
        <div>
          <button>Close</button>
          <button>Confirm</button>
        </div>
      </div>
    )
  }
}

createRoot(document.getElementById('root')).render(<App />)
