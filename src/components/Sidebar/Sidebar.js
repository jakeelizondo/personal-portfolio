import React from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  render() {
    return (
      <Menu
        className={'header-links'}
        width={'50%'}
        isOpen={this.state.menuOpen}
        onStateChange={(state) => this.handleStateChange(state)}
      >
        <Link className={'menu-item'} onClick={() => this.closeMenu()} to={'/'}>
          Home{' '}
        </Link>

        <Link
          className={'menu-item'}
          onClick={() => this.closeMenu()}
          to={'/projects'}
        >
          Projects
        </Link>

        <Link
          className={'menu-item'}
          onClick={() => this.closeMenu()}
          to={'/about-me'}
        >
          About Me
        </Link>

        <Link
          className={'menu-item'}
          onClick={() => this.closeMenu()}
          to={'/contact'}
        >
          Contact
        </Link>
      </Menu>
    );
  }
}
