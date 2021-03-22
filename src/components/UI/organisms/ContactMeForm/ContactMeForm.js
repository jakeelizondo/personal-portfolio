import React from 'react';
import './ContactMeForm.css';

export default function ContactMeForm() {
  return (
    <React.Fragment>
      <section className="contact-form-section">
        <h3 className="contact-form-heading">Contact me</h3>
        <div className="contact-header">
          <h4>
            Feel free to contact me through the form below or directly at{' '}
            <a href="mailto:jake.elizondo23@gmail.com">
              jake.elizondo23@gmail.com
            </a>
          </h4>
        </div>
        <form
          className="form-group"
          action="https://formspree.io/f/xyybpylb"
          method="POST"
        >
          <div className="contact-form-field">
            <label htmlFor="user-name-1">Your Name:</label>
            <input
              id="user-name-1"
              type="text"
              placeholder="Enter your full name"
              name="name"
              required
            />
          </div>
          <div className="contact-form-field">
            <label htmlFor="email-1">Your Email:</label>
            <input
              id="email-1"
              type="email"
              placeholder="name@host.com"
              name="_replyto"
              required
            />
          </div>
          <div className="contact-form-field">
            <label htmlFor="location-1">Phone:</label>
            <input
              id="location-1"
              type="tel"
              placeholder="555-555-5555"
              name="phone"
              required
            />
          </div>
          <div className="contact-form-field-text-area">
            <label htmlFor="textarea-1">Requests/Comments:</label>
            <textarea
              name="textarea-1"
              id="textarea-1"
              cols="30"
              rows="10"
              placeholder="Your message here"
            ></textarea>
          </div>
          <div className="contact-form-buttons">
            <button
              type="submit"
              name="submit"
              value="Send"
              className="contact-form-submit"
            >
              Submit
            </button>
            <button type="reset" className={'contact-form-reset'}>
              Reset
            </button>
          </div>
        </form>
      </section>
    </React.Fragment>
  );
}
