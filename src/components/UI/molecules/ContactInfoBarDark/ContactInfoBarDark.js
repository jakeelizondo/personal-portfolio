import React from 'react';
import ButtonExpanding from '../../atoms/ButtonExpanding/ButtonExpanding';
import ExternalLinkButton from '../../atoms/ExternalLinkButton/ExternalLinkButton';
import SectionHeading from '../../atoms/SectionHeading/SectionHeading';
import './ContactInfoBarDark.css';

export default function ContactInfoBarDark(props) {
  return (
    <section className="contact-section-dark">
      <SectionHeading
        heading={'Connect with me online'}
        styleClass={'contact-heading-dark'}
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
