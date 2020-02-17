import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

/**
 * Global navigation header
 * @param {Object} props Passed props
 * @param {string} props.logo Logo URL
 */
const Header = ({ logo }) => (
  <header>
    <NavLink id="logo" to="/">
      <div>
        <img src={logo} alt="logo" />
      </div>
    </NavLink>

    <nav>
      <ul>
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/login">
            Sign In
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  logo: PropTypes.string.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

export default Header;
