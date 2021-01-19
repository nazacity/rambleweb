import { Typography } from '@material-ui/core';
import React from 'react';
import ReactMarkdown from 'react-markdown';

const Rules1 = ({ activityDetail }) => {
  return (
    <div style={{ margin: '10px auto' }}>
      <div style={{ display: 'flex' }}>
        <Typography variant="h6" color="primary">
          กฏ
        </Typography>
      </div>
      <ReactMarkdown source={activityDetail.rules1} />
    </div>
  );
};

export default Rules1;
