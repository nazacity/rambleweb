import { Typography } from '@material-ui/core';
import React from 'react';

const Title = ({ activityDetail }) => {
  return (
    <div style={{ marginTop: 20 }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="h5" color="primary">
          {activityDetail.title}
        </Typography>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="h6" color="primary">
          {activityDetail.sub_title}
        </Typography>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="body1">{activityDetail.description}</Typography>
      </div>
    </div>
  );
};

export default Title;
