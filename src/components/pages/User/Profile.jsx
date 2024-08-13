import React from 'react';

import '../../../styles/components/Profile.less';

import LoadingComponent from '../../common/LoadingComponent';

import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';

function Profile() {
  const { user } = useAuth0();
  const { picture, email, name } = user;

  return (
    <div id="profile-container">
      <div className="profile-inner-container">
        <div className="information-container">
          <h3 className="information-header">Profile</h3>
          <img src={picture} id="information-profile-image" alt="profile pic" />
          <div className="information-sub-text-container">
            <h3 className="information-sub-top">User -</h3>
            <h3 className="information-sub-bottom">{name}</h3>
          </div>
          <div className="information-sub-text-container">
            <h3 className="information-sub-top">Email -</h3>
            <h3 className="information-sub-bottom">{email}</h3>
          </div>
        </div>
      </div>
      <div className="profile-inner-container">
        <div className="information-container">
          <h3 className="information-header">Information</h3>
          <p className="information-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="information-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default withAuthenticationRequired(Profile, {
  onRedirecting: () => <LoadingComponent message={'Redirecting to login...'} />,
});
