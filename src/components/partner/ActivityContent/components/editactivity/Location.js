import React from 'react';
import { TextField, IconButton, Typography } from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';
import { provinceDict } from 'constants/provinces';
import { LocationOn, Edit, Save, Close } from '@material-ui/icons';
import Link from 'Link';

const Location = ({ editMode, setEditMode, activityDetail, editActivity }) => {
  const {
    register,
    handleSubmit,
    unregister,
    control,
    errors,
    reset,
  } = useForm({
    defaultValues: {
      location: {
        lat: activityDetail.location.lat,
        lng: activityDetail.location.lng,
        province: activityDetail.location.province,
        place_name: activityDetail.location.place_name,
      },
    },
  });

  const onSubmit = async (data) => {
    await editActivity(
      {
        type: 'location',
        ...data,
      },
      reset
    );
    setEditMode({ ...editMode, location: false });
  };

  if (editMode) {
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}
        >
          <Controller
            as={TextField}
            name="location[lat]"
            control={control}
            defaultValue=""
            label="Latitude"
            variant="outlined"
            rules={{
              required: 'กรุณา Latitude',
            }}
            error={errors.location?.lat && true}
            helperText={errors.location?.lat?.message}
            // disabled={loading}
            style={{ width: '100%' }}
          />
        </div>
        <div
          style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}
        >
          <Controller
            as={TextField}
            name="location[lng]"
            control={control}
            defaultValue=""
            label="Longtitude"
            variant="outlined"
            rules={{
              required: 'กรุณา Longtitude',
            }}
            error={errors.location?.lng && true}
            helperText={errors.location?.lng?.message}
            // disabled={loading}
            style={{ width: '100%' }}
          />
        </div>
        <div
          style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}
        >
          <Controller
            menuPlacement="auto"
            name="location[province]"
            control={control}
            label="Province"
            variant="outlined"
            rules={{
              required: 'กรุณา Province',
            }}
            error={errors.location?.province && true}
            helperText={errors.location?.province?.message}
            // disabled={loading}

            render={({ onChange, value }) => (
              <Select
                value={provinceDict.filter((option) => option.value === value)}
                options={provinceDict}
                onChange={(e) => {
                  onChange(e.value);
                }}
                styles={{
                  control: (styles) => ({
                    ...styles,
                    backgroundColor: 'white',
                    height: 60,
                  }),
                  container: (styles) => ({
                    ...styles,
                    width: '100%',
                    height: 60,
                    zIndex: 500,
                  }),
                }}
              />
            )}
          />
        </div>
        <div
          style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}
        >
          <Controller
            as={TextField}
            name="location[place_name]"
            control={control}
            defaultValue=""
            label="Place Name"
            variant="outlined"
            rules={{
              required: 'กรุณา Place Name',
            }}
            error={errors.location?.place_name && true}
            helperText={errors.location?.place_name?.message}
            // disabled={loading}
            style={{ width: '100%' }}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <IconButton type="submit">
            <Save />
          </IconButton>
          <IconButton
            onClick={() => {
              setEditMode({ ...editMode, location: false });
            }}
          >
            <Close />
          </IconButton>
        </div>
      </form>
    );
  }

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Link
          href={`https://www.google.com/maps/search/?api=1&query=${activityDetail.location.lat},${activityDetail.location.lng}`}
          target="_blank"
        >
          <div
            style={{
              width: 120,
              height: 120,
              backgroundColor: '#fce4ec',
              borderRadius: 10,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 20,
            }}
          >
            <IconButton size="medium">
              <LocationOn style={{ fontSize: 40 }} />
            </IconButton>
          </div>
        </Link>
        <div style={{ marginLeft: 20, display: 'flex' }}>
          <div style={{ marginRight: 20 }}>
            <Typography>จังหวัด</Typography>
            <Typography>สถานที่</Typography>
          </div>
          <div>
            <Typography>{activityDetail.location.province}</Typography>
            <Typography>{activityDetail.location.place_name}</Typography>
          </div>
        </div>
      </div>
      <div>
        <IconButton
          style={{ left: '50%', transform: 'translateX(-50%)' }}
          onClick={() => {
            setEditMode({ ...editMode, location: true });
          }}
        >
          <Edit />
        </IconButton>
      </div>
    </div>
  );
};

export default Location;
