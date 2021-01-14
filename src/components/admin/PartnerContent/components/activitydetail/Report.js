import React from 'react';
import RegisteredReport from '../report/RegisteredReport';
import AgeRangeReport from '../report/AgeRangeReport';
import UserReport from '../report/UserReport';
import ShirtReport from '../report/ShirtReport';
import GenderReport from '../report/GenderReport';
import Announcement from './Announcement';
import Coupon from './Coupon';
import CourseReport from '../report/CourseReport';
import RevenueReport from '../report/RevenueReport';
import { Hidden } from '@material-ui/core';

const Report = ({
  activityDetail,
  loadingTrue,
  loadingFalse,
  setActivityDetail,
  editActivity,
}) => {
  // console.log(activityDetail);
  return (
    <div>
      <Hidden mdDown>
        <div style={{ display: 'flex' }}>
          <div
            style={{
              margin: 50,
              marginRight: 0,
            }}
          >
            <div style={{ display: 'flex' }}>
              <RegisteredReport activityDetail={activityDetail} />
              <div style={{ display: 'flex', flex: 1 }} />
              <AgeRangeReport activityDetail={activityDetail} />
            </div>
            <div style={{ marginTop: 50 }}>
              <ShirtReport activityDetail={activityDetail} />
            </div>
            <div style={{ marginTop: 50 }}>
              <CourseReport activityDetail={activityDetail} />
            </div>
            <div style={{ marginTop: 50 }}>
              <RevenueReport activityDetail={activityDetail} />
            </div>
            {/* <div style={{ marginTop: 50 }}>
              <UserReport
                activityDetail={activityDetail}
                loadingFalse={loadingFalse}
                loadingTrue={loadingTrue}
              />
            </div> */}
          </div>
          <div style={{ margin: 50 }}>
            <GenderReport activityDetail={activityDetail} />
            {/* <Announcement
              activityDetail={activityDetail}
              setActivityDetail={setActivityDetail}
            />
            <Coupon
              activityDetail={activityDetail}
              editActivity={editActivity}
            /> */}
          </div>
        </div>
      </Hidden>
      <Hidden xsDown lgUp>
        <div style={{ display: 'flex', margin: '50px 20px 0' }}>
          <RegisteredReport activityDetail={activityDetail} />
          <div style={{ display: 'flex', flex: 1 }} />
          <AgeRangeReport activityDetail={activityDetail} />
        </div>
        <div style={{ margin: '50px 20px 0' }}>
          <ShirtReport activityDetail={activityDetail} />
        </div>
        <div style={{ margin: '50px 20px 0' }}>
          <CourseReport activityDetail={activityDetail} />
        </div>
        <div style={{ margin: '50px 20px 0' }}>
          <RevenueReport activityDetail={activityDetail} />
        </div>
        {/* <div style={{ margin: '50px 20px 0' }}>
          <UserReport
            activityDetail={activityDetail}
            loadingFalse={loadingFalse}
            loadingTrue={loadingTrue}
          />
        </div> */}
        <div style={{ margin: '50px 20px' }}>
          <GenderReport activityDetail={activityDetail} />
          {/* <Announcement
            activityDetail={activityDetail}
            setActivityDetail={setActivityDetail}
          />
          <Coupon activityDetail={activityDetail} editActivity={editActivity} /> */}
        </div>
      </Hidden>
      <Hidden smUp>
        <div style={{ margin: '50px 20px 0' }}>
          <RegisteredReport activityDetail={activityDetail} mobile={true} />
        </div>

        <div style={{ margin: '50px 20px 0' }}>
          <AgeRangeReport activityDetail={activityDetail} mobile={true} />
        </div>

        <div style={{ margin: '50px 20px 0' }}>
          <ShirtReport activityDetail={activityDetail} mobile={true} />
        </div>
        <div style={{ margin: '50px 20px 0' }}>
          <CourseReport activityDetail={activityDetail} />
        </div>
        <div style={{ margin: '50px 20px 0' }}>
          <RevenueReport activityDetail={activityDetail} mobile={true} />
        </div>
        {/* <div style={{ margin: '50px 20px 0' }}>
          <UserReport
            activityDetail={activityDetail}
            loadingFalse={loadingFalse}
            loadingTrue={loadingTrue}
          />
        </div> */}
        <div style={{ margin: '50px 20px' }}>
          <GenderReport activityDetail={activityDetail} />
          {/* <Announcement
            activityDetail={activityDetail}
            setActivityDetail={setActivityDetail}
            mobile={true}
          />
          <Coupon
            activityDetail={activityDetail}
            editActivity={editActivity}
            mobile={true}
          /> */}
        </div>
      </Hidden>
    </div>
  );
};

export default Report;
