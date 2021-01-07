import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { IconButton, TextField, Typography } from '@material-ui/core';
import { HighlightOff, Add, Edit, Save, Close } from '@material-ui/icons';
import ModalImage from 'react-modal-image';
import { post } from 'utils/request';
import { useSelector } from 'react-redux';
import moment from 'moment';
import 'moment/locale/th';
import AnnoucementCard from './announcement/AnnoucementCard';

const Announcement = ({ activityDetail, setActivityDetail }) => {
  const [editMode, setEditMode] = useState(false);
  const { handleSubmit, unregister, control, reset, errors } = useForm({});
  const lang = useSelector((state) => state.layout.lang);
  moment.locale(lang);

  const onSubmit = async (data) => {
    const res = await post('/api/partners/announcement', {
      activity_id: activityDetail._id,
      ...data,
    });

    if (res.status === 200) {
      setActivityDetail(res.data);
    }
    reset();
    setEditMode(false);
  };
  if (editMode) {
    return (
      <div style={{ width: 800, margin: '20px auto' }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ display: 'flex' }}>
            <Typography variant="h4">ประกาศ</Typography>
            <div style={{ flex: 1 }} />
            <IconButton type="submit">
              <Add />
            </IconButton>
            <IconButton
              onClick={() => {
                setEditMode(false);
              }}
            >
              <Close />
            </IconButton>
          </div>
          <div
            style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}
          >
            <Controller
              as={TextField}
              name="title"
              control={control}
              defaultValue=""
              label="Title"
              variant="outlined"
              rules={{
                required: 'กรุณาใส่ title',
              }}
              error={errors.title && true}
              helperText={errors.title?.message}
              // disabled={loading}
              style={{ width: '100%' }}
            />
          </div>
          <div
            style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}
          >
            <Controller
              as={TextField}
              name="description"
              control={control}
              defaultValue=""
              label="Description"
              variant="outlined"
              rules={{
                required: 'กรุณาใส่ Description',
              }}
              error={errors.description && true}
              helperText={errors.description?.message}
              // disabled={loading}
              style={{ width: '100%' }}
              multiline={true}
              rows={3}
            />
          </div>
          <div
            style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}
          >
            <Controller
              as={TextField}
              name="picture_url"
              control={control}
              defaultValue=""
              label="picture url กว้าง 300 px สูง 300 px"
              variant="outlined"
              error={errors.title && true}
              helperText={errors.title?.message}
              // disabled={loading}
              style={{ width: '100%' }}
            />
          </div>
        </form>
      </div>
    );
  }
  return (
    <div style={{ margin: '20px auto', width: 800 }}>
      <div style={{ display: 'flex' }}>
        <Typography variant="h4">ประกาศ</Typography>
        <div style={{ flex: 1 }} />
        <IconButton
          onClick={() => {
            setEditMode(true);
          }}
        >
          <Add />
        </IconButton>
      </div>
      <div style={{ paddingLeft: 20 }}>
        {activityDetail.announcement.length > 0 &&
          activityDetail.announcement
            .sort((a, b) => {
              return new Date(b.createdAt) - new Date(a.createdAt);
            })
            .map((item) => {
              return (
                <AnnoucementCard
                  item={item}
                  activityDetail={activityDetail}
                  setActivityDetail={setActivityDetail}
                  key={item._id}
                />
              );
            })}
      </div>
    </div>
  );
};

export default Announcement;
