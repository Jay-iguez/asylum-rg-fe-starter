import React from 'react';

import '../../../styles/components/Profile.less';

import { useAuth0 } from '@auth0/auth0-react';

export function InformationContainer({ children }) {
  return <div className="information-container">{children}</div>;
}

export default InformationContainer;
