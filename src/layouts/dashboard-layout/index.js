import React from 'react';
import { makeStyles, Grid, Paper } from '@material-ui/core';

import DashboardMenu from 'components/dashboard-menu';

const useStyles = makeStyles(theme => ({
  root: { marginTop: theme.spacing(2) },
  menusContainer: {},
  childrenContainer: {
    padding: theme.spacing(2),
  },
}));

const DashboardLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={4} className={classes.menusContainer}>
        <DashboardMenu />
      </Grid>
      <Grid item xs={8}>
        <Paper className={classes.childrenContainer}>{children}</Paper>
      </Grid>
    </Grid>
  );
};

export default DashboardLayout;
