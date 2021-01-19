import React from 'react';
import { Typography } from '@material-ui/core';
import moment from 'moment';
import 'moment/locale/th';
moment.locale('th');

const DateInfo = ({ activityDetail }) => {
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
    </React.Fragment>
  );
};

export default DateInfo;
