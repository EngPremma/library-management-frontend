import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, makeStyles, IconButton, Link } from '@material-ui/core';
import { FcBriefcase } from 'react-icons/fc';
import { NavLink, Link as RouterLink } from 'react-router-dom';
import { UserContext } from 'components/context-providers/user-context';
import ProfileButton from 'components/navbar/profile-button';

const useStyles = makeStyles(theme => ({
  menuButton: { marginRight: theme.spacing(2) },
  title: { textDecoration: 'none', flex: 4 },
  activeTab: { color: 'black' },
  menu: { flex: 1, display: 'flex', justifyContent: 'flex-end' },
  menuItem: { marginRight: theme.spacing(2) },
}));

const NavBar = () => {
  const classes = useStyles();
  const { me } = useContext(UserContext);

  const loginButton = (
    <>
      <Link
        className={classes.menuItem}
        underline='none'
        color='textSecondary'
        component={NavLink}
        to='/login/job-seeker'
        activeClassName={classes.activeTab}
      >
        Job Seeker
      </Link>
      <Link
        underline='none'
        color='textSecondary'
        component={NavLink}
        to='/login/employer'
        activeClassName={classes.activeTab}
      >
        Employer
      </Link>
    </>
  );

  return (
    <AppBar position='sticky' color='transparent' elevation={0}>
      <Toolbar>
        <IconButton edge='start' className={classes.menuButton} component={RouterLink} to='/' as='hello'>
          <FcBriefcase />
        </IconButton>
        <Typography variant='h6' color='textPrimary' className={classes.title} component={RouterLink} to='/'>
          Job Finding
        </Typography>
        <div className={classes.menu}>{me ? <ProfileButton /> : loginButton}</div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
