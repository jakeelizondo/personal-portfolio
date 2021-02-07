import React from 'react';
import './Projects.css';

export default function () {
  return (
    <section className="projects-section">
      <h2 className="projects-header" id="projects">
        Projects
      </h2>
      <div className="project-group">
        <div className="project-frame">
          <div>
            <img
              src="images/coming-soon-png.png"
              alt="coming-soon-icon"
              className="project-icon-img"
            />
            <h4 className="dark-text">Project 1</h4>
            <p className="dark-text">
              Tilde waistcoat ethical, sustainable fanny pack meggings four
              dollar toast ullamco sed bicycle rights cupidatat kogi ramps cred.
              Woke in culpa eu. Waistcoat excepteur lomo anim. VHS craft beer
              swag four dollar toast. Commodo adipisicing street art migas paleo
              minim church-key live-edge locavore tbh. Next level portland
              officia, ethical dolore glossier flannel pork belly artisan ennui
              lo-fi retro kombucha literally.
            </p>

            <h4 className="dark-text">Skills utilized</h4>
            <ul className="dark-text skills-list">
              <li>SKILL 1</li>
              <li>SKILL 2</li>
              <li>SKILL 3</li>
            </ul>
          </div>
          <div className="project-button-group">
            <div className="project-button">
              <div className="project-button-back">
                <p className="dark-text project-link">
                  <a href="#">VIEW GITHUB REPO</a>
                </p>
              </div>
            </div>
            <div className="project-button">
              <div className="project-button-back">
                <p className="dark-text project-link">
                  <a href="#">VIEW LIVE PROJECT</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
