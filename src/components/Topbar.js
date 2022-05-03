import React from "react";
import './topbar.css';
import {Link} from 'react-router-dom'


function Topbar(){
    return(
        <div class="navbar">
        <Link to='/' className='navbar-logo'>
         DURGA
        </Link>
        <Link to="/piligrimservices">Home</Link>
        <Link to="/temple">News</Link>
        <div class="dropdown">
            <button class="dropbtn">Dropdown 
            <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
        <Link to="/temple">Link1</Link>
        <Link to="/history">Link2</Link>
        <Link to="/link3
        ">Link3</Link>
    </div>
  </div> 
  <div class="dropdown">
    <button class="dropbtn">Temple 
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="history">History</a>
      <a href="prasadam">Freeprasadam</a>
      <a href="annadanam">Annadanam</a>
      <a href="kaladanam">Kaladanam</a>
    </div>
  </div> 
  <div class="dropdown">
    <button class="dropbtn">Services 
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="history">History</a>
      <a href="prasadam">Freeprasadam</a>
      <a href="annadanam">Annadanam</a>
      <a href="kaladanam">Kaladanam</a>
    </div>
  </div>
</div>
    )
}
export default Topbar