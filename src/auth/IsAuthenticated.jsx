import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const AuthNav = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return isAuthenticated ? (
    <Link
      onClick={e => {
        e.preventDefault();
        logout();
      }}
      style={{ color: '#E2F0F7', float: 'right' }}
    >
      Logout
    </Link>
  ) : (
    <Link
      onClick={e => {
        e.preventDefault();
        loginWithRedirect();
      }}
      style={{ color: '#E2F0F7', float: 'right' }}
    >
      Login
    </Link>
  );
};

export default AuthNav;
