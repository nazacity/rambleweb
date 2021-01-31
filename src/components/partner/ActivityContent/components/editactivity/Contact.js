import React from 'react';
import { TextField, Typography, IconButton } from '@material-ui/core';
import { Edit, Save, Close } from '@material-ui/icons';
import { useForm, Controller } from 'react-hook-form';
import Link from 'Link';

const Contact = ({ editMode, setEditMode, activityDetail, editActivity }) => {
  const {
    register,
    handleSubmit,
    unregister,
    control,
    errors,
    reset,
  } = useForm({
    defaultValues: {
      contact: activityDetail.contact,
    },
  });

  const onSubmit = async (data) => {
    await editActivity(
      {
        type: 'contact',
        ...data,
      },
      reset
    );
    setEditMode({ ...editMode, contact: false });
  };
  if (editMode) {
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ display: 'flex' }}>
          <Typography variant="h4">การติดต่อผู้จัดงาน</Typography>
          <div style={{ flex: 1 }} />
          <IconButton type="submit">
            <Save />
          </IconButton>
          <IconButton
            onClick={() => {
              setEditMode({ ...editMode, contact: false });
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
              name="contact[phone_number]"
              control={control}
              defaultValue=""
              label="เบอร์โทรศํพท์"
              variant="outlined"
              rules={{
                required: 'กรุณาใส่เบอร์ติดต่อผู้จัดงาน',
              }}
              error={errors.contact?.phone_number && true}
              helperText={errors.contact?.phone_number?.message}
              // disabled={loading}
              style={{ width: '100%' }}
            />
          </div>
          <div
            style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}
          >
            <Controller
              as={TextField}
              name="contact[line]"
              control={control}
              defaultValue=""
              label="LineId หรือ Line@"
              variant="outlined"
              rules={{
                required: 'กรุณาใส่ LineId หรือ Line@',
              }}
              error={errors.contact?.line && true}
              helperText={errors.contact?.line?.message}
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
        <Typography variant="h4">การติดต่อผู้จัดงาน</Typography>
        {/* <div style={{ flex: 1 }} />
        <IconButton
          onClick={() => {
            setEditMode({ ...editMode, contact: true });
          }}
        >
          <Edit />
        </IconButton> */}
      </div>
      <div style={{ margin: '20px auto' }}>
        <div style={{ display: 'flex' }}>
          <Typography variant="h6">เบอร์โทรศัพท์ผู้จัดงาน</Typography>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', marginLeft: 20 }}>
          <Link
            href={`tel:${activityDetail.contact.phone_number}`}
            target="black"
          >
            <Typography style={{ color: '#000' }}>
              {activityDetail.contact.phone_number}
            </Typography>
          </Link>
        </div>
      </div>
      <div style={{ margin: '20px auto' }}>
        <div style={{ display: 'flex' }}>
          <Typography variant="h6">Line ติดต่อ</Typography>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', marginLeft: 20 }}>
          <Link
            href={`http://line.me/ti/p/~${activityDetail.contact.line}`}
            target="black"
          >
            <Typography style={{ color: '#000' }}>
              {activityDetail.contact.line}
            </Typography>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
