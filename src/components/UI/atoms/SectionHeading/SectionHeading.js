import React from 'react';
import './SectionHeading.css';

export default function SectionHeading(props) {
  return <h2 className={props.styleClass}>{props.heading}</h2>;
}
