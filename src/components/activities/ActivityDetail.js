import { Avatar, Typography } from '@material-ui/core';
import React from 'react';
import ModalImage from 'react-modal-image';

const Activity = ({ activityDetail }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 20,
      }}
    >
      <div
        style={{
          height: 200,
          width: 300,
          borderRadius: 10,
          overflow: 'hidden',
        }}
      >
        <ModalImage
          style={{
            height: 200,
            width: 300,
            borderRadius: 20,
          }}
          small={activityDetail.activity_picture_url}
          large={activityDetail.activity_picture_url}
        />
      </div>
    </div>
  );
};

export default Activity;
