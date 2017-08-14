import React from 'react';
import { NavLink } from 'react-router-dom';
import { Social } from '../Social/Social';

// import './assets/stylesheets/NavBar.css';

export const NavBar = () => {
  return (
    <article className='navbar'>
      <div className='inner-nav'>
        {/*<img className='logo' alt="John's logo" src='images/logo.png'/>*/}
        <h1>John Binning</h1>
        <h5>Front-End Developer</h5>
        <div className='nav-link-wrapper'>
          <NavLink to='/About' className='nav-link' activeClassName='selected'>About</NavLink>
          <NavLink to='/Projects' className='nav-link' activeClassName='selected'>Projects</NavLink>
          <NavLink to='/Resume' className='nav-link' activeClassName='selected'>Resume</NavLink>
          <NavLink to='/Contact' className='nav-link' activeClassName='selected'>Contact</NavLink>
        </div>
      <Social />
      </div>
    </article>
  )
}