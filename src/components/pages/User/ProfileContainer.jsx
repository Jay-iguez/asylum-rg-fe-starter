import React from 'react';

import '../../../styles/components/Profile.less';

import { useAuth0 } from '@auth0/auth0-react';

import {
  InformationContainer,
  Heading,
  SubHeading,
  Image,
  Text,
} from './InformationComponent';

const InnerContainer = ({ children }) => {
  return <div className="profile-inner-container">{children}</div>;
};

function ProfileContainer() {
  const { user } = useAuth0();
  const { name, email, picture } = user;

  return (
    <div id="profile-container">
      <InnerContainer>
        <InformationContainer>
          <Heading text="Profile" />
          <Image
            photo={picture}
            id="information-profile-image"
            alt="profile image"
          />
          <SubHeading top_text="User" bottom_text={name} />
          <SubHeading top_text="Email" bottom_text={email} />
        </InformationContainer>
      </InnerContainer>
      <InnerContainer>
        <InformationContainer>
          <Heading text="Information" />
          <Text
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          />
          <Text
            text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          />
        </InformationContainer>
      </InnerContainer>
    </div>
  );
}

export default ProfileContainer;
