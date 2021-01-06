import React from 'react';
import { TextField, Typography, IconButton } from '@material-ui/core';
import { Edit, Save, Close } from '@material-ui/icons';
import { useForm, Controller } from 'react-hook-form';

const SenderAddress = ({
  editMode,
  setEditMode,
  activityDetail,
  editActivity,
}) => {
  const {
    register,
    handleSubmit,
    unregister,
    control,
    errors,
    reset,
  } = useForm({
    defaultValues: {
      senderAddress: activityDetail.senderAddress,
    },
  });

  const onSubmit = async (data) => {
    await editActivity(
      {
        type: 'senderAddress',
        ...data,
      },
      reset
    );
    setEditMode({ ...editMode, title: false });
  };
  if (editMode) {
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ display: 'flex' }}>
          <Typography variant="h4">ที่อยู่ผู้ส่ง</Typography>
          <div style={{ flex: 1 }} />
          <IconButton type="submit">
            <Save />
          </IconButton>
          <IconButton
            onClick={() => {
              setEditMode({ ...editMode, senderAddress: false });
            }}
          >
            <Close />
          </IconButton>
        </div>
        <div>
          <div
            style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}
          >
            <Controller
              as={TextField}
              name="senderAddress[name]"
              control={control}
              defaultValue=""
              label="ชื่อผู้ส่ง"
              variant="outlined"
              rules={{
                required: 'กรุณาใส่ชื่อผู้ส่ง',
              }}
              error={errors.senderAddress?.name && true}
              helperText={errors.senderAddress?.name.message}
              // disabled={loading}
              style={{ width: '100%' }}
            />
          </div>
          <div
            style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}
          >
            <Controller
              as={TextField}
              name="senderAddress[address]"
              control={control}
              defaultValue=""
              label="ที่อยู่ผู้ส่ง"
              variant="outlined"
              rules={{
                required: 'กรุณาใส่ที่อยู่ผู้ส่ง',
              }}
              error={errors.senderAddress?.address && true}
              helperText={errors.senderAddress?.address.message}
              // disabled={loading}
              style={{ width: '100%' }}
            />
          </div>
          <div
            style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}
          >
            <Controller
              as={TextField}
              name="senderAddress[province]"
              control={control}
              defaultValue=""
              label="จังหวัด"
              variant="outlined"
              rules={{
                required: 'กรุณาใส่จังหวัด',
              }}
              error={errors.senderAddress?.province && true}
              helperText={errors.senderAddress?.province?.message}
              // disabled={loading}
              style={{ width: '100%' }}
            />
          </div>
          <div
            style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}
          >
            <Controller
              as={TextField}
              name="senderAddress[zip]"
              control={control}
              defaultValue=""
              label="รหัสไปรษณีย์"
              variant="outlined"
              rules={{
                required: 'กรุณาใส่รหัสไปรษณีย์',
              }}
              error={errors.senderAddress?.zip && true}
              helperText={errors.senderAddress?.zip?.message}
              // disabled={loading}
              style={{ width: '100%' }}
            />
          </div>
          <div
            style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}
          >
            <Controller
              as={TextField}
              name="senderAddress[phone_number]"
              control={control}
              defaultValue=""
              label="เบอร์โทรศัพท์"
              variant="outlined"
              rules={{
                required: 'กรุณาใส่เบอร์โทรศัพท์',
              }}
              error={errors.senderAddress?.phone_number && true}
              helperText={errors.senderAddress?.phone_number?.message}
              // disabled={loading}
              style={{ width: '100%' }}
            />
          </div>
        </div>
      </form>
    );
  }

  return (
    <React.Fragment>
      <div style={{ display: 'flex' }}>
        <Typography variant="h4">ที่อยู่ผู้ส่ง</Typography>
        <div style={{ flex: 1 }} />
        <IconButton
          onClick={() => {
            setEditMode({ ...editMode, senderAddress: true });
          }}
        >
          <Edit />
        </IconButton>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Typography>{activityDetail.senderAddress.name}</Typography>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Typography>{activityDetail.senderAddress.address}</Typography>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Typography>{activityDetail.senderAddress.province}</Typography>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Typography>{activityDetail.senderAddress.zip}</Typography>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Typography>{activityDetail.senderAddress.phone_number}</Typography>
      </div>
    </React.Fragment>
  );
};

export default SenderAddress;
