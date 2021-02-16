import React from 'react';
import giftClosetIcon from '../../../../assets/images/003-gift-box.png';
import './ProjectIcon.css';
import itemVaultIcon from '../../../../assets/images/item-vault.png';
import quizAppIcon from '../../../../assets/images/pngegg.png';

export default function ProjectIcon(props) {
  let imgSrc;
  if (props.project.name === 'Gift Closet') {
    imgSrc = giftClosetIcon;
  }
  if (props.project.name === 'The Item Vault') {
    imgSrc = itemVaultIcon;
  }

  if (props.project.name === 'Quiz App') {
    imgSrc = quizAppIcon;
  }

  return (
    <div className="project-details">
      <img src={imgSrc} />
      <h2>{props.project.name}</h2>
    </div>
  );
}
