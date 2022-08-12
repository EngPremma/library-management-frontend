import React from 'react';
import { List, ListItem, ListItemText, useTheme, Paper } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { tabs } from 'routes/private-routes';

const DashboardMenu = () => {
  const theme = useTheme();

  return (
    <Paper>
      <List disablePadding>
        <ListItem
          style={{
            marginBottom: theme.spacing(1),
            background: theme.palette.primary.main,
            color: theme.palette.common.white,
            textTransform: 'capitalize',
          }}
        >
          <ListItemText primary='Menu' />
        </ListItem>
        {tabs.map(tab => (
          <ListItem
            key={tab.path}
            button
            component={NavLink}
            to={tab.path}
            activeStyle={{ color: theme.palette.primary.main, background: theme.palette.primary.light }}
          >
            <ListItemText primary={tab.title} style={{ textTransform: 'capitalize' }} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default DashboardMenu;
