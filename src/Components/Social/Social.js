import React from 'react';
import '../../stylesheets/Social.css';

export const Social = () => {

  return (
    <article className='social-links'>
      <a to='https://github.com/johnbinning' className='social-links' target='_blank' role='link'>
        <img src='images/github.png' className='github social-img left-soc' alt='github logo link' />
      </a>
      <a href='https://www.linkedin.com/in/john-binning/' target='_blank' className='social-links' role='link'> 
        <img src='images/linkedin.png' className='linkedin social-img' alt='linkedin logo link' />
      </a>
    </article>
  )
}