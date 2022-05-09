import React, { Component } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './55-pages/Home'
import My from './55-pages/My'
import Friend from './55-pages/Friend'

// 1. import core components
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
class App extends Component {
  render() {
    return (
      // 2. All of stuff nasted in Router
      <Router>
        <div>
          <h1>React Router Implement Process</h1>
          <ul>
            {/* 3. provide nav link to Link component */}
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/my">My Account</Link>
            </li>
            <li>
              <Link to="/friend">My Friend</Link>
            </li>
          </ul>
          {/* 4. Using Router, making the route rules */}
          <Routes>
            <Route index element={<Home />}></Route>
            <Route path="/my" element={<My />}></Route>
            <Route path="/friend" element={<Friend />}></Route>
          </Routes>
        </div>
      </Router>
    )
  }
}

createRoot(document.getElementById('root')).render(<App />)
