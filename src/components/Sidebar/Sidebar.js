import React from 'react';
import { Link } from 'react-router-dom';
import { reveal as Menu } from 'react-burger-menu';
import './Sidebar.css';

export default function () {
  return (
    <Menu className={'header-links'}>
      <Link className={'menu-item'} to={'/'}>
        Home{' '}
      </Link>

      <Link className={'menu-item'} to={'/projects'}>
        Projects
      </Link>

      <Link className={'menu-item'} to={'/about-me'}>
        About Me
      </Link>

      <Link className={'menu-item'} to={'/contact'}>
        Contact
      </Link>
    </Menu>
  );
}
