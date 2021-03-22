import React from 'react';
import { Route } from 'react-router-dom';
import Homepage from '../../pages/Homepage/Homepage';
import AboutMe from '../../pages/AboutMe/AboutMe';
import Contact from '../../pages/Contact/Contact';
import Sidebar from '../UI/organisms/Sidebar/Sidebar';
import './App.css';
import Footer from '../UI/organisms/Footer/Footer';
import ProjectsPage from '../../pages/ProjectsPage/ProjectsPage';
import ProjectDetailPage from '../../pages/ProjectDetailPage/ProjectDetailPage';

export default function App() {
  return (
    <main>
      <header>
        <Sidebar />
      </header>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/projects" component={ProjectsPage} />
      <Route exact path="/about-me" component={AboutMe} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/projects/:id" component={ProjectDetailPage} />
      <Route path="/" component={Footer} />
    </main>
  );
}
