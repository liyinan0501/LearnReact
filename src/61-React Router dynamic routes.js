import React, { Component } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import Detail from './61-pages/Detail'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>React Router Implement Process</h1>
          <ul>
            <li>
              <Link to="detail/1">Product 1</Link>
            </li>
            <li>
              <Link to="detail/2">Product 2</Link>
            </li>
            <li>
              <Link to="detail/3">Product 3</Link>
            </li>
            <li>
              <Link to="detail/4">Product 4</Link>
            </li>
          </ul>
          <Routes>
            <Route path="detail/:id" element={<Detail />}></Route>
          </Routes>
        </div>
      </Router>
    )
  }
}

createRoot(document.getElementById('root')).render(<App />)
