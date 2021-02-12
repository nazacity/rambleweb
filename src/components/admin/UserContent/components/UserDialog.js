import React from 'react';

import {
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Slide,
  Avatar,
  Button,
} from '@material-ui/core';
import { Close } from '@material-ui/icons';
import UserInformation from './UserInformation';
import UserIdentity from './UserIdentity';
import UserVaccine from './UserVaccine';
import { space } from 'styled-system';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const UserDialog = ({
  open,
  handleClose,
  user,
  setUser,
  partners,
  setPartners,
}) => {
  console.log(user);
  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <AppBar style={{ position: 'relative' }}>
        <Toolbar>
          <Avatar src={user.user_picture_url} />
          <Typography
            variant="h6"
            style={{
              marginLeft: 20,
              flex: 1,
            }}
          >
            {user.first_name}
            {user.last_name}
          </Typography>

          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <Close />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: 20,
        }}
      >
        <div>
          <UserInformation user={user} />
        </div>
        <div>
          <UserIdentity
            user={user}
            setUser={setUser}
            partners={partners}
            setPartners={setPartners}
          />
          <UserVaccine
            user={user}
            setUser={setUser}
            partners={partners}
            setPartners={setPartners}
          />
        </div>
      </div>
    </Dialog>
  );
};

export default UserDialog;
