import React from 'react';
import { TextField } from '@material-ui/core';
import { Controller } from 'react-hook-form';

const Title = ({ control, errors }) => {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
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
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
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
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
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
    </div>
  );
};

export default Title;
