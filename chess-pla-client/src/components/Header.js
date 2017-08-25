import React, { Component } from 'react';

class Header extends Component {
  render(){
    return (
      <nav>
        <div className="nav-wrapper">
          <a className="brand-logo left">Chess PLA</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a>Register</a></li>
            <li><a>Games</a></li>
            <li><a>Players</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
