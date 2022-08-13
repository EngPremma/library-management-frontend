import React from 'react';
import NavBar from 'components/navbar';
import DrawerMenu from 'components/drawer';
import { Container, makeStyles } from '@material-ui/core';
import CustomScrollBar from 'components/custom-scrollbar';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    height: '100vh',
    flexDirection: 'column',
  },
  content: { flexGrow: 1, marginLeft: drawerWidth },
}));

const MainLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavBar drawerWidth={drawerWidth} />
      <DrawerMenu drawerWidth={drawerWidth} />
      <main className={classes.content}>
        <CustomScrollBar>
          <Container>{children}</Container>
        </CustomScrollBar>
      </main>
    </div>
  );
};

export default MainLayout;
