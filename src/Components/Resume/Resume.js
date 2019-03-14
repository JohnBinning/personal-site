import React from 'react';
import { Link } from 'react-router-dom';
import '../../stylesheets/Resume.css';

const Resume = () => {
  return (
    <article className="resume">
      <figure>
        <h3 className='title'>PROJECTS</h3>
        <Link to='/projects' className='p-link'><div className='grey-block projects-link resume-blocks'>Click to See Projects</div></Link>
      </figure>
      <figure>
        <h3 className='title'>SKILLS</h3>
        <div className='skills-container grey-block resume-blocks'>
          <p className='resume-skill'>Javascript</p>
          <p className='resume-skill'>Java</p>
          <p className='resume-skill'>Groovy</p>
          <p className='resume-skill'>HTML5 & CSS3</p>
          <p className='resume-skill'>React/Redux</p>
          <p className='resume-skill'>Vue JS</p>
          <p className='resume-skill'>Knockout JS</p>
          <p className='resume-skill'>jQuery</p>
          <p className='resume-skill'>Node JS</p>
          <p className='resume-skill'>Express</p>
          <p className='resume-skill'>PostgreSQL</p>
          <p className='resume-skill'>Testing: Mocha, Chai, QUnit, Enzyme, Jest, Selenium</p>
          <p className='resume-skill'>Git and Agile Workflow</p>
          <p className='resume-skill'>WAI-ARIA</p>
          <p className='resume-skill'>Responsive UX/UI</p>
        </div>
      </figure>
      <figure>
        <h3 className='title'>EXPERIENCE</h3>
        <article className='exp-block grey-block resume-blocks'>
          <div className='experience-container'>
            <div className='job-container'>
              <h4 className='job-title'><strong>Software Engineer</strong></h4>
              <div className='employer'>Zen Planner / Highlands Ranch, CO</div>
              <p className='job-duties'>I develop, maintain and test frontend and backend code for our fitness oriented business managment software.</p>
            </div>
          </div>
          <div className='experience-container'>
            <div className='job-container'>
              <h4 className='job-title'><strong>Web Developer</strong></h4>
              <div className='employer'>Zingfit / Boulder, CO</div>
              <p className='job-duties'>I create and maintain websites with HTML, CSS, and Javascript. I focus on UX/UI and front end development.</p>
            </div>
          </div>
          <div className='experience-container'>
            <div className='job-container'>
              <h4 className='job-title'><strong>Human Resources Intake Coordinator</strong></h4>
              <div className='employer'>PASCO Home Health / Lakewood, CO</div>
              <p className='job-duties'>I organized collaboration between various departments to streamline our intake process. I also trained parents of children with disabilities and helped them coordinate with the government to receive services.</p>
            </div>
          </div>
          <div className='experience-container'>
            <div className='job-container'>
              <h4 className='job-title'><strong>Operations/Claim Finance</strong></h4>
              <div className='employer'>Travelers Insurance / Greenwood Village, CO</div>
              <p className='job-duties'>I audited payments made to and from the Travelers Claims department, ensuring that they met government imposed financial guidelines.</p>
            </div>
          </div>
          <div className='experience-container'>
            <div className='job-container'>
              <h4 className='job-title'><strong>Claims Technician</strong></h4>
              <div className='employer'>The Hartford / Hartford, CT</div>
              <p className='job-duties'>I managed claim information distribution for the Northeast and Southeast US. I also researched and developed efficient cient claim handling on the Process and Procedures Council.</p>
            </div>
          </div>
          <div className='experience-container'>
            <div className='job-container'>
              <h4 className='job-title'><strong>History and Writing Instructor</strong></h4>
              <div className='employer'>Grace Academy / New Haven, CT</div>
              <p className='job-duties'>I developed and taught lesson plans in history, writing, and grammar. I tutored children in both an individual and a classroom setting.</p>
            </div>
          </div>
        </article>
      </figure>
      <figure>
        <h3 className='title'>EDUCATION</h3>
        <div className='grey-block education-wrapper resume-blocks'>
          <article className='school-container'>
            <h4 className='education-type'>BA - HISTORY</h4>
            <div className='school'>University of Colorado, Boulder</div>
          </article>
          <article className='school-container resume-blocks'>
            <h4 className='education-type frontend-web'>FRONTEND WEB DEVELOPMENT PROGRAM</h4>
            <div className='school turing-school'>Turing School of Software and Design / Denver, CO</div>
          </article>
        </div>
      </figure>
    </article>
  )
};

export default Resume;
