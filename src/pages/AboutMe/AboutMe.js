import React from 'react';
import SectionHeading from '../../components/UI/atoms/SectionHeading/SectionHeading';
import ProjectBarDark from '../../components/UI/organisms/ProjectBarDark/ProjectBarDark';
import './AboutMe.css';

export default class AboutMe extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <React.Fragment>
        <section className="about-section dark-text">
          <div className="about-group">
            <SectionHeading heading={'About Me'} styleClass={'about-heading'} />
            <div className="about-content">
              <p>
                Before diving into software, I was responsible for leading and
                driving the growth of the digital marketing department of a
                startup advertising agency that I helped found. Over 4 years we
                grew from three employees working in a living room, to an
                18-person agency. While I enjoyed the opportunity to wear many
                hats in my role, I found myself most engaged when collaborating
                with our software vendor partners. Through my involvement in
                various product alphas and betas, as well as feedback calls with
                product managers, I discovered my interest in the technical
                challenges and iterative design process of software development.
                After a period of self-study, I decided to pursue this part-time
                passion full-time. I am now working as a software engineer and
                continuing to build on my skills and discover new tools and
                technologies I can use to improve my work.{' '}
              </p>
              <img
                className="about-image"
                src={
                  'https://res.cloudinary.com/dyz6qaw5e/image/upload/v1616428433/portfolio/IMG_E2462_oi718c.webp'
                }
                alt="jake-rock-climbing"
              />
              <p>
                When I'm not writing code I can be found watching Everton games
                pre-dawn on Saturdays (thanks west coast time zone) or hiking
                and rock climbing, playing tennis, just enjoying being outdoors
                in general. If the weather is bad then I'm likely reading,
                playing some new overly complicated niche board game or questing
                in Azeroth or a homebrewed DND campaign.
              </p>
            </div>
          </div>
        </section>
        <ProjectBarDark />
      </React.Fragment>
    );
  }
}
