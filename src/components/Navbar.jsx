import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
   return (
      <div className="navbar">
         <ul>
            <li>Flashvolve</li>
            <li>
               <NavLink to="/">Home</NavLink>
            </li>
            <li>
               <NavLink to="/link1">Página 1</NavLink>
            </li>
            <li>
               <NavLink to="/link2">Página 2</NavLink>
            </li>
         </ul>
      </div>
   );
};
export default Navbar;
