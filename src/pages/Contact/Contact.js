import React from 'react';
import ContactInfoBarDark from '../../components/UI/molecules/ContactInfoBarDark/ContactInfoBarDark';
import ContactMeForm from '../../components/UI/organisms/ContactMeForm/ContactMeForm';
import ProjectBarLight from '../../components/UI/organisms/ProjectBarLight/ProjectBarLight';
import './Contact.css';

export default function () {
  return (
    <React.Fragment>
      <ContactMeForm />
      <ContactInfoBarDark />
    </React.Fragment>
  );
}
