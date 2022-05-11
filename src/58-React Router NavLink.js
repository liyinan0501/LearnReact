import React, { Component } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './55-pages/Home'
import My from './55-pages/My'
import Friend from './55-pages/Friend'

// 58-NavLink
// 1. import core components
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <style>
          {`
          .active {
            color:red;
            font-weight:700
          }
         `}
        </style>
        {/* 2. All of stuff nasted in Router */}
        <Router>
          <div>
            <h1>React Router Implement Process</h1>
            <ul>
              {/* 3. provide nav link to Link component */}
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/my">My Account</NavLink>
              </li>
              <li>
                <NavLink to="/friend">My Friend</NavLink>
              </li>
            </ul>
            {/* 4. Using Router, making the route rules */}
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/my" element={<My />}></Route>
              <Route path="/friend" element={<Friend />}></Route>
            </Routes>
          </div>
        </Router>
      </React.Fragment>
    )
  }
}

createRoot(document.getElementById('root')).render(<App />)
