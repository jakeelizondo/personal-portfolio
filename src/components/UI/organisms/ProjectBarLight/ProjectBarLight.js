import React from 'react';
import './ProjectBarLight.css';
import SectionHeading from '../../atoms/SectionHeading/SectionHeading';
import ProjectCard from '../../molecules/ProjectCard/ProjectCard';
import PROJECTS from '../../../../PROJECTS';

export default function () {
  return (
    <section className="projects-section-light">
      <SectionHeading heading={'Projects'} styleClass={'project-header-dark'} />
      <div className="project-group">
        {PROJECTS.map((project) => (
          <ProjectCard project={project} styleClass={'project-dark'} />
        ))}
      </div>
    </section>
  );
}
