import { Button } from '@material-ui/core';
import React from 'react';

const Banner = ({ activityDetail }) => {
  return (
    <div
      style={{
        height: 300,
        width: '100vw',
        position: 'relative',
      }}
    >
      <Button
        style={{ position: 'absolute', bottom: 10, right: 10, width: 200 }}
        variant="contained"
        color="primary"
      >
        register
      </Button>
      <img
        style={{
          height: 300,
          width: '100vw',
        }}
        src={activityDetail.activity_picture_url}
        alt={activityDetail.title}
      />
    </div>
  );
};

export default Banner;
