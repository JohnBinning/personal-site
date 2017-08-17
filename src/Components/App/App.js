import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
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
            <Route path='/projects' component={ Projects } />
            <Route path='/contact' component={ Contact } />
            <Route path='/resume' component={ Resume } />
            <Route path='/about' exact component={ About } />
            <Route path='/' exact component={ About } />
          </div>
        </section>        
        
      </div>
    );
  }
}

export default App;
