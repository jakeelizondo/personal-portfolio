import React from 'react';
import giftClosetIcon from '../../../../assets/images/003-gift-box.png';
import './ProjectIcon.css';

export default function ProjectIcon(props) {
  let imgSrc;
  if (props.projectName === 'Gift Closet') {
    imgSrc = giftClosetIcon;
  }
  return (
    <div className="project-details">
      <img src={imgSrc} />
      <h2>{props.projectName}</h2>
    </div>
  );
}
