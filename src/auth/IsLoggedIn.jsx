import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const IsLoggedIn = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return isAuthenticated ? (
    <Link
      onClick={e => {
        e.preventDefault();
        logout();
      }}
      style={{ color: '#E2F0F7', margin: '0 .5rem' }}
    >
      Logout
    </Link>
  ) : (
    <Link
      onClick={e => {
        e.preventDefault();
        loginWithRedirect();
      }}
      style={{ color: '#E2F0F7', margin: '0 .5rem' }}
    >
      Login
    </Link>
  );
};

export default IsLoggedIn;
