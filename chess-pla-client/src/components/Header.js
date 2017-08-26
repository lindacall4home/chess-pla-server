import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render(){
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to={'/'} className="brand-logo left">Chess PLA</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to={'/register'}>Register</Link></li>
            <li><Link to={'/games'}>Games</Link></li>
            <li><Link to={'/players'}>Players</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
