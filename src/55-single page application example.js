import React, { Component } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './55-pages/Home'
import My from './55-pages/My'
import Friend from './55-pages/Friend'

class App extends Component {
  state = {
    currentHash: '',
  }
  // hashchange: 锚点值hash改变就会触发
  componentDidMount() {
    window.addEventListener('hashchange', () => {
      console.log('hash changed', window.location.hash)
      this.setState({
        currentHash: window.location.hash.slice(1),
      })
    })
  }
  render() {
    const { currentHash } = this.state
    return (
      <div>
        <h2>App Component</h2>
        <ul>
          <li>
            <a href="#/home">Home</a>
          </li>
          <li>
            <a href="#/my">My Music</a>
          </li>
          <li>
            <a href="#/friend">My Friend</a>
          </li>
        </ul>
        {currentHash === '/home' && <Home></Home>}
        {currentHash === '/my' && <My></My>}
        {currentHash === '/friend' && <Friend></Friend>}
      </div>
    )
  }
}

createRoot(document.getElementById('root')).render(<App />)
