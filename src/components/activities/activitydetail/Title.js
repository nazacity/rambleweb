import { Typography } from '@material-ui/core';
import React from 'react';

const Title = ({ activityDetail }) => {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="h4">{activityDetail.title}</Typography>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="h5">{activityDetail.sub_title}</Typography>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="body1" style={{ marginTop: 20 }}>
          {activityDetail.description}
        </Typography>
      </div>
    </div>
  );
};

export default Title;
