import React from 'react';
import { TextField, Typography } from '@material-ui/core';
import { Controller } from 'react-hook-form';

const SenderAddress = ({ control, errors }) => {
  return (
    <div>
      <div style={{ display: 'flex' }}>
        <Typography variant="h4">ที่อยู่ผู้ส่ง</Typography>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
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
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
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
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
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
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
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
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
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
  );
};

export default SenderAddress;
