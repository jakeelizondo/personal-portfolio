import React from 'react';
import './Projects.css';
import PROJECTS from '../../projects';
import Project from '../../components/Project/Project';

export default function () {
  return (
    <section className="projects-section">
      <h2 className="projects-header" id="projects">
        Projects
      </h2>
      <div className="project-group">
        {PROJECTS.map((project) => (
          <Project project={project} key={project.id} />
        ))}
      </div>
    </section>
  );
}
