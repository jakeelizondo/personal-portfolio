import React from 'react';
import giftClosetIcon from '../../../../assets/images/003-gift-box.png';
import './ProjectIconRow.css';
import itemVaultIcon from '../../../../assets/images/item-vault.png';
import eplAppIcon from '../../../../assets/images/001-football.png';
import SYWIcon from '../../../../assets/images/spanish-flag-icon.png';

export default function ProjectIconRow(props) {
  let imgSrc;
  if (props.project.name === 'Gift Closet') {
    imgSrc = giftClosetIcon;
  }
  if (props.project.name === 'The Item Vault') {
    imgSrc = itemVaultIcon;
  }

  if (props.project.name === 'My EPL News') {
    imgSrc = eplAppIcon;
  }

  if (props.project.name === 'Spanish Your Way') {
    imgSrc = SYWIcon;
  }

  return (
    <div className="project-details-row">
      <img src={imgSrc} />
      <h2>{props.project.name}</h2>
    </div>
  );
}
