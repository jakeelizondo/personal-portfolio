import React from 'react';
import './Contact.css';

export default function () {
  return (
    <React.Fragment>
      <section className="contact-section">
        <div className="contact-header-group">
          <div className="contact-header-item">
            <a>
              <h2 className="dark-text" id="contact">
                Contact Me
              </h2>
            </a>
          </div>
        </div>
        <div className="contact-button-group div-hover">
          <div className="contact-button-item">
            <p className="button-text">
              <a href="https://www.linkedin.com/in/jakeelizondo/">LinkedIn</a>
            </p>
          </div>
          <div className="contact-button-item">
            <p className="button-text">
              <a href="https://github.com/jakeelizondo/">GitHub</a>
            </p>
          </div>
          <div className="contact-button-item">
            <p className="button-text">
              <a href="mailto:jake.elizondo23@gmail.com">Email</a>
            </p>
          </div>
        </div>
      </section>
      <section className="form-section contact-section-form">
        <h3 className="dark-text">Contact me through the form below!</h3>
        <div className="form-group">
          <form action="https://formspree.io/f/xyybpylb" method="POST">
            <div className="form-content-group">
              <div>
                <label for="user-name-1">Your Name:</label>
                <input
                  id="user-name-1"
                  type="text"
                  placeholder="Enter your full name"
                  name="name"
                  required
                />
              </div>
              <div>
                <label for="email-1">Your Email:</label>
                <input
                  id="email-1"
                  type="email"
                  placeholder="name@host.com"
                  name="_replyto"
                  required
                />
              </div>
              <div>
                <label for="location-1">Zip Code:</label>
                <input
                  id="location-1"
                  type="text"
                  placeholder="55555"
                  name="zipcode"
                  maxlength="5"
                  required
                />
              </div>
              <div>
                <label for="textarea-1">Requests/Comments:</label>
                <textarea
                  name="textarea-1"
                  id="textarea-1"
                  cols="30"
                  rows="10"
                  placeholder="Your message here"
                ></textarea>
              </div>
            </div>
            <div className="buttons">
              <div>
                <button
                  type="submit"
                  name="submit"
                  value="Send"
                  className="submit"
                >
                  Submit
                </button>
                <button type="reset">Reset</button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </React.Fragment>
  );
}
