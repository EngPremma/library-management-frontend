import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

const CustomScrollBar = ({ children }) => {
  return (
    <Scrollbars autoHide style={{ width: '100%', heigh: '100%' }}>
      {children}
    </Scrollbars>
  );
};

export default CustomScrollBar;
