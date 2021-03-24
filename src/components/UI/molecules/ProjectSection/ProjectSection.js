import React, { Component } from 'react';
import giftClosetScreenshot from '../../../../assets/images/gift-closet-screenshot.PNG';
import itemVaultScreenshot from '../../../../assets/images/item-vault-screenshot.PNG';
import eplNewsScreenshot from '../../../../assets/images/epl-news-screenshot-large.PNG';
import ProjectIconRow from '../../atoms/ProjectIconRow/ProjectIconRow';
import spanishYourWayScreenshot from '../../../../assets/images/spanish-your-way-screenshot.PNG';
import SmallContentSection from '../../atoms/SmallContentSection/SmallContentSection';
import ProjectSkills from '../../atoms/ProjectSkills/ProjectSkills';
import ProjectLinks from '../../molecules/ProjectLinks/ProjectLinks';
import './ProjectSection.css';

const screenShots = {
  'Gift Closet': giftClosetScreenshot,
  'The Item Vault': itemVaultScreenshot,
  'My EPL News': eplNewsScreenshot,
  'Spanish Your Way': spanishYourWayScreenshot,
};

export default class ProjectSection extends Component {
  render() {
    let projectDark = 'project-section dark-back';
    return (
      <div
        className={
          this.props.project.id % 2 === 0 ? projectDark : 'project-section'
        }
      >
        <section className="project-section-content">
          <ProjectIconRow
            project={this.props.project}
            styleClass={'project-section-icons'}
          />
          <SmallContentSection
            heading={'Project Description'}
            styleClass={'project-section-description'}
            content={this.props.project.description}
          />
          <ProjectSkills
            iconNames={this.props.project.skills}
            styleClass={'project-section-skills'}
          />
          <ProjectLinks
            links={this.props.project.links}
            styleClass={'project-section-links'}
          />
        </section>
        <div className="project-section-screenshot">
          <img
            src={screenShots[this.props.project.name]}
            alt="project-screenshot"
          />
        </div>
      </div>
    );
  }
}
