import React from 'react'


const Projects = () => {
  return (
    <section className='projects'>
      
      <figure className='projects-wrapper'>
        <figcaption>
          <h2>Movie Tracker </h2>
          <a href='https://github.com/JohnBinning/movieTracker'>{'github'}</a>
          <a href='hhttps://jenn-peavler-movie-tracker.herokuapp.com/'>{'website'}</a>
          <p>
            Movie Tracker was created in one week during my third module as a student at the Turing School of Software and Design.
            It is an app that allows users to track trending movies and save them as favorites.  
            It pulls movie details from The Movie DB.
            Movie Tracker was assigned as an introductory project for Redux and React-Router.
            It was a group project, and I worked with Chris Jordan and Jenn Peavler.
          </p>
          <div className='project-stack'>
            <h3>The Stack:</h3>
            <p>Front End: <span>React, Redux, React Router</span></p>
            <p>Back End: <span>NodeJS, Express</span></p>
            <p>Testing: <span>Enzyme, Jest, FetchMock</span></p>
          </div>
        </figcaption>
      </figure>
      <figure className='Projects-block'>
        <figcaption>
          <h2>Jet Fuel </h2>
          <a href='https://github.com/JohnBinning/jetFuel'>{'githubIcon'}</a>
          <a href='https://steelbirdfood.herokuapp.com/'>{'websiteIcon'}</a>
          <p className='project-description'>
            jetFuel was created in one week during my final module as a student at the Turing School of Software and Design.
            It is a link shortening service, similar to Bit.ly or TinyURL.
            This was a paired project, and I worked with Leta Keane.
          </p>
          <div className='project-stack'>
            <h3>The Stack:</h3>
            <p>Front End: <span>jQuery</span></p>
            <p>Back End: <span>NodeJS, Express</span></p>
            <p>Testing: <span>Mocha, Chai</span></p>
          </div>
        </figcaption>
        
      </figure>
    </section>
  )
}

export default Projects