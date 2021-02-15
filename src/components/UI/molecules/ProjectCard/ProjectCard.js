import React from 'react';
import ProjectIcon from '../../atoms/ProjectIcon/ProjectIcon';
import ButtonExpanding from '../../atoms/ButtonExpanding/ButtonExpanding';
import './ProjectCard.css';

export default function ProjectCard(props) {
  return (
    <div className={props.styleClass}>
      <ProjectIcon projectName={props.projectName} />
      <ButtonExpanding text={'View'} linkTo={`/projects/${1}`} />
    </div>
  );
}
