import React from 'react';
import './ProjectBarLight.css';
import SectionHeading from '../../atoms/SectionHeading/SectionHeading';
import ProjectCard from '../../molecules/ProjectCard/ProjectCard';
import PROJECTS from '../../../../PROJECTS';

export default function ProjectBar(props) {
  let sectionClass = '';
  if (props.style === 'dark') {
    sectionClass = 'projects-section-dark';
  }
  if (props.style === 'light') {
    sectionClass = 'projects-section-light';
  }

  return (
    <section className={sectionClass}>
      <SectionHeading heading={'Projects'} styleClass={'project-header'} />
      <div className="project-group">
        {PROJECTS.map((project) => (
          <ProjectCard
            project={project}
            routeProps={props}
            styleClass={'project'}
          />
        ))}
      </div>
    </section>
  );
}
