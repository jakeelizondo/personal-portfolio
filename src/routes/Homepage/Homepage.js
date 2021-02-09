import React from 'react';
import './Homepage.css';
import profPic from '../../../src/images/profile-pic.jpg';

export default function () {
  return (
    <React.Fragment>
      <section className={'headline'}>
        <div>
          <h1>Hey, I'm Jake.</h1>
        </div>
        <div>
          <h2>Let's build something together.</h2>
        </div>
      </section>
      <section className="intro-section">
        <img src={profPic} alt="jake-elizondo-developer-pic" />
        <div className="intro-content">
          <p className="dark-text">
            I am a digital-marketer-turned-software-developer based out of Palo
            Alto, CA. I build intuitive tools that solve problems, designed with
            the end-user experience at the forefront. My digital marketing
            experience has made me passionate about designing websites that
            provide seamless experiences across devices and operating systems.
          </p>
        </div>
      </section>
    </React.Fragment>
  );
}
