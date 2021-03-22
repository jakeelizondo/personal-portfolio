import React from 'react';
import ProjectIconRow from '../../components/UI/atoms/ProjectIconRow/ProjectIconRow';
import SmallContentSection from '../../components/UI/atoms/SmallContentSection/SmallContentSection';
import PROJECTS from '../../../src/PROJECTS';
import ProjectSkills from '../../components/UI/atoms/ProjectSkills/ProjectSkills';
import ProjectLinks from '../../components/UI/molecules/ProjectLinks/ProjectLinks';
import './ProjectDetailPage.css';
import giftClosetScreenshot from '../../assets/images/gift-closet-screenshot.PNG';
import itemVaultScreenshot from '../../assets/images/item-vault-screenshot.PNG';
import eplNewsScreenshot from '../../assets/images/epl-news-screenshot-large.PNG';
import spanishYourWayScreenshot from '../../assets/images/spanish-your-way-screenshot.PNG';

const screenShots = {
  'Gift Closet': giftClosetScreenshot,
  'The Item Vault': itemVaultScreenshot,
  'My EPL News': eplNewsScreenshot,
  'Spanish Your Way': spanishYourWayScreenshot,
};

export default class ProjectDetailPage extends React.Component {
  state = { project: {} };
  componentDidMount() {
    window.scrollTo(0, 0);
    let project = PROJECTS.find((project) => {
      return project.id === Number(this.props.match.params.id);
    });
    this.setState({ project });
  }

  render() {
    let project = this.state.project;
    return (
      <React.Fragment>
        <section className="project-display">
          <ProjectIconRow project={project} />
          <SmallContentSection
            heading={'Project Description'}
            styleClass={'project-description-section'}
            content={project.description}
          />
          <ProjectSkills iconNames={project.skills} />
          <ProjectLinks links={project.links} />
        </section>
        <div className="project-display-screenshot">
          <img src={screenShots[project.name]} />
        </div>
      </React.Fragment>
    );
  }
}
