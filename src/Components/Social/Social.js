import React from 'react';
import { Link } from 'react-router-dom';
import '../../stylesheets/Social.css';

export const Social = () => {

  return (
    <article className='social-links'>
      <Link to='https://github.com/johnbinning' className='social-links' target='_blank' role='link'>
        <img src='images/github.png' className='github social-img left-soc' alt='github logo link' />
      </Link>
      <Link to='https://www.linkedin.com/in/john-binning/' className='social-links' target='_blank' role='link'>
        <img src='images/linkedin.png' className='linkedin social-img' alt='linkedin logo link' />
      </Link>
      <Link to='https://twitter.com/jbinning17' className='social-links' target='_blank' role='link'>
        <img src='images/twitter.png' className='twitter social-img right-soc' alt='twitter logo link' />
      </Link>
    </article>
  )
}