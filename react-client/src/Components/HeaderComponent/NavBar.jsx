import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import M from 'materialize-css';

class NavBar extends Component {
  render() {
    return (
      <nav>
        <div class="nav-wrapper navColor">
          <a href="#" class="brand-logo"> <img src="Poll.png"></img></a>
          <ul id="nav-mobile" class="right hide-on-med-and-down navButtonText">
            <li><a href="">Search <i class="material-icons right">search</i> </a></li>
            <li><a href="">Create <i class="material-icons right">mode_edit</i> </a></li>
          </ul>
          <div class="input-field-active inline right ">
            <input id="pollsearch" placeholder="Type Here..." type="text" class="validate _input"></input>
          </div>
          
        </div>
      </nav>
    )
  }
}
export default NavBar;