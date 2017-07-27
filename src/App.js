import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import NavBar from './components/nav/NavBar';
import Home from './components/sections/Home';
import About from './components/sections/About';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Home />
        <About />
      </div>
    );
  }
}

export default App;
