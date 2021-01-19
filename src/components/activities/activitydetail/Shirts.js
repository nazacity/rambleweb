import React from 'react';
import { Typography } from '@material-ui/core';
import ModalImage from 'react-modal-image';

const Shirts = ({ activityDetail }) => {
  return (
    <div style={{ margin: '10px 0' }}>
      <div style={{ display: 'flex' }}>
        <Typography variant="h6">แบบเสื้อ</Typography>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          flex: 1,
        }}
      >
        {activityDetail.shirt_detail.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginBottom: 20,
                justifyContent: 'center',
                width: 100,
                height: 100,
              }}
            >
              <ModalImage
                small={item.shirt_picturl_url}
                large={item.shirt_picturl_url}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shirts;
