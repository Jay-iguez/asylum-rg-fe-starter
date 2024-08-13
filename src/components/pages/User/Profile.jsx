import React from 'react';

import LoadingComponent from '../../common/LoadingComponent';
import ProfileContainer from './ProfileContainer';

import { withAuthenticationRequired } from '@auth0/auth0-react';

function Profile() {
  return <ProfileContainer />;
}

export default withAuthenticationRequired(Profile, {
  onRedirecting: () => <LoadingComponent message={'Redirecting to login...'} />,
});
