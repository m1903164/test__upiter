import React, { Component } from 'react'
import '../Body/Body.css'
import Button from '../Button/Button'
import Cart from '../Cart/Cart'
import Menu from '../Menu/Menu'

export default class Body extends Component {
  render() {
    return (
      <div className='body'>
        <div className="body__container">
          <Menu></Menu>
          <Cart></Cart>
          <Button></Button>
        </div>
      </div>
    )
  }
}
