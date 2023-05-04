import logo from './logo.svg';
import './App.css';

import React from 'react';
import './App.css';
import { Link } from 'react-scroll';
import NavigationBar from './components/NavigationBar';
import Summary from './pages/Summary';
import Project from './pages/Project';
import People from './pages/People';
const App = () => {
  return (
    <div className="App">
      <NavigationBar />
      <div className="container">
        <section id="summary" className="card">
          <Summary />
        </section>
        <Link
          activeClass="active"
          to="project"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <div className="scroll-indicator">↓</div>
        </Link>
        <section id="project" className="card">
          <Project />
        </section>
        <Link
          activeClass="active"
          to="people"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <div className="scroll-indicator">↓</div>
        </Link>
        <section id="people" className="card">
          <People />
        </section>
      </div>
    </div>
  );
};

export default App;