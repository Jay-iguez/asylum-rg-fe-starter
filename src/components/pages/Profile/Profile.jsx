import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';

function Profile() {
  const { user } = useAuth0();
  const { name, picture, email } = user;

  return <h1>dog</h1>;
}

export default Profile;
