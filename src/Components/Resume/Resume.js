import React from 'react';
import { Link } from 'react-router-dom';

const Resume = () => {
  return (
    <article className="resume">
      <h2>Resume</h2>
      <figure>
        <h3>PROJECTS</h3>
        <Link to='/projects' ><div>See Projects</div></Link>
      </figure>

      <figure>
        <h3>SKILLS</h3>
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
      <figure>

        <h3>EXPERIENCE</h3>

        <div className='experience-container'>
          <div className='job-container'>
            <h4 className='job-title'>Human Resources Intake Coordinator</h4>
            <div className='employer'>PASCO Home Health / Lakewood, CO</div>
            <p className='job-duties'>I organized collaboration between various departments to streamline our intake process. I also trained parents of children with disabilities and helped them coordinate with the government to receive services.</p>
          </div>
        </div>

        <div className='experience-container'>
          <div className='job-container'>
            <h4 className='job-title'>Operations/Claim Finance</h4>
            <div className='employer'>Travelers Insurance / Greenwood Village, CO</div>
            <p className='job-duties'>I audited payments made to and from the Travelers Claims department, ensuring that they met government imposed financial guidelines.</p>
          </div>
        </div>

        <div className='experience-container'>
          <div className='job-container'>
            <h4 className='job-title'>Claims Technician</h4>
            <div className='employer'>The Hartford / Hartford, CT</div>
            <p className='job-duties'>I managed claim information distribution for the Northeast and Southeast US. I also researched and developed efficient cient claim handling on the Process and Procedures Council.</p>
          </div>
        </div>

        <div className='experience-container'>
          <div className='job-container'>
            <h4 className='job-title'>History and Writing Instructor</h4>
            <div className='employer'>Grace Academy / New Haven, CT</div>
            <p className='job-duties'>I developed and taught lesson plans in history, writing, and grammar. I tutored children in both an individual and a classroom setting.</p>
          </div>
        </div>

      </figure>

      <figure>
        <h3>EDUCATION</h3>

        <article className='school-container'>
          <h4 className='education-type'>BA - HISTORY</h4>
          <div className='school'>University of Colorado, Boulder</div>
        </article>

        <article className='school-container'>
          <h4 className='education-type'>FRONTEND WEB DEVELOPMENT PROGRAM</h4>
          <div className='school'>Turing School of So ware and Design / Denver, CO</div>
        </article>

      </figure>

    </article>
  )
};

export default Resume;