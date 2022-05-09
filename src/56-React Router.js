import React, { Component } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './55-pages/Home'
import My from './55-pages/My'
import Friend from './55-pages/Friend'

// 1. import core components
// Link: url
// Route: 指定路由规则
// BrowserRouter: 整个路由组件
import { BrowserRouter, Routes, Route, Link, Router } from 'react-router-dom'

// import { BrowserRouter as router, Routes, Route, Link } from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* <Router> */}
        <div>
          <h2>App Component</h2>
          <ul>
            <li>
              {/* <a href="#/home">Home</a> */}
              <Link to="/home">Home</Link>
            </li>
            <li>
              {/* <a href="#/my">My Music</a> */}
              <Link to="/my">My Music</Link>
            </li>
            <li>
              {/* <a href="#/friend">My Friend</a> */}
              <Link to="/friend">My Friend</Link>
            </li>
          </ul>
          {/* {currentHash === '/home' && <Home></Home>}
        {currentHash === '/my' && <My></My>}
        {currentHash === '/friend' && <Friend></Friend>} */}
          <Routes>
            <Route path="home" element={<Home />}></Route>
            <Route path="my" element={<My />}></Route>
            <Route path="friend" element={<Friend />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}

createRoot(document.getElementById('root')).render(<App />)
