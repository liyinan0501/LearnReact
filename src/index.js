import React, { Component } from 'react'
import { createRoot } from 'react-dom/client'

class App extends Component {
  render() {
    console.log('render...')
    return
  }
}

createRoot(document.getElementById('root')).render(<App />)
