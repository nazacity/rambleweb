import { Typography } from '@material-ui/core';
import React from 'react';

const Size = ({ activityDetail }) => {
  return (
    <div style={{ margin: '10px 0' }}>
      <div style={{ display: 'flex' }}>
        <Typography variant="h6">ไซส์เสื้อ</Typography>
      </div>
      {activityDetail.size.map((size, index) => {
        return (
          <div key={index}>
            <Typography variant="body1">
              {size.size} {size.description}
            </Typography>
          </div>
        );
      })}
    </div>
  );
};

export default Size;
