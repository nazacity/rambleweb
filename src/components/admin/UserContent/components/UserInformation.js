import React from 'react';
import { Avatar, Typography } from '@material-ui/core';
import moment from 'moment';
import 'moment/locale/th';
moment.locale('th');

const UserInformation = ({ user }) => {
  return (
    <div>
      <div style={{ display: 'flex' }}>
        <Avatar
          src={user.user_picture_url}
          style={{ width: 300, height: 300 }}
        />
        <div style={{ marginLeft: 20 }}>
          <Typography variant="h5">
            {user.first_name} {user.last_name}
          </Typography>
          <Typography variant="h5">{user.gender}</Typography>
          <Typography variant="h5">
            {moment(user.birthday).format('DD MMM YYYY')}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default UserInformation;
