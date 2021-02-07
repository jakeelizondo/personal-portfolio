import React from 'react';
import './AboutMe.css';

export default function () {
  return (
    <React.Fragment>
      <section className="intro-section">
        <img src="" alt="jake-elizondo-developer-pic" />
        <div className="intro-content">
          <h2 className="dark-text" id="intro">
            Hi, my name is Jake. Great to meet you!
          </h2>
          <p className="dark-text">
            I am a digital-marketer-turned-software-developer based out of
            Raleigh, North Carolina. My goal is to build intuitive tools that
            solve problems, designed with the end-user experience at the
            forefront. My digital marketing experience has made me passionate
            about designing websites that provide seamless experiences across
            devices and operating systems. Someone with an older model phone and
            3G connection deserves a positive user experience just as much as
            those with the newest iPhone and 5G access.
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="about-group">
          <div className="about-item">
            <h2 id="about-me">About Me</h2>
          </div>
          <div className="about-item">
            <p className="paragraph">
              I enjoy making, constructing, and building things. When using
              software applications or platforms, I find myself wondering how it
              was built and what features could be added or changed to improve
              the experience. I aim to build platforms that help other people
              accomplish their goals. I am drawn to the job structure, the
              community, the opportunities for ongoing education that software
              development has to offer. I thrive working in groups and teams
              (I’ve always preferred doubles tennis to singles!), and I look
              forward to having opportunities to collaborate, learn from others,
              and help those around me improve. I also believe that the
              community is at its best when working on collaborative,
              open-source projects. In my free time, I use many free platforms
              that are developed and maintained by a devoted community, such as
              Roll20 for Dungeons and Dragons online. It is a dream of mine to
              be able to give back to these communities and contribute to
              similar passion projects. The most important draw for me, however,
              is the opportunity and desire for lifelong learning. I want to
              work in a field where I am intrinsically motivated to learn and
              grow over time. I am confident that software development has all
              of the elements necessary for me to have a successful, satisfying
              career.
            </p>
          </div>
          <div className="about-item">
            <div>
              <h3>When I'm not coding, I like to:</h3>
            </div>
          </div>
          <div className="about-list">
            <div>
              <ol>
                <li>Rock Climb</li>
                <li>Play Dungeons & Dragons</li>
                <li>Read or listen to podcasts</li>
                <li>Watch Everton struggle in the Premier League</li>
                <li>Play video games or board games</li>
                <li>Ride my bike</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
