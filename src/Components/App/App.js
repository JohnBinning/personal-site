import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { NavBar } from '../NavBar/NavBar';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import About from '../About/About';


import './App.css';

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
            <img className='logo' src='images/logo.png'/>
          </div>
          <Route path='/projects' component={ Projects } />
          <Route path='/contact' component={ Contact } />
          <Route path='/about' exact component={ About } />
          <Route path='/' exact component={ About } />
        </section>        
        
      </div>
    );
  }
}

export default App;
