import React, { useContext, useState } from 'react';
import { useTheme, Button, Popover, List, ListItem, ListItemText } from '@material-ui/core';
import { Link as RouterLink, useLocation, useHistory } from 'react-router-dom';
import { IoPersonCircle } from 'react-icons/io5';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import { UserContext } from 'components/context-providers/user-context';

const ProfileButton = () => {
  const theme = useTheme();
  const { me, setMe } = useContext(UserContext);
  const location = useLocation();
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();

  const [anchorProfile, setAnchorProfile] = useState(null);

  const handleOpenProfileMenu = event => setAnchorProfile(event.currentTarget);

  const handleCloseProfileMenu = () => setAnchorProfile(null);

  const handleLogout = async () => {
    try {
      await axios.post(`${process.env.REACT_APP_NODE_API}/api/auth/logout`);
      setMe(null);
      handleCloseProfileMenu();
      history.push('/');
      enqueueSnackbar('You are logout', { variant: 'info' });
    } catch (error) {
      console.log('error logout', error);
      if (error?.response) return enqueueSnackbar(error?.response?.data?.message, { variant: 'error' });
      enqueueSnackbar('Error logout', { variant: 'error' });
    }
  };

  return (
    <div>
      <Button
        onClick={handleOpenProfileMenu}
        size='small'
        startIcon={<IoPersonCircle color={theme.palette.primary.main} size='2rem' />}
      >
        {`${me?.firstname} ${me?.lastname}`}
      </Button>
      <Popover
        anchorEl={anchorProfile}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={Boolean(anchorProfile)}
        onClose={handleCloseProfileMenu}
      >
        <List component='nav' dense style={{ width: '130px' }}>
          <ListItem
            button
            to='/dashboard/my-profile'
            component={RouterLink}
            selected={location.pathname === '/dashboard/my-profile' ? true : false}
            onClick={handleCloseProfileMenu}
          >
            <ListItemText primary='My profile' primaryTypographyProps={{ variant: 'body2' }} />
          </ListItem>
          <ListItem button onClick={handleLogout}>
            <ListItemText primary='Logout' />
          </ListItem>
        </List>
      </Popover>
    </div>
  );
};

export default ProfileButton;
