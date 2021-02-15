import React from 'react';
import giftClosetIcon from '../../../../assets/images/003-gift-box.png';
import './ProjectIconRow.css';

export default function ProjectIconRow(props) {
  let imgSrc;
  if (props.projectName === 'Gift Closet') {
    imgSrc = giftClosetIcon;
  }
  return (
    <div className="project-details-row">
      <img src={imgSrc} />
      <h2>{props.projectName}</h2>
    </div>
  );
}
