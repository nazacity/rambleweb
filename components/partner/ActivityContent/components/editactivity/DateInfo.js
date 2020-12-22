import React, { useState } from 'react';
import { Typography, IconButton } from '@material-ui/core';
import { Edit, Save, Close } from '@material-ui/icons';
import { KeyboardDatePicker } from '@material-ui/pickers';

import moment from 'moment';
import 'moment/locale/th';
moment.locale('th');

const DateInfo = ({ activityDetail, editMode, setEditMode, editActivity }) => {
  const [detail, setDetail] = useState({
    actual_date: activityDetail.actual_date,
    register_start_date: activityDetail.register_start_date,
    register_end_date: activityDetail.register_end_date,
  });

  const onSubmit = async () => {
    await editActivity({
      type: 'dateinfo',
      ...detail,
    });
    setEditMode({ ...editMode, dateinfo: false });
  };

  if (editMode) {
    return (
      <div>
        <div
          style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}
        >
          <KeyboardDatePicker
            autoOk
            variant="inline"
            inputVariant="outlined"
            label="Actual Date"
            format="DD MMMM YYYY"
            value={detail.actual_date}
            InputAdornmentProps={{ position: 'start' }}
            style={{ width: '100%' }}
            onChange={(date) => {
              setDetail({ ...detail, actual_date: date });
            }}
          />
        </div>
        <div
          style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}
        >
          <KeyboardDatePicker
            autoOk
            variant="inline"
            inputVariant="outlined"
            label="Register Start Date"
            format="DD MMMM YYYY"
            value={detail.register_start_date}
            InputAdornmentProps={{ position: 'start' }}
            onChange={(date) => {
              setDetail({ ...detail, register_start_date: date });
            }}
          />
          <div style={{ flex: 1 }} />
          <KeyboardDatePicker
            autoOk
            variant="inline"
            inputVariant="outlined"
            label="Register End Date"
            format="DD MMMM YYYY"
            value={detail.register_end_date}
            InputAdornmentProps={{ position: 'start' }}
            onChange={(date) => {
              setDetail({ ...detail, register_end_date: date });
            }}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <IconButton onClick={onSubmit}>
            <Save />
          </IconButton>
          <IconButton
            onClick={() => {
              setEditMode({ ...editMode, dateinfo: false });
            }}
          >
            <Close />
          </IconButton>
        </div>
      </div>
    );
  }

  return (
    <React.Fragment>
      <div style={{ margin: '20px auto' }}>
        <Typography variant="h4">วันงาน</Typography>

        <div style={{ display: 'flex', flexDirection: 'row', marginLeft: 20 }}>
          <Typography>
            {moment(activityDetail.actual_date).format('DD MMMM YYYY')}
          </Typography>
        </div>
      </div>
      <div style={{ margin: '20px auto' }}>
        <Typography variant="h4">วันที่เปิดรับสมัคร</Typography>

        <div style={{ display: 'flex', flexDirection: 'row', marginLeft: 20 }}>
          <Typography>
            {moment(activityDetail.register_start_date).format('DD MMMM YYYY')}
          </Typography>
          <Typography style={{ margin: '0 10px' }}>-</Typography>
          <Typography>
            {moment(activityDetail.register_end_date).format('DD MMMM YYYY')}
          </Typography>
        </div>
      </div>
      <IconButton
        style={{ left: '50%', transform: 'translateX(-50%)' }}
        onClick={() => {
          setEditMode({ ...editMode, dateinfo: true });
        }}
      >
        <Edit />
      </IconButton>
    </React.Fragment>
  );
};

export default DateInfo;
