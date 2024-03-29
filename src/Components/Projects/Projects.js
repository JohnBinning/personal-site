import React from 'react'
import '../../stylesheets/Projects.css';

const Projects = () => {
  return (
    <section className='projects'>
      <h2 className='location-title projects-location-title'>Projects</h2>
      <div className='project-block grey-block'>
        <figure className='project-wrapper'>
          <figcaption>
            <h3 className='project-title'>WanderList </h3>
            <img className='project-image' src='images/wanderlist.gif' alt='wanderlist preview'/>
            <div className='project-links'>
              <a href='https://github.com/JohnBinning/WanderList' className='project-github project-links'>
                <img src='images/github.png' className='project-link-social' alt='github logo link' />
                {'GitHub'}
              </a>
              <a href='http://mywanderlist.surge.sh/' className='project-hosted project-links'>
                <img src='images/internet.png' className='project-link-social' alt='live site link' />
                {'Live Site'}
              </a>
            </div>
            <p className='project-description'>
              WanderList was created in two weeks during my third module as a student at the Turing School of Software and Design.
              It helps users track items on their bucket list, and uses D3 and the Google Maps API for data visualization.
              This was a solo project.
            </p>
            <div className='project-stack'>
              <h4 className='the-stack'>The Stack:</h4>
              <p className='front-end'><strong>Front End: </strong><span>React, D3</span></p>
              <p><strong>Back End: </strong><span>No backend as of now, I hope to implement one soon</span></p>
              <p><strong>Testing: </strong><span>Enzyme, Jest, FetchMock</span></p>
            </div>
          </figcaption>
        </figure>

        <figure className='project-wrapper'>
          <figcaption>
            <h3 className='project-title'>Mentr </h3>
            <img className='project-image' src='images/mentr.gif' alt='mentr preview'/>
            <div className='project-links'>
              <a href='https://github.com/JohnBinning/mentr' className='project-github project-links'>
                <img src='images/github.png' className='project-link-social' alt='github logo link' />
                {'GitHub'}
              </a>
              {/* <a href='https://turing-mentr.herokuapp.com/' className='project-hosted project-links'>
                <img src='images/internet.png' className='project-link-social' alt='live site link' />
                {'Live Site'}
              </a> */}
            </div>
            <p className='project-description'>
              Mentr was a group project created in one week during my final module as a student at the Turing School of Software and Design.
              It is an app that allows Turing students and volunteer mentors to connect.  The intent was to create a user friendly interface 
              on what was previously an intimidating Google Docs spreadsheet.  We authenticated users through GitHub Oauth, and used a PostgreSQL DB. 
              I worked with Leta Keane and Spencer Hilvitz.
            </p>
            <div className='project-stack'>
              <h4 className='the-stack'>The Stack:</h4>
              <p className='front-end'><strong>Front End: </strong><span>React</span></p>
              <p><strong>Back End: </strong><span>NodeJS, Express</span></p>
              <p><strong>Testing: </strong><span>Mocha, Chai</span></p>
            </div>
          </figcaption>
        </figure>

        <figure className='project-wrapper'>
          <figcaption>
            <h3 className='project-title'>Movie Tracker </h3>
            <img className='project-image' src='images/movieTracker.gif' alt='movieTracker preview'/>
            <div className='project-links'>
              <a href='https://github.com/JohnBinning/movieTracker' className='project-github project-links'>
                <img src='images/github.png' className='project-link-social' alt='github logo link' />
                {'GitHub'}
              </a>
              {/* <a href='https://jenn-peavler-movie-tracker.herokuapp.com/' className='project-hosted project-links'>
                <img src='images/internet.png' className='project-link-social' alt='live site link' />
                {'Live Site'}
              </a> */}
            </div>
            <p className='project-description'>
              Movie Tracker was a group project created in one week during my third module as a student at the Turing School of Software and Design.
              It is an app that allows users to track trending movies and save them as favorites.  
              It pulls movie details from The Movie DB.
              Movie Tracker was assigned as an introductory project for Redux and React-Router.
              I worked with Chris Jordan and Jenn Peavler.
            </p>
            <div className='project-stack'>
              <h4 className='the-stack'>The Stack:</h4>
              <p className='front-end'><strong>Front End: </strong><span>React, Redux, React Router</span></p>
              <p><strong>Back End: </strong><span>NodeJS, Express</span></p>
              <p><strong>Testing: </strong><span>Enzyme, Jest, FetchMock</span></p>
            </div>
          </figcaption>
        </figure>

        <figure className='project-wrapper'>
          <figcaption>
            <h3 className='project-title'>Jet Fuel </h3>
            <img className='project-image' src='images/jetfuel.gif' alt='jet fuel preview'/>
            <div className='project-links'>
              <a href='https://github.com/JohnBinning/jetFuel' className='project-github project-links'>
                <img src='images/github.png' className='project-link-social' alt='github logo link' />
                {'GitHub'}
              </a>
              {/* <a href='https://steelbirdfood.herokuapp.com/' className='project-hosted project-links'>
                <img src='images/internet.png' className='project-link-social' alt='live site link' />
                {'Live Site'}
              </a> */}
            </div>
            <p className='project-description'>
              jetFuel was a paired project created in one week during my final module as a student at the Turing School of Software and Design.
              It is a link shortening service, similar to Bit.ly or TinyURL.
              It was created with with Leta Keane.
            </p>
            <div className='project-stack'>
              <h4 className='the-stack'>The Stack:</h4>
              <p className='front-end'><strong>Front End: </strong><span>jQuery</span></p>
              <p><strong>Back End: </strong><span>NodeJS, Express</span></p>
              <p><strong>Testing: </strong><span>Mocha, Chai</span></p>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export default Projects