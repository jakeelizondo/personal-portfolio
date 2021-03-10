import React from 'react';
import './ExternalLinkButton.css';

export default function ExternalLinkButton(props) {
  return (
    <button className="external-button">
      {props.linkTo && (
        <a href={props.linkTo} target="_blank" rel="noopener noreferrer">
          {props.text}
        </a>
      )}
      {!props.linkTo && props.text}
    </button>
  );
}
