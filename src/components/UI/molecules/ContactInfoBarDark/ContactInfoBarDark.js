import React from 'react';
import ButtonExpanding from '../../atoms/ButtonExpanding/ButtonExpanding';
import SectionHeading from '../../atoms/SectionHeading/SectionHeading';
import './ContactInfoBarDark.css';

export default function ContactInfoBarDark(props) {
  return (
    <section className="contact-section">
      <SectionHeading
        heading={'Connect with me online'}
        styleClass={'contact-heading'}
      />
      <div className="contact-button-group">
        <ButtonExpanding
          text={'LinkedIn'}
          linkTo={'https://www.linkedin.com/in/jakeelizondo/'}
        />
        <ButtonExpanding
          text={'Github'}
          linkTo={'https://github.com/jakeelizondo/'}
        />
      </div>
    </section>
  );
}
