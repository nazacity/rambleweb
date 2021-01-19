import { Button } from '@material-ui/core';
import React from 'react';
import ButtonRegister from './ButtonRegister';

const Banner = ({ activityDetail }) => {
  return (
    <div
      style={{
        height: 300,
        width: '100vw',
        position: 'relative',
      }}
    >
      <ButtonRegister absolute />
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
