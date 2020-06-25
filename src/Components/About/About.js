import React from 'react';
import '../../stylesheets/About.css';

const About = () => {
  return (
    <article className="about">
      <h3 className='location-title'>About Me</h3>
      <p className='grey-block about-description'>
        I am a former insurance salesman/educator/HR rep turned web developer. 
        I am passionate about creating interactive and accessible applications that communicate ideas 
        in an intuitive fashion.
        While I specialize in front end development with Vue.js, React/Redux, or jQuery, I also am comfortable with back end development with Java or Node/Express.
        Outside of web development, I love baseball, hiking in my home state of Colorado, and fall.
      </p>
    </article>
  )
};

export default About;
