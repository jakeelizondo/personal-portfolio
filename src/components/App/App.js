import React from 'react';

import { Route } from 'react-router-dom';
import Homepage from '../../pages/Homepage/Homepage';
import Projects from '../UI/organisms/ProjectBar/ProjectBar';
import AboutMe from '../../pages/AboutMe/AboutMe';
import Contact from '../../pages/Contact/Contact';
import Sidebar from '../UI/organisms/Sidebar/Sidebar';
import './App.css';
import Footer from '../UI/organisms/Footer/Footer';

export default function App() {
  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/about-me" component={AboutMe} />
      <Route exact path="/contact" component={Contact} />
      <Footer />
    </div>
  );
}
