import React, { Component } from 'react';
import '../header/Header.css';
import logo from './logo.png';

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className="header__container">
          <nav className='header__nav'>
            <img src={logo} className="App-logo" alt="logo" />
            <ul className='nav__list'>
              <li className="list-item">About</li>
              <li className="list-item">Services</li>
              <li className="list-item">Pricing </li>
              <li className="list-item">Blog</li>
            </ul>
            <button className='nav__btn'>
              Contact
            </button>
          </nav>
          <h1 className='title'>Portfolio</h1>
          <p className='text'>Agency provides a full service range including technical skills, design, business understanding. </p>
        </div>
    </div>
    )
  }
}
