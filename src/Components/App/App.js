import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { NavBar } from '../NavBar/NavBar';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import About from '../About/About';
import Resume from '../Resume/Resume';
import '../../stylesheets/Normalize.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
    }
  }
  
  render() {
    return (
      <div className="app">
        <NavBar />
        <section className='right-side'>
          <div className='logo-container'>
            <Link to='/'>
              <img className='logo' alt="John's logo" src='images/whiteCircle.png'/>
            </Link>
          </div>
          <div className='right-side-in'>
            <Routes>
              <Route path='/Projects' element={ <Projects /> } />
              <Route path='/Contact' element={ <Contact /> } />
              <Route path='/Resume' element={ <Resume /> } />
              <Route path='/About' exact element={ <About /> } />
              <Route path='/' exact element={ <About /> } />
            </Routes>
          </div>
        </section>        
      </div>
    );
  }
}

export default App;
