import React from 'react';
import { Link } from 'react-router-dom';

const Resume = () => {
  return (
    <article className="resume">
      <h2>Resume</h2>
      <figure>
        <h3>Projects</h3>
        <Link to='/projects' ><div>See Projects</div></Link>
      </figure>

      <figure>
        <h3>Skills</h3>
        <div className='skills-container'>
          <p className='resume-skill'>Javascript</p>
          <p className='resume-skill'>HTML5 & CSS3</p>
          <p className='resume-skill'>React/Redux</p>
          <p className='resume-skill'>jQuery</p>
          <p className='resume-skill'>NodeJS</p>
          <p className='resume-skill'>Express</p>
          <p className='resume-skill'>PostgreSQL</p>
          <p className='resume-skill'>Testing: Mocha, Chai, Enzyme, Jest</p>
          <p className='resume-skill'>Git and Agile Workflow</p>
          <p className='resume-skill'>WAI-ARIA</p>
          <p className='resume-skill'>Responsive UX/UI</p>
        </div>
      </figure>

    </article>
  )
};

export default Resume;