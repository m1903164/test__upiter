import React, { Component } from 'react'
import './Menu.css'

export default class Menu extends Component {
  render() {
    return (
      <div>
        <ul className='menu'>
          <li className="menu-item">Show All</li>
          <li className="menu-item">Design</li>
          <li className="menu-item">Branding</li>
          <li className="menu-item">Illustration</li>
          <li className="menu-item">Motion</li>
        </ul>
      </div>
    )
  }
}
