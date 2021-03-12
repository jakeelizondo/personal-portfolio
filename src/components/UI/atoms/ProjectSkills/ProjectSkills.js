import React from 'react';
import SectionHeading from '../SectionHeading/SectionHeading';
import nodeIcon from '../../../..//assets/images/node-logo.png';
import reactIcon from '../../../../assets/images/react-logo2.png';
import postgresIcon from '../../../../assets/images/postgres-logo.png';
import html5Icon from '../../../../assets/images/html5-icon.png';
import css3Icon from '../../../../assets/images/css-icon.png';
import jQueryIcon from '../../../../assets/images/pngegg.png';
import hooksIcon from '../../../../assets/images/react-hooks-icon.png';
import graphQLIcon from '../../../../assets/images/graphql-icon.png';

import './ProjectSkills.css';

const skillsIcons = {
  React: reactIcon,
  NodeJS: nodeIcon,
  PostgreSQL: postgresIcon,
  HTML5: html5Icon,
  CSS3: css3Icon,
  JQuery: jQueryIcon,
  'React Hooks': hooksIcon,
  GraphQL: graphQLIcon,
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
