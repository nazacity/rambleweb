import { Typography } from '@material-ui/core';
import React from 'react';

const Size = ({ activityDetail }) => {
  return (
    <div style={{ margin: '20px 0' }}>
      <div style={{ display: 'flex' }}>
        <Typography variant="h4">ไซส์เสื้อ</Typography>
      </div>
      {activityDetail.size.map((size, index) => {
        return (
          <div key={index}>
            <Typography>
              {size.size} {size.description}
            </Typography>
          </div>
        );
      })}
    </div>
  );
};

export default Size;
