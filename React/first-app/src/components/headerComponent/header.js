import React, { Component } from 'react';

import {
  Link
} from 'react-router-dom';


class Header extends Component {
  render() {
    return (
      <header>
      <div className="logo">
      LOGO
      </div>

      <nav>
	      <ul>
	      <li>
        <Link to="/">Home</Link>
        </li>
	      <li>
        <Link to="/About">About Us</Link>
        </li>
	      <li>
        <Link to="/Services">Services</Link>
        </li>
	      <li>
        <Link to="/Contact">Contact Us</Link>
        </li>

	      </ul>
      </nav>
       </header>
    );
  }
}

export default Header;
