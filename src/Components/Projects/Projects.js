import React from 'react'


const Projects = () => {
  return (
    <section className='projects'>
      
      <figure className='projects-wrapper'>
        <figcaption>
          <h2>WanderList </h2>
          <img className='project-image' src='images/wanderlist.gif' alt='wanderlist preview'/>
          <div className='project-links'>
            <a href='https://github.com/JohnBinning/WanderList' className='project-github'>{'GitHub Repo'}</a>
            <a href='http://mywanderlist.surge.sh/' className='project-hosted'>{'Live Site'}</a>
          </div>
          <p className='project-description'>
            WanderList was created in two weeks during my third module as a student at the Turing School of Software and Design.
            It helps users track items on their bucket list, and uses D3 and Google Maps for data visualization.
            This was a solo project.
          </p>
          <div className='project-stack'>
            <h3>The Stack:</h3>
            <p>Front End: <span>React, D3</span></p>
            <p>Back End: <span>No backend as of now, I hope to implement one soon</span></p>
            <p>Testing: <span>Enzyme, Jest, FetchMock</span></p>
          </div>
        </figcaption>
      </figure>

      <figure className='projects-wrapper'>
        <figcaption>
          <h2>Movie Tracker </h2>
          <img className='project-image' src='images/movieTracker.gif' alt='movieTracker preview'/>
          <div className='project-links'>
            <a href='https://github.com/JohnBinning/movieTracker' className='project-github'>{'GitHub Reop'}</a>
            <a href='hhttps://jenn-peavler-movie-tracker.herokuapp.com/' className='project-hosted'>{'Live Site'}</a>
          </div>
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

      <figure className='projects-wrapper'>
        <figcaption>
          <h2>Jet Fuel </h2>
          <img className='project-image' src='images/jetfuel.gif' alt='jet fuel preview'/>
          <div className='project-links'>
            <a href='https://github.com/JohnBinning/jetFuel' className='project-github'>{'GitHub Repo'}</a>
            <a href='https://steelbirdfood.herokuapp.com/' className='project-hosted'>{'Live Site'}</a>
          </div>
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