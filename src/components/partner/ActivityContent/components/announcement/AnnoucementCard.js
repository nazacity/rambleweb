import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { IconButton, TextField, Typography } from '@material-ui/core';
import { Edit, Save, Close } from '@material-ui/icons';
import DeleteIcon from '@material-ui/icons/Delete';
import { post, Delete } from 'utils/request';
import { useSelector } from 'react-redux';
import moment from 'moment';
import 'moment/locale/th';

const AnnoucementCard = ({ item, setActivityDetail, activityDetail }) => {
  const [editMode, setEditMode] = useState(false);
  const { handleSubmit, unregister, control, reset, errors } = useForm({
    defaultValues: item,
  });
  const lang = useSelector((state) => state.layout.lang);
  moment.locale(lang);

  const onSubmit = async (data) => {
    const res = await post(`/api/partners/announcement/${item._id}`, {
      activity_id: activityDetail._id,
      ...item,
      ...data,
    });

    if (res.status === 200) {
      setActivityDetail(res.data);
      reset(item);
    }
    setEditMode(false);
  };

  const onDelete = async () => {
    const res = await Delete(
      `/api/partners/announcement/${activityDetail._id}/${item._id}`
    );
    if (res.status === 200) {
      setActivityDetail(res.data);
      reset(item);
    }
  };

  if (editMode) {
    return (
      <div style={{ width: 800, margin: '20px auto' }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ display: 'flex' }}>
            <div style={{ flex: 1 }} />
            <IconButton type="submit">
              <Save />
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
    <div
      style={{
        width: 600,
        borderRadius: 20,
        margin: 20,
        display: 'flex',
        border: '1px solid black',
      }}
    >
      <img
        src={
          item.picture_url
            ? item.picture_url
            : activityDetail.activity_picture_url
        }
        style={{
          width: 200,
          height: 200,
          borderBottomLeftRadius: 20,
          borderTopLeftRadius: 20,
        }}
      />
      <div
        style={{
          margin: 20,
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          flex: 1,
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="h6">{item.title}</Typography>
          <Typography variant="body1">
            {moment(item.createdAt).fromNow()}
          </Typography>
        </div>
        <Typography variant="body1">{item.description}</Typography>
        <IconButton
          style={{ position: 'absolute', bottom: -10, right: 20 }}
          onClick={() => {
            setEditMode(true);
          }}
        >
          <Edit />
        </IconButton>
        <IconButton
          style={{ position: 'absolute', bottom: -10, right: -20 }}
          onClick={onDelete}
        >
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default AnnoucementCard;
