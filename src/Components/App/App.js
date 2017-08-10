import React, { Component } from 'react';
import { NavBar } from '../NavBar/NavBar';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';


import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
    }
  }
  render() {
    return (
      <div className="App">
        <NavBar />
        <Projects />
        <Contact />
        
        
      </div>
    );
  }
}

export default App;
