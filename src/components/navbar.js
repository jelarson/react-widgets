import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

import "./styles.css";

export default class NavBar extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='nav-wrapper'>
        <div className='nav-link-wrapper'>
          <NavLink exact to='/' activeClassName='nav-link-active'>Home</NavLink>
        </div>
        <div className='nav-link-wrapper'>
          <NavLink to='/counter'>Count Incrementer</NavLink>
        </div>
        <div className='nav-link-wrapper'>
          <NavLink to='/greeting'>Toggle Greeting</NavLink>
        </div>
        <div className='nav-link-wrapper'>
          <NavLink to='/hide'>Toggle Hide</NavLink>
        </div>
        <div className='nav-link-wrapper'>
          <NavLink to='/font-size'>Font Size Incrementer</NavLink>
        </div>
        <div className='nav-link-wrapper'>
          <NavLink to='/position'>Position Changer</NavLink>
        </div>
        <div className='nav-link-wrapper'>
          <NavLink to='/clock'>Dynamic Clock</NavLink>
        </div>
        <div className='nav-link-wrapper'>
          <NavLink to='/color'>Font Color Changer</NavLink>
        </div>
      </div >
    )
  }
}