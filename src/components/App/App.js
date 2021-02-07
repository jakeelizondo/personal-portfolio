import React from 'react';
import Header from '../Header/Header';
import { Route } from 'react-router-dom';
import Homepage from '../../routes/Homepage/Homepage';
import Projects from '../../routes/Projects/Projects';
import AboutMe from '../../routes/AboutMe/AboutMe';
import Contact from '../../routes/Contact/Contact';

export default function App() {
  return (
    <React.Fragment>
      <Header />
      <Route exact path="/" component={Homepage} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/about-me" component={AboutMe} />
      <Route exact path="/contact" component={Contact} />
    </React.Fragment>
  );
}
