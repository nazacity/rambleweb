import { IconButton, Typography } from '@material-ui/core';
import { LocationOn } from '@material-ui/icons';
import Link from 'Link';
import React from 'react';

const Location = ({ activityDetail }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Link
        href={`https://www.google.com/maps/search/?api=1&query=${activityDetail.location?.lat},${activityDetail.location?.lng}`}
        target="_blank"
      >
        <div
          style={{
            width: 60,
            height: 60,
            backgroundColor: '#fce4ec',
            borderRadius: 10,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <IconButton size="medium">
            <LocationOn style={{ fontSize: 20 }} />
          </IconButton>
        </div>
      </Link>
      <div style={{ marginLeft: 10 }}>
        <div style={{ display: 'flex' }}>
          <Typography style={{ width: 100 }}>จังหวัด</Typography>
          <Typography>{activityDetail.location?.province}</Typography>
        </div>
        <div style={{ display: 'flex' }}>
          <Typography style={{ width: 100 }}>สถานที่</Typography>
          <Typography>{activityDetail.location?.place_name}</Typography>
        </div>
      </div>
    </div>
  );
};

export default Location;
