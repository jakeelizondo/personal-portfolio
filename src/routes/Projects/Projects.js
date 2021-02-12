import React from 'react';
import './Projects.css';
import giftClosetIcon from '../../images/003-gift-box.png';

export default function () {
  return (
    <section className="projects-section">
      <h2 className="projects-header" id="projects">
        Projects
      </h2>
      <div className="project-group">
        <div className="project">
          <div className="project-details">
            <img src={giftClosetIcon} />
            <h2>Gift Closet</h2>
          </div>
          <button>View</button>
        </div>
      </div>
    </section>
  );
}
