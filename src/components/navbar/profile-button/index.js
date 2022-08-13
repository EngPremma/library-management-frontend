import React, { useContext, useState } from 'react';
import { useTheme, Button, Popover, List, ListItem, ListItemText } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { IoPersonCircle } from 'react-icons/io5';

import { UserContext } from 'components/context-providers/user-context';

const ProfileButton = () => {
  const theme = useTheme();
  const { me, setMe } = useContext(UserContext);

  const history = useHistory();

  const [anchorProfile, setAnchorProfile] = useState(null);

  const handleOpenProfileMenu = event => setAnchorProfile(event.currentTarget);

  const handleCloseProfileMenu = () => setAnchorProfile(null);

  const handleLogout = async () => {
    localStorage.removeItem('access_token');
    setMe(null);
    history.push('/');
  };

  return (
    <div>
      <Button
        onClick={handleOpenProfileMenu}
        size="small"
        startIcon={<IoPersonCircle color={theme.palette.primary.main} size="2rem" />}
      >
        {`${me?.username}`}
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
        <List component="nav" dense style={{ width: '130px' }}>
          <ListItem button onClick={handleLogout}>
            <ListItemText primary="Logout" primaryTypographyProps={{ color: 'error' }} />
          </ListItem>
        </List>
      </Popover>
    </div>
  );
};

export default ProfileButton;
