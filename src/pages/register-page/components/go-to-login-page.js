import React from 'react';
import { Typography, Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

const GoToLoginPage = ({ navigateTo }) => {
  return (
    <Typography variant='body2' color='textSecondary' align='center' gutterBottom>
      Have an account?&nbsp;
      <Link component={RouterLink} to={navigateTo}>
        Login
      </Link>
    </Typography>
  );
};

export default GoToLoginPage;
