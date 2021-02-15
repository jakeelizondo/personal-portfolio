import React from 'react';
import ExternalLinkButton from '../../atoms/ExternalLinkButton/ExternalLinkButton';
import SectionHeading from '../../atoms/SectionHeading/SectionHeading';
import './ContactInfoBar.css';

export default function ContactInfoBar(props) {
  return (
    <section className="contact-section">
      <SectionHeading
        heading={'Connect with me online'}
        styleClass={'contact-heading'}
      />
      <div className="contact-button-group">
        <ExternalLinkButton
          text={'LinkedIn'}
          linkTo={'https://www.linkedin.com/in/jakeelizondo/'}
        />
        <ExternalLinkButton
          text={'Github'}
          linkTo={'https://github.com/jakeelizondo/'}
        />
      </div>
    </section>
  );
}
