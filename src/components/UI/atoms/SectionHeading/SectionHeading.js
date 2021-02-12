import React from 'react';
import './SectionHeading.css';

export default function SectionHeading(props) {
  return <h2 className="section-heading">{props.heading}</h2>;
}
