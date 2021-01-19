import React from 'react';
import { Typography } from '@material-ui/core';
import TimelineDisplay from './TimelineDisplay';

const TimelineForm = ({ activityDetail }) => {
  return (
    <div style={{ margin: '10px auto' }}>
      <div style={{ display: 'flex' }}>
        <Typography variant="h6" color="primary">
          รายละเอียดกำหนดการ
        </Typography>
      </div>
      <TimelineDisplay data={activityDetail.timeline} />
    </div>
  );
};

export default TimelineForm;
