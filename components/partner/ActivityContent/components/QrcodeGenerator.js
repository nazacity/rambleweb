import React from 'react';
import QRCode from 'qrcode.react';
import { Typography } from '@material-ui/core';

const QrcodeGenerator = ({ activityDetail }) => {
  console.log(activityDetail._id);
  return (
    <div>
      <div>
        <Typography style={{ textAlign: 'center' }} variant="h2">
          Check In Qr Code
        </Typography>
        <div style={{ height: 600, width: 600, margin: '40px auto' }}>
          <QRCode
            value={activityDetail._id}
            imageSettings={{
              src: activityDetail.activity_picture_url,
              height: 50,
              width: 50,
              excavate: true,
            }}
            size={600}
          />
        </div>
      </div>
      <div style={{ margin: '40px' }}>
        <Typography style={{ textAlign: 'center' }} variant="h2">
          Check Out Or Code
        </Typography>
      </div>
      {activityDetail.courses.map((item) => {
        return (
          <div key={item._id}>
            <Typography style={{ textAlign: 'center' }} variant="h4">
              {item.title}
            </Typography>
            <div style={{ height: 600, width: 600, margin: '40px auto' }}>
              <QRCode
                value={item._id}
                imageSettings={{
                  src: item.course_picture_url,
                  height: 50,
                  width: 50,
                  excavate: true,
                }}
                size={600}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default QrcodeGenerator;
