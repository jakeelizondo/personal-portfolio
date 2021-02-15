import React from 'react';
import SectionHeading from '../SectionHeading/SectionHeading';

export default function SmallContentSection(props) {
  return (
    <div>
      <SectionHeading
        styleClass={'small-content-section-heading'}
        heading={props.heading}
      />
      <p>{props.content}</p>
    </div>
  );
}
