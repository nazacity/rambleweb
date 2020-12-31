import React from 'react';
import ModalImage from 'react-modal-image';
import { TextField } from '@material-ui/core';

const Banner = ({ activityDetail, setActivityDetail }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setActivityDetail({ ...activityDetail, [name]: value });
  };

  //https://ev.runlah.com/api/1/images/e-df65BRiLl4r-banner.jpg?size=xl
  return (
    <div style={{ marginBottom: 40 }}>
      <TextField
        label="Image Url"
        onChange={handleChange}
        name="activity_picture_url"
        variant="outlined"
        style={{ width: '100%' }}
        value={activityDetail.activity_picture_url}
      />
      <div
        style={{
          height: 600,
          width: 800,
        }}
      >
        {activityDetail.activity_picture_url !== '' && (
          <ModalImage
            style={{
              height: 600,
              width: 800,
            }}
            small={activityDetail.activity_picture_url}
            large={activityDetail.activity_picture_url}
          />
        )}
      </div>
    </div>
  );
};

export default Banner;
