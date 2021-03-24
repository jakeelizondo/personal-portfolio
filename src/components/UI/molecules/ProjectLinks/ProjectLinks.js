import React from 'react';
import ExternalLinkButton from '../../atoms/ExternalLinkButton/ExternalLinkButton';
import SectionHeading from '../../atoms/SectionHeading/SectionHeading';
import './ProjectLinks.css';

export default class ProjectLinks extends React.Component {
  static defaultProps = { links: [] };
  render() {
    return (
      <div
        className={
          this.props.styleClass ? this.props.styleClass : 'project-links'
        }
      >
        <SectionHeading
          heading={'Project Links'}
          styleClass={'project-links-heading'}
        />
        <div className="project-links-buttons">
          {this.props.links.map((link) => {
            return <ExternalLinkButton linkTo={link.url} text={link.name} />;
          })}
        </div>
      </div>
    );
  }
}
