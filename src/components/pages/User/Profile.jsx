import React from 'react';

import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';

function Profile() {
  const { user } = useAuth0();
  const { name, picture, email } = user;

  return (
    <>
      <p>{name}</p>
      <img src={picture} alt="profile pic" />
      <p>{email}</p>
    </>
  );
}

export default withAuthenticationRequired(Profile, {
  onRedirecting: () => <p>what.....</p>,
});
