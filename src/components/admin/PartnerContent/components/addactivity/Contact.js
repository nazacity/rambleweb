import React from 'react';
import { TextField } from '@material-ui/core';
import { Controller } from 'react-hook-form';

const Contact = ({ control, errors }) => {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
        <Controller
          as={TextField}
          name="contact[phone_number]"
          control={control}
          defaultValue=""
          label="เบอร์โทรศัพท์"
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
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
        <Controller
          as={TextField}
          name="contact[line]"
          control={control}
          defaultValue=""
          label="LineId or Line@"
          variant="outlined"
          rules={{
            required: 'กรุณา LineId หรือ Line@',
          }}
          error={errors.contact?.line && true}
          helperText={errors.contact?.line?.message}
          // disabled={loading}
          style={{ width: '100%' }}
        />
      </div>
    </div>
  );
};

export default Contact;
