import React from 'react';
import ButtonExpanding from '../../atoms/ButtonExpanding/ButtonExpanding';
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
