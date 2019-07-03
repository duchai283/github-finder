import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavBar = ({ icon, title }) => {
  return (
    <div className="navbar">
      <div className="box-logo">
        <i className={`${icon} box-logo__icon`} />
        {title}
      </div>
      <div className="navbar__right">
        <Link to="/" className="navbar__right-link">
          Home
        </Link>
        <Link to="/about" className="navbar__right-link">
          About
        </Link>
      </div>
    </div>
  );
};

NavBar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github'
};

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default NavBar;
