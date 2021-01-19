import React from 'react';
import { Typography } from '@material-ui/core';
import ModalImage from 'react-modal-image';

const Gifts = ({ activityDetail }) => {
  return (
    <div style={{ margin: '10px 0' }}>
      <div style={{ display: 'flex' }}>
        <Typography variant="h6">รางวัลของที่ระลึก</Typography>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
        {activityDetail.gifts.map((item, index) => {
          return (
            <div
              style={{ marginRight: 10, marginRight: 20, marginBottom: 20 }}
              key={index}
            >
              <div
                style={{
                  width: 100,
                  height: 100,
                }}
              >
                <ModalImage
                  small={item.gift_picture_url}
                  large={item.gift_picture_url}
                />
              </div>
              <Typography style={{ textAlign: 'center' }}>
                {item.description}
              </Typography>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gifts;
