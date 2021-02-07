import React from 'react';
import { Link } from 'react-router-dom';

export default function () {
  return (
    <header className={'header'}>
      <h1>Jake Elizondo | Software Developer</h1>
      <nav>
        <ul>
          <li>
            <Link to={'/'}>Home </Link>
          </li>
          <li>
            <Link to={'/about-me'}>About Me</Link>
          </li>
          <li>
            <Link to={'/contact'}>Contact</Link>
          </li>
          <li>
            <Link to={'/projects'}>Projects</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
