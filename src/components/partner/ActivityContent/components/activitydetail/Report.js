import React from 'react';
import RegisteredReport from '../report/RegisteredReport';
import AgeRangeReport from '../report/AgeRangeReport';
import UserReport from '../report/UserReport';
import Announcement from './Announcement';
import Coupon from './Coupon';

const Report = ({
  activityDetail,
  loadingTrue,
  loadingFalse,
  setActivityDetail,
  editActivity,
}) => {
  // console.log(activityDetail);
  return (
    <div style={{ display: 'flex' }}>
      <div
        style={{
          maxWidth: 1200,
          minWidth: 900,
          margin: 50,
        }}
      >
        <div style={{ display: 'flex' }}>
          <RegisteredReport activityDetail={activityDetail} />
          <div style={{ display: 'flex', flex: 1 }} />
          <AgeRangeReport activityDetail={activityDetail} />
        </div>
        <div style={{ marginTop: 50 }}>
          <UserReport
            activityDetail={activityDetail}
            loadingFalse={loadingFalse}
            loadingTrue={loadingTrue}
          />
        </div>
      </div>
      <div style={{ margin: 50 }}>
        <Announcement
          activityDetail={activityDetail}
          setActivityDetail={setActivityDetail}
        />
        <Coupon activityDetail={activityDetail} editActivity={editActivity} />
      </div>
    </div>
  );
};

export default Report;
