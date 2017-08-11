import React from 'react';
import { NavLink } from 'react-router-dom';
// import './assets/stylesheets/NavBar.css';

export const NavBar = () => {
  return (
    <article className='navbar'>
                  <img className='logo' src='images/logo.png'/>

      <NavLink to='/About' className='aside-nav' activeClassName='selected'>About</NavLink>
      <NavLink to='/Projects' className='aside-nav' activeClassName='selected'>Projects</NavLink>
      <NavLink to='/Resume' className='aside-nav' activeClassName='selected'>Resume</NavLink>
      <NavLink to='/Contact' className='aside-nav' activeClassName='selected'>Contact</NavLink>
    </article>
  )
}