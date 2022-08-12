import React from 'react';
import { Paper, Typography, Divider, useTheme, Container } from '@material-ui/core';

const FormWrapper = ({ title, children }) => {
  const theme = useTheme();

  return (
    <Container maxWidth='sm'>
      <Paper square style={{ padding: theme.spacing(3), marginTop: theme.spacing(3) }}>
        <Typography gutterBottom style={{ fontWeight: theme.typography.fontWeightBold }}>
          {title}
        </Typography>
        <Divider style={{ margin: `${theme.spacing(2)}px 0px` }} />
        {children}
      </Paper>
    </Container>
  );
};

export default FormWrapper;
