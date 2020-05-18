import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

var imageName = require('../images/img1.jpg')

function NavBar(){
  return(
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark">
      <a className="navbar-brand"><Link to={'/'} className='nav-link'><h1>DB Landscape</h1></Link></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item"><Link to={'/'} className="nav-link"> Home </Link></li>
          <li className="nav-item"><Link to={'/about'} className="nav-link">About</Link></li>
          <li className="nav-item"><Link to={'/projects'} className="nav-link">Projects</Link></li>
          <li className="nav-item"><Link to={'/contact'} className="nav-link">Contact</Link></li>
        </ul>
      </div>
    </nav> 
    </div>
  );
}

export default NavBar;
