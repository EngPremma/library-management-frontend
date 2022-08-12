import React from 'react';
import { Box } from '@material-ui/core';

const Spacer = ({ margin = '1rem' }) => {
  return <Box my={margin}></Box>;
};

export default Spacer;
