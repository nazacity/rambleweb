import { Button } from '@material-ui/core';
import Link from 'Link';
import React from 'react';
import ButtonRegister from './ButtonRegister';
import lineLogo from '../../../../public/assets/button/linebutton.png';

const Banner = ({ activityDetail, buttonOnClick, userActivity }) => {
  return (
    <div
      style={{
        height: 300,
        width: '100vw',
        position: 'relative',
      }}
    >
      <Link
        href={`https://social-plugins.line.me/lineit/share?url=https%3A%2F%2Fliff.line.me%2F1655591354-8d5Zzbm5%3Factivity%3D${activityDetail._id}`}
      >
        <Button
          style={{
            color: '#fff',
            position: 'absolute',
            top: 20,
            right: 20,
            backgroundColor: '#00C300',
            padding: '0 20px',
          }}
        >
          <img src={lineLogo} style={{ width: 30, height: 30 }} />
          แชร์
        </Button>
      </Link>

      <ButtonRegister
        absolute
        onClick={buttonOnClick}
        userActivity={userActivity}
      />
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
