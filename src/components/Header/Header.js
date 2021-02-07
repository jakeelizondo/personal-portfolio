import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function () {
  return (
    <header>
      <h1>Jake Elizondo | Software Developer</h1>
      <nav className={'header-links'}>
        <ul>
          <li>
            <Link to={'/'}>Home </Link>
          </li>
          <li>
            <Link to={'/projects'}>Projects</Link>
          </li>
          <li>
            <Link to={'/about-me'}>About Me</Link>
          </li>
          <li>
            <Link to={'/contact'}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
