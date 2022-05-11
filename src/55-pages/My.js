import React, { Component } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default class My extends Component {
  render() {
    return (
      <div>
        My Account Component
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
}
