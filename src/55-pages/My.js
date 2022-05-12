import React, { Component } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

class My extends Component {
  render() {
    return (
      <div>
        My Account Component
        <br />
        <button onClick={this.handleClick}>Login</button>
        <ul>
          <li>
            <NavLink to="profile">Profile</NavLink>
          </li>
          <li>
            <NavLink to="privacy">Privacy</NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
    )
  }
  handleClick = () => {
    console.log(this.props)
    console.log('Need to login')
    this.props.navigate('/')
  }
}
export const withNavigation = (Component) => {
  return (props) => <Component {...props} navigate={useNavigate()} />
}

export default withNavigation(My)
