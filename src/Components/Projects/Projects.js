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
                <img src='images/github.png' className='project-link-social' alt='github' />
                {'GitHub'}
              </a>
              <a href='http://mywanderlist.surge.sh/' className='project-hosted project-links'>
                <img src='images/internet.png' className='project-link-social' alt='live site' />
                {'Live Site'}
              </a>
            </div>
            <p className='project-description'>
              WanderList was created in two weeks during my third module as a student at the Turing School of Software and Design.
              It helps users track items on their bucket list, and uses D3 and Google Maps for data visualization.
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
            <h3 className='project-title'>Movie Tracker </h3>
            <img className='project-image' src='images/movieTracker.gif' alt='movieTracker preview'/>
            <div className='project-links'>
              <a href='https://github.com/JohnBinning/movieTracker' className='project-github project-links'>
                <img src='images/github.png' className='project-link-social' alt='github' />
                {'GitHub'}
              </a>
              <a href='https://jenn-peavler-movie-tracker.herokuapp.com/' className='project-hosted project-links'>
                <img src='images/internet.png' className='project-link-social' alt='live site' />
                {'Live Site'}
              </a>
            </div>
            <p className='project-description'>
              Movie Tracker was created in one week during my third module as a student at the Turing School of Software and Design.
              It is an app that allows users to track trending movies and save them as favorites.  
              It pulls movie details from The Movie DB.
              Movie Tracker was assigned as an introductory project for Redux and React-Router.
              It was a group project, and I worked with Chris Jordan and Jenn Peavler.
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
                <img src='images/github.png' className='project-link-social' alt='github' />
                {'GitHub'}
              </a>
              <a href='https://steelbirdfood.herokuapp.com/' className='project-hosted project-links'>
                <img src='images/internet.png' className='project-link-social' alt='live site' />
                {'Live Site'}
              </a>
            </div>
            <p className='project-description'>
              jetFuel was created in one week during my final module as a student at the Turing School of Software and Design.
              It is a link shortening service, similar to Bit.ly or TinyURL.
              This was a paired project, and I worked with Leta Keane.
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
  )
}

export default Projects