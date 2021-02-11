import React from 'react';

export default class Project extends React.Component {
  render() {
    return (
      <div className="project-frame">
        <div>
          <h2 className="dark-text">{this.props.project.name}</h2>
          <p className="dark-text">{this.props.project.description}</p>

          <h4 className="dark-text">Skills utilized</h4>
          <ul className="dark-text skills-list">
            {this.props.project.skills.map((skill) => (
              <li>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="project-button-group">
          <div className="project-button">
            <div className="project-button-back">
              {this.props.project.clientGithubURL && (
                <p className="dark-text project-link">
                  <a href={`${this.props.project.clientGithubURL}`}>
                    VIEW GITHUB CLIENT REPO
                  </a>
                </p>
              )}
              {this.props.project.serverGithubURL && (
                <p className="dark-text project-link">
                  <a href={`${this.props.project.serverGithubURL}`}>
                    VIEW GITHUB SERVER REPO
                  </a>
                </p>
              )}
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
    );
  }
}
