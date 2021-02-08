import React from 'react';

import { Route } from 'react-router-dom';
import Homepage from '../../routes/Homepage/Homepage';
import Projects from '../../routes/Projects/Projects';
import AboutMe from '../../routes/AboutMe/AboutMe';
import Contact from '../../routes/Contact/Contact';
import Sidebar from '../Sidebar/Sidebar';

// TODO Get sidebar reveal working properly or switch back to swipe

export default function App() {
  return (
    <React.Fragment>
      <Sidebar />
      <Route exact path="/" component={Homepage} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/about-me" component={AboutMe} />
      <Route exact path="/contact" component={Contact} />
      <footer>Footer goes here</footer>
    </React.Fragment>
  );
}
