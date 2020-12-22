import React, { useState } from 'react';
import ModalImage from 'react-modal-image';
import { TextField, IconButton } from '@material-ui/core';
import { Edit, Save, Close } from '@material-ui/icons';

const Banner = ({ activityDetail, editMode, setEditMode, editActivity }) => {
  const [detail, setDetail] = useState({
    activity_picture_url: activityDetail.activity_picture_url,
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setDetail({ ...detail, [name]: value });
  };

  const onSubmit = async () => {
    await editActivity({
      type: 'banner',
      activity_picture_url: detail.activity_picture_url,
    });
    setEditMode({ ...editMode, banner: false });
  };

  if (editMode) {
    return (
      <div style={{ marginBottom: 40 }}>
        <TextField
          label="Image Url"
          onChange={handleChange}
          name="activity_picture_url"
          variant="outlined"
          style={{ width: '100%' }}
          value={detail.activity_picture_url}
        />
        <div
          style={{
            height: 600,
            width: 800,
          }}
        >
          {detail.activity_picture_url !== '' && (
            <ModalImage
              style={{
                height: 600,
                width: 800,
              }}
              small={detail.activity_picture_url}
              large={detail.activity_picture_url}
            />
          )}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <IconButton
            onClick={() => {
              onSubmit();
            }}
          >
            <Save />
          </IconButton>
          <IconButton
            onClick={() => {
              setEditMode({ ...editMode, banner: false });
            }}
          >
            <Close />
          </IconButton>
        </div>
      </div>
    );
  }

  return (
    <div style={{ marginBottom: 40 }}>
      <div
        style={{
          height: 600,
          width: 800,
        }}
      >
        <ModalImage
          style={{
            height: 600,
            width: 800,
          }}
          small={activityDetail.activity_picture_url}
          large={activityDetail.activity_picture_url}
        />
      </div>
      <IconButton
        style={{ left: '50%', transform: 'translateX(-50%)' }}
        onClick={() => {
          setEditMode({ ...editMode, banner: true });
        }}
      >
        <Edit />
      </IconButton>
    </div>
  );
};

export default Banner;
