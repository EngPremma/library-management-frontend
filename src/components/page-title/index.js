import React from 'react';
import { Box, Typography, Button } from '@material-ui/core';

const PageTitle = ({ title, onClick, buttonLabel }) => {
  return (
    <Box my={2} display="flex" justifyContent="space-between" alignItems="center">
      <Typography variant="h5">{title}</Typography>
      {buttonLabel && (
        <Button color="primary" variant="contained" size="small" onClick={onClick}>
          {buttonLabel}
        </Button>
      )}
    </Box>
  );
};

export default PageTitle;
