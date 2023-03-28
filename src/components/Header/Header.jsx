import './Header.css'
import {NavLink} from "react-router-dom";
import React from 'react';

export default function Header () {
  return (
    <nav className='products-nav'>
      <NavLink to='/'><li>Home</li></NavLink>
      <NavLink to='/laptops'><li>Laptops</li></NavLink>
      <NavLink to='/smartphones'><li>Smartphones</li></NavLink>
      <NavLink to='/motorcycle'><li>Motorcycles</li></NavLink>
    </nav>
  );
};
