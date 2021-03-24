import React, { useEffect } from 'react';
import SectionHeading from '../../components/UI/atoms/SectionHeading/SectionHeading';
import ProjectSection from '../../components/UI/molecules/ProjectSection/ProjectSection';
import ProjectBar from '../../components/UI/organisms/ProjectBar/ProjectBar';
import PROJECTS from '../../PROJECTS';
import './ProjectsPage.css';

export default function ProjectsPage(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="projects-page-projects-section">
      <SectionHeading
        heading={'Projects'}
        styleClass={'project-section-heading'}
      />
      {/* <ProjectBar style={'light'} {...props} /> */}
      {PROJECTS.map((project) => (
        <ProjectSection project={project} />
      ))}
    </div>
  );
}
