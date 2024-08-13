import React from 'react';

import LoadingComponent from '../../common/LoadingComponent';

import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';

function Profile() {
  const { user } = useAuth0();
  const { picture, email, name } = user;

  return (
    <div
      style={{
        height: '100%',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexFlow: 'column nowrap',
          marginLeft: '20%',
          marginRight: '20%',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexFlow: 'column nowrap',
            alignItems: 'center',
            margin: '1rem .5rem',
            backgroundColor: '#dae0e3',
            color: '#E2F0F7',
          }}
        >
          <h3
            style={{
              color: '#E2F0F7',
              backgroundColor: '#404c4a',
              fontWeight: 'bold',
              width: '100%',
              textAlign: 'center',
            }}
          >
            Profile
          </h3>
          <img
            src={picture}
            style={{
              width: '8rem',
              height: '8rem',
              paddingLeft: '.5rem',
              borderRadius: '50%',
            }}
            alt="profile pic"
          />
          <div style={{ margin: '.5rem 0' }}>
            <h3
              style={{
                color: '#3A3B3C',
                borderTop: '.1rem solid #404c4a',
                fontWeight: 'bold',
                paddingLeft: '.5rem',
                textAlign: 'center',
              }}
            >
              User -
            </h3>
            <h3
              style={{
                color: '#3A3B3C',
                borderBottom: '.2rem solid #404c4a',
                fontWeight: 'bold',
                paddingLeft: '.5rem',
              }}
            >
              {name}
            </h3>
          </div>
          <div style={{ margin: '.5rem 0' }}>
            <h3
              style={{
                color: '#3A3B3C',
                borderTop: '.1rem solid #404c4a',
                fontWeight: 'bold',
                paddingLeft: '.5rem',
                textAlign: 'center',
              }}
            >
              Email -
            </h3>
            <h3
              style={{
                color: '#3A3B3C',
                borderBottom: '.2rem solid #404c4a',
                fontWeight: 'bold',
                paddingLeft: '.5rem',
              }}
            >
              {email}
            </h3>
          </div>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexFlow: 'column nowrap',
          marginLeft: '20%',
          marginRight: '20%',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexFlow: 'column nowrap',
            alignItems: 'center',
            margin: '1rem .5rem',
            backgroundColor: '#dae0e3',
            color: '#E2F0F7',
          }}
        >
          <h3
            style={{
              color: '#E2F0F7',
              backgroundColor: '#404c4a',
              fontWeight: 'bold',
              width: '100%',
              textAlign: 'center',
            }}
          >
            Information
          </h3>
          <p
            style={{
              color: '#3A3B3C',
              borderBottom: '.2rem solid #404c4a',
              fontWeight: 'bold',
              paddingLeft: '.5rem',
              textAlign: 'center',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p
            style={{
              color: '#3A3B3C',
              borderBottom: '.2rem solid #404c4a',
              fontWeight: 'bold',
              paddingLeft: '.5rem',
              textAlign: 'center',
            }}
          >
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
