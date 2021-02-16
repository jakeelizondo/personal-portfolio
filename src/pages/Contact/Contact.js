import React from 'react';
import ContactInfoBarDark from '../../components/UI/molecules/ContactInfoBarDark/ContactInfoBarDark';
import ContactMeForm from '../../components/UI/organisms/ContactMeForm/ContactMeForm';
import './Contact.css';

export default class Contact extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <React.Fragment>
        <ContactMeForm />
        <ContactInfoBarDark />
      </React.Fragment>
    );
  }
}
