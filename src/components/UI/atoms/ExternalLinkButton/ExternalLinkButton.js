import React from 'react';
import './ExternalLinkButton.css';

export default function ExternalLinkButton(props) {
  return (
    <button className="external-button">
      {props.linkTo && <a href={props.linkTo}>{props.text}</a>}
      {!props.linkTo && props.text}
    </button>
  );
}
