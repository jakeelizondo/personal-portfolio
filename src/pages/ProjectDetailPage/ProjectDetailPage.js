import React from 'react';
import ProjectIconRow from '../../components/UI/atoms/ProjectIconRow/ProjectIconRow';
import SmallContentSection from '../../components/UI/atoms/SmallContentSection/SmallContentSection';
import PROJECTS from '../../../src/PROJECTS';
import ProjectSkills from '../../components/UI/atoms/ProjectSkills/ProjectSkills';
import ProjectLinks from '../../components/UI/molecules/ProjectLinks/ProjectLinks';
import './ProjectDetailPage.css';
import giftClosetScreenshot from '../../assets/images/gift-closet-screenshot.PNG';

const screenShots = {
  'Gift Closet': giftClosetScreenshot,
};

export default class ProjectDetailPage extends React.Component {
  state = { project: {} };
  componentDidMount() {
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
          <ProjectIconRow projectName={project.name} />
          <SmallContentSection
            heading={'Project Description'}
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
