import React from 'react';
import ProjectIcon from '../../atoms/ProjectIcon/ProjectIcon';
import ButtonExpanding from '../../atoms/ButtonExpanding/ButtonExpanding';
import './ProjectCard.css';

export default function ProjectCard(props) {
  return (
    <div
      onClick={() =>
        props.routeProps.history.push(`/projects/${props.project.id}`)
      }
      className={props.styleClass}
    >
      <ProjectIcon project={props.project} />
      <ButtonExpanding text={'View'} linkTo={`/projects/${props.project.id}`} />
    </div>
  );
}
