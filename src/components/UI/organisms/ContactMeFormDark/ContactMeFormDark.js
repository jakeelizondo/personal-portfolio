import React from 'react';
import './ContactMeFormDark.css';

export default function ContactMeFormDark() {
  return (
    <React.Fragment>
      <section className="contact-form-section-dark">
        <h3 className="contact-form-heading-dark">Contact me</h3>
        <form
          className="form-group-dark"
          action="https://formspree.io/f/xyybpylb"
          method="POST"
        >
          <div className="contact-form-field">
            <label for="user-name-1">Your Name:</label>
            <input
              id="user-name-1"
              type="text"
              placeholder="Enter your full name"
              name="name"
              required
            />
          </div>
          <div className="contact-form-field">
            <label for="email-1">Your Email:</label>
            <input
              id="email-1"
              type="email"
              placeholder="name@host.com"
              name="_replyto"
              required
            />
          </div>
          <div className="contact-form-field">
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
          <div className="contact-form-field-text-area">
            <label for="textarea-1">Requests/Comments:</label>
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
