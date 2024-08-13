import React from 'react';

import '../../../styles/components/Profile.less';

export function InformationContainer({ children }) {
  return <div className="information-container">{children}</div>;
}

export const Heading = props => {
  const { text } = props;

  return <h3 className="information-header">{text}</h3>;
};

export const SubHeading = props => {
  const { top_text, bottom_text } = props;

  return (
    <div className="information-sub-text-container">
      <h3 className="information-sub-top">{top_text}</h3>
      <h3 className="information-sub-bottom">{bottom_text}</h3>
    </div>
  );
};

export const Image = props => {
  const { photo, id, alt } = props;

  return <img src={photo} id={id} alt={alt} />;
};
