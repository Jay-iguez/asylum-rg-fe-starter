import React from 'react';
import { Image } from 'antd';
import { Link } from 'react-router-dom';
import Logo from '../../styles/Images/WhiteLogo.png';
import { colors } from '../../styles/data_vis_colors';

import IsAuthenticated from '../../auth/IsAuthenticated';

const { primary_accent_color } = colors;

function HeaderContent() {
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
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div style={{ borderBottom: '.1rem solid #E2F0F7' }}>
          <Link to="/" style={{ color: '#E2F0F7', paddingRight: '75px' }}>
            Home
          </Link>
          <Link to="/graphs" style={{ color: '#E2F0F7' }}>
            Graphs
          </Link>
        </div>
        <div style={{ width: '100%' }}>
          {/* Where profile is going to go upon authorization
          <Link to="/graphs" style={{ color: '#E2F0F7' }}>
            Profile
          </Link>
            */}
          <IsAuthenticated />
        </div>
      </div>
    </div>
  );
}

export { HeaderContent };
