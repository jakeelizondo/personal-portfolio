import React from 'react';
import './ProjectBarDark.css';
import SectionHeading from '../../atoms/SectionHeading/SectionHeading';
import ProjectCard from '../../molecules/ProjectCard/ProjectCard';
import PROJECTS from '../../../../PROJECTS';

export default function () {
  return (
    <section className="projects-section-dark">
      <SectionHeading
        heading={'Projects'}
        styleClass={'project-header-light'}
      />
      <div className="project-group">
        {PROJECTS.map((project) => (
          <ProjectCard project={project} styleClass={'project-light'} />
        ))}
      </div>
    </section>
  );
}
