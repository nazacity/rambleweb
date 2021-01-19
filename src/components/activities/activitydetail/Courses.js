import { Typography } from '@material-ui/core';
import React from 'react';
import ModalImage from 'react-modal-image';

const Courses = ({ activityDetail }) => {
  return (
    <div style={{ margin: '10px 0' }}>
      <div style={{ display: 'flex', marginBottom: 10 }}>
        <Typography variant="h6" color="primary">
          คอร์สวิ่ง
        </Typography>
      </div>
      {activityDetail.courses.map((item, index) => {
        return (
          <div
            key={index}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 20,
            }}
          >
            <div
              style={{
                width: 100,
                height: 100,
                overflow: 'hidden',
              }}
            >
              <ModalImage
                small={item.course_picture_url}
                large={item.course_picture_url}
              />
            </div>
            <div>
              <Typography style={{ marginLeft: 20 }}>{item.title}</Typography>
              <Typography style={{ marginLeft: 20 }}>
                ค่าสมัคร {item.price} บาท
              </Typography>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Courses;
