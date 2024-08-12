import PropTypes from 'prop-types';
import React from 'react';

import LoadingWheelSvg from '../icons/spinner-of-dots-svgrepo-com.svg';

function LoadingComponent(props) {
  const { message } = props;

  const spinSvgStyle = {
    height: '5rem',
    width: '5rem',
    animation: 'spin 5s infinite linear',
    '@keyframes spin': {
      from: {
        transform: 'rotate(-360deg)',
      },
      to: {
        transform: 'rotate(360deg)',
      },
    },
  };

  return (
    <div
      style={{
        textAlign: 'center',
        display: 'flex',
        flexFlow: 'column nowrap',
        alignItems: 'center',
      }}
    >
      <p>{message}</p>
      <img style={spinSvgStyle} src={LoadingWheelSvg} alt="Loading Wheel" />
    </div>
  );
}

export default LoadingComponent;

LoadingComponent.propTypes = {
  message: PropTypes.string.isRequired,
};
