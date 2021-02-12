import React from 'react';
import ProjectIcon from '../../atoms/ProjectIcon/ProjectIcon';
import ButtonExpanding from '../../atoms/ButtonExpanding/ButtonExpanding';
import './ProjectCard.css';

export default function ProjectCard(props) {
  return (
    <div className="project">
      <ProjectIcon projectName={props.projectName} />
      <ButtonExpanding text={'View'} />
    </div>
  );
}
