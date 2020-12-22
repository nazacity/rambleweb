import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import { Controller } from 'react-hook-form';
import Select from 'react-select';
import { provinceDict } from '../../../../../src/constants/provinces';

const Title = ({ control, errors }) => {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
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
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
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
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
        <Controller
          menuPlacement="auto"
          name="location[province]"
          control={control}
          defaultValue=""
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
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
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
    </div>
  );
};

export default Title;
