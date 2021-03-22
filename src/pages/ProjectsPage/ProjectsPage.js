import React from 'react';
import ProjectBar from '../../components/UI/organisms/ProjectBar/ProjectBar';
import './ProjectsPage.css';

export default function ProjectsPage(props) {
  return (
    <div className="projects-page-projects-section">
      <ProjectBar style={'light'} {...props} />
    </div>
  );
}
