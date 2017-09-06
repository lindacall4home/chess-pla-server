import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import knight from './../images/knight.png'

class Header extends Component {
  render(){
    return (
      <nav>
        <div className="nav-wrapper">
          <div className="left">
            <img id="logo-image" src={knight} alt="chess knight"/>
            <Link to={'/'} className="brand-logo">
              Chess PLA
            </Link>
            <div className="subtitle hide-on-med-and-down">
              (Pairing, Ladder & Attendance)
            </div>
          </div>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to={'/'}>Home</Link></li>
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
