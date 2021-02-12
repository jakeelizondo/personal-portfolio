import React from 'react';
import './ProjectBar.css';
import SectionHeading from '../../atoms/SectionHeading/SectionHeading';
import ProjectCard from '../../molecules/ProjectCard/ProjectCard';

export default function () {
  return (
    <section className="projects-section">
      <SectionHeading heading={'Projects'} />
      <div className="project-group">
        <ProjectCard projectName={'Gift Closet'} />
      </div>
    </section>
  );
}
