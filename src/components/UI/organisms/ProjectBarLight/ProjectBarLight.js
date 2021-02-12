import React from 'react';
import './ProjectBarLight.css';
import SectionHeading from '../../atoms/SectionHeading/SectionHeading';
import ProjectCard from '../../molecules/ProjectCard/ProjectCard';

export default function () {
  return (
    <section className="projects-section-light">
      <SectionHeading heading={'Projects'} styleClass={'project-header-dark'} />
      <div className="project-group">
        <ProjectCard projectName={'Gift Closet'} styleClass={'project-dark'} />
      </div>
    </section>
  );
}
