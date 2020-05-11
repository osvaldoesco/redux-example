import React from 'react';
import {
  Link
} from "react-router-dom";

import Logo from '../../assets/images/app-logo.png';

export default () => {
  return (
    <nav className="navbar navbar-dark bg-dark text-left" style={{justifyContent: 'flex-start'}}>
      <Link className="navbar-brand" to="/">
        <img src={Logo} alt="Applaudo logo" width="50" />
        Trainees - Redux 
      </Link>
      <li className="nav-item">
        <Link to="/pokemons" style={{color: 'white'}}>List</Link>
      </li>
    </nav>
  );
}  
