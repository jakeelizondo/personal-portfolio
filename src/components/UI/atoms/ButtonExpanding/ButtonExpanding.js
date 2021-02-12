import React from 'react';
import './ButtonExpanding.css';
import { Link } from 'react-router-dom';

export default function ButtonExpanding(props) {
  return (
    <button className="button-expanding">
      {props.linkTo && <Link to={props.linkTo}>{props.text}</Link>}
      {!props.linkTo && props.text}
    </button>
  );
}
