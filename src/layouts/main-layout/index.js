import React from 'react';
import NavBar from 'components/navbar';
import { Container, makeStyles } from '@material-ui/core';
import CustomScrollBar from 'components/custom-scrollbar';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    height: '100vh',
    flexDirection: 'column',
  },
  content: { flexGrow: 1 },
}));

const MainLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavBar />
      <div className={classes.content}>
        <CustomScrollBar>
          <Container>{children}</Container>
        </CustomScrollBar>
      </div>
    </div>
  );
};

export default MainLayout;
