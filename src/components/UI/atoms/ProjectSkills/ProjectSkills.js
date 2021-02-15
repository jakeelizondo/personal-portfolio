import React from 'react';
import SectionHeading from '../SectionHeading/SectionHeading';
import nodeIcon from '../../../..//assets/images/node-logo.png';
import reactIcon from '../../../../assets/images/react-logo2.png';
import postgresIcon from '../../../../assets/images/postgres-logo.png';
import './ProjectSkills.css';

const skillsIcons = {
  React: reactIcon,
  NodeJS: nodeIcon,
  PostgreSQL: postgresIcon,
};

export default class ProjectSkills extends React.Component {
  static defaultProps = { iconNames: [] };
  getSkillsIcons() {
    let icons = this.props.iconNames.map((icon) => {
      return (
        <div className="skill-icon">
          <img key={icon} src={skillsIcons[icon]} />
        </div>
      );
    });
    return icons;
  }

  render() {
    let icons = this.getSkillsIcons();
    return (
      <div className="project-skills">
        <SectionHeading
          heading={'Project Skills'}
          styleClass={'project-skills-heading'}
        />
        <div className="project-tech-icons">{icons}</div>
      </div>
    );
  }
}
