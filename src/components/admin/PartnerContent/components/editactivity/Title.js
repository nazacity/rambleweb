import React from 'react';
import { TextField, Typography, IconButton } from '@material-ui/core';
import { Edit, Save, Close } from '@material-ui/icons';
import { useForm, Controller } from 'react-hook-form';

const Title = ({ editMode, setEditMode, activityDetail, editActivity }) => {
  const {
    register,
    handleSubmit,
    unregister,
    control,
    errors,
    reset,
  } = useForm({
    defaultValues: {
      title: activityDetail.title,
      sub_title: activityDetail.sub_title,
      description: activityDetail.description,
    },
  });

  const onSubmit = async (data) => {
    await editActivity(
      {
        type: 'title',
        ...data,
      },
      reset
    );
    setEditMode({ ...editMode, title: false });
  };
  if (editMode) {
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
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
              required: 'กรุณา title',
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
            name="sub_title"
            control={control}
            defaultValue=""
            label="Sub Title"
            variant="outlined"
            rules={{
              required: 'กรุณา Sub Title',
            }}
            error={errors.sub_title && true}
            helperText={errors.sub_title?.message}
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
              required: 'กรุณา description',
            }}
            error={errors.description && true}
            helperText={errors.description?.message}
            // disabled={loading}
            style={{ width: '100%' }}
            multiline={true}
            rows={5}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <IconButton type="submit">
            <Save />
          </IconButton>
          <IconButton
            onClick={() => {
              setEditMode({ ...editMode, title: false });
            }}
          >
            <Close />
          </IconButton>
        </div>
      </form>
    );
  }

  return (
    <React.Fragment>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="h4">{activityDetail.title}</Typography>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="h5">{activityDetail.sub_title}</Typography>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="body1" style={{ marginTop: 20 }}>
          {activityDetail.description}
        </Typography>
      </div>
      <IconButton
        style={{ left: '50%', transform: 'translateX(-50%)' }}
        onClick={() => {
          setEditMode({ ...editMode, title: true });
        }}
      >
        <Edit />
      </IconButton>
    </React.Fragment>
  );
};

export default Title;
