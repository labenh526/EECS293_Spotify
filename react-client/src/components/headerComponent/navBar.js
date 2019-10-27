import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';

class NavBar extends Component {
  render() {
    return (
      <header>
        <ul id="headerButtons">
          <li className="navButton"><Link to="">Home</Link></li>
        </ul>
        <b><font size="12">Tortoise</font></b>
        <p><img src={logo}/></p>
      </header>
    )
  }
}

export default NavBar;