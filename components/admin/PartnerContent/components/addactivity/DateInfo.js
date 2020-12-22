import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import { DatePicker, KeyboardDatePicker } from '@material-ui/pickers';

const DateInfo = ({ activityDetail, setActivityDetail }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setActivityDetail({ ...activityDetail, [name]: value });
  };
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
        <KeyboardDatePicker
          autoOk
          variant="inline"
          inputVariant="outlined"
          label="Actual Date"
          format="DD MMMM YYYY"
          value={activityDetail.actual_date}
          InputAdornmentProps={{ position: 'start' }}
          style={{ width: '100%' }}
          onChange={(date) => {
            setActivityDetail({ ...activityDetail, actual_date: date });
          }}
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
        <KeyboardDatePicker
          autoOk
          variant="inline"
          inputVariant="outlined"
          label="Register Start Date"
          format="DD MMMM YYYY"
          value={activityDetail.register_start_date}
          InputAdornmentProps={{ position: 'start' }}
          onChange={(date) => {
            setActivityDetail({ ...activityDetail, register_start_date: date });
          }}
        />
        <div style={{ flex: 1 }} />
        <KeyboardDatePicker
          autoOk
          variant="inline"
          inputVariant="outlined"
          label="Register End Date"
          format="DD MMMM YYYY"
          value={activityDetail.register_end_date}
          InputAdornmentProps={{ position: 'start' }}
          onChange={(date) => {
            setActivityDetail({ ...activityDetail, register_end_date: date });
          }}
        />
      </div>
    </div>
  );
};

export default DateInfo;
