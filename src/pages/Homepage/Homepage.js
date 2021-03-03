import React from 'react';
import './Homepage.css';
import profPic from '../../assets/images/jake_elizondo_headshot.jpg';
import ProjectBar from '../../components/UI/organisms/ProjectBarDark/ProjectBarDark';
import ContactInfoBar from '../../components/UI/molecules/ContactInfoBar/ContactInfoBar';
import ContactMeFormDark from '../../components/UI/organisms/ContactMeFormDark/ContactMeFormDark';

export default class Homepage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <React.Fragment>
        <section className="intro-section">
          <img src={profPic} alt="jake-elizondo-developer-pic" />
          <div className="intro-content">
            <div className={['headline', 'dark-text'].join(' ')}>
              <div>
                <h1>Hey, I'm Jake.</h1>
              </div>
              <div>
                <h2>Let's build something together.</h2>
              </div>
            </div>
            <p className="dark-text">
              I am a digital-marketer-turned-software-developer based out of
              Palo Alto, CA. I build intuitive tools that solve problems,
              designed with the end-user experience at the forefront.
            </p>
          </div>
        </section>
        <ProjectBar
          projectCardStyle={'project'}
          headingStyle={'project-header'}
        />
        <ContactInfoBar />
        <ContactMeFormDark />
      </React.Fragment>
    );
  }
}
