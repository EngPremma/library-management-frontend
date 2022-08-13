import React from 'react';
import { makeStyles, Drawer, List, ListItem, ListItemText, useTheme } from '@material-ui/core';
import { Link, NavLink } from 'react-router-dom';

import menuItems from './menu-items';

const useStyles = drawerWidth =>
  makeStyles(theme => ({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
  }));

const DrawerMenu = ({ drawerWidth }) => {
  const classes = useStyles(drawerWidth)();
  const theme = useTheme();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      <div className={classes.toolbar} />
      <List>
        {menuItems.map((menu, index) => (
          <ListItem
            button
            key={index}
            component={NavLink}
            exact
            activeStyle={{
              color: theme.palette.primary.main,
              background: theme.palette.primary.light,
            }}
            to={menu.to}
          >
            <ListItemText primary={menu.label} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default DrawerMenu;
