import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <ul>
      <li><NavLink to="/" exact4="true" activestyle={{background: "darkblue"}}>Home</NavLink></li>
      <li>  <NavLink to="/movies" exact="true" activestyle={{background: "darkblue"}}>Movies</NavLink></li>
      <li> <NavLink to="/directors" exact="true" activestyle={{background: "darkblue"}}>Directors</NavLink></li>
      <li>  <NavLink to="/actors" exact="true" activestyle={{background: "darkblue"}}>Actors</NavLink></li>
      </ul>
    </div>
  )
}

export default NavBar;