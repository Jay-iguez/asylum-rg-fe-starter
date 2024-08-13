import React from 'react';
import { Image } from 'antd';
import { Link } from 'react-router-dom';
import Logo from '../../styles/Images/WhiteLogo.png';
import { colors } from '../../styles/data_vis_colors';

import IsLoggedIn from '../../auth/IsLoggedIn';

import { useAuth0 } from '@auth0/auth0-react';

const { primary_accent_color } = colors;

function HeaderContent() {
  const { isAuthenticated } = useAuth0();

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: primary_accent_color,
      }}
    >
      <div className="hrf-logo">
        <a href="https://www.humanrightsfirst.org/">
          <Image width={100} src={Logo} preview={false} alt="HRF logo white" />
        </a>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        {isAuthenticated ? (
          <>
            <Link to="/profile" style={{ color: '#E2F0F7', margin: '0 .5rem' }}>
              Profile
            </Link>
            <div
              style={{
                color: '#E2F0F7',
                margin: '0 .5rem',
                marginLeft: '.5rem',
              }}
            >
              |
            </div>
          </>
        ) : null}
        <Link to="/" style={{ color: '#E2F0F7', margin: '0 .5rem' }}>
          Home
        </Link>
        <Link to="/graphs" style={{ color: '#E2F0F7', margin: '0 .5rem' }}>
          Graphs
        </Link>
        <IsLoggedIn />
      </div>
    </div>
  );
}

export { HeaderContent };
