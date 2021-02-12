import React from 'react';
import SectionHeading from '../../components/UI/atoms/SectionHeading/SectionHeading';
import ProjectBarDark from '../../components/UI/organisms/ProjectBarDark/ProjectBarDark';
import './AboutMe.css';

export default function () {
  return (
    <React.Fragment>
      <section className="about-section">
        <div className="about-group">
          <SectionHeading heading={'About Me'} styleClass={'about-heading'} />
          <div>
            <p>
              Before diving into software, I was responsible for leading and
              driving the growth of the digital marketing department of a
              startup advertising agency as we grew from three employees working
              in a living room, to an 18-person agency. While I enjoyed the
              opportunity to wear many hats in my role, I found myself most
              engaged when collaborating with our software vendor partners.
              Through my involvement in various product alphas and betas, as
              well as feedback calls with product managers, I discovered my
              interest in the technical challenges and iterative design process
              of software development. After a period of self-study, I decided
              to pursue this part-time passion full-time through the Thinkful
              Full-Stack Software Engineering program. I immersed myself in both
              frontend and backend web development and produced multiple
              projects demonstrating with the PERN stack. It is difficult to
              understate how much I learned about test-driven, full-stack
              development through this process, or how much fun I had!
            </p>
          </div>
        </div>
      </section>
      <ProjectBarDark />
    </React.Fragment>
  );
}
