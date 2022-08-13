import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, makeStyles, Link } from '@material-ui/core';
import { NavLink, Link as RouterLink } from 'react-router-dom';
import { UserContext } from 'components/context-providers/user-context';
import ProfileButton from 'components/navbar/profile-button';

const useStyles = drawerWidth =>
  makeStyles(theme => ({
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    menuButton: { marginRight: theme.spacing(2) },
    title: { textDecoration: 'none', flex: 4 },
    activeTab: { color: 'black' },
    menu: { flex: 1, display: 'flex', justifyContent: 'flex-end' },
    menuItem: { marginRight: theme.spacing(2) },
  }));

const NavBar = ({ drawerWidth }) => {
  const classes = useStyles(drawerWidth)();
  const { me } = useContext(UserContext);

  const loginButton = (
    <Link
      className={classes.menuItem}
      underline="none"
      color="textSecondary"
      component={NavLink}
      to="/login/job-seeker"
      activeClassName={classes.activeTab}
    >
      login
    </Link>
  );

  return (
    <AppBar position="sticky" color="transparent" elevation={0} className={classes.appBar}>
      <Toolbar>
        <Typography
          variant="h6"
          color="textPrimary"
          className={classes.title}
          component={RouterLink}
          to="/"
        >
          Library Management
        </Typography>
        <div className={classes.menu}>{me ? <ProfileButton /> : loginButton}</div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
