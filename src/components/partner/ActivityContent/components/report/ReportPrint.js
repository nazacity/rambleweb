import React from 'react';
import RegisteredReport from './RegisteredReport';
import AgeRangeReport from './AgeRangeReport';
import ShirtReport from './ShirtReport';
import CourseReport from './CourseReport';
import GenderReport from './GenderReport';
import RevenueReport from './RevenueReport';
import { Hidden } from '@material-ui/core';
import usePopstate from 'react-usepopstate';

const ReportPrint = ({ activityDetail, setState }) => {
  const { isBackButtonClicked } = usePopstate({
    isPrompt: false,
    callback: () => {
      setState(0);
    },
  });
  return (
    <div>
      <Hidden mdDown>
        <div style={{ margin: 50 }}>
          <div style={{ display: 'flex' }}>
            <RegisteredReport activityDetail={activityDetail} />
            <div style={{ display: 'flex', flex: 1 }} />
            <AgeRangeReport activityDetail={activityDetail} />
          </div>
          <div style={{ marginTop: 50 }}>
            <GenderReport activityDetail={activityDetail} />
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
        </div>
      </Hidden>
      <Hidden xsDown lgUp>
        <div style={{ display: 'flex', margin: '50px 20px 0' }}>
          <RegisteredReport activityDetail={activityDetail} />
          <div style={{ display: 'flex', flex: 1 }} />
          <AgeRangeReport activityDetail={activityDetail} />
        </div>
        <div style={{ margin: '50px 20px' }}>
          <GenderReport activityDetail={activityDetail} />
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
      </Hidden>
      <Hidden smUp>
        <div style={{ margin: '50px 20px 0' }}>
          <RegisteredReport activityDetail={activityDetail} mobile={true} />
        </div>

        <div style={{ margin: '50px 20px 0' }}>
          <AgeRangeReport activityDetail={activityDetail} mobile={true} />
        </div>
        <div style={{ margin: '50px 20px' }}>
          <GenderReport activityDetail={activityDetail} />
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
      </Hidden>
    </div>
  );
};

export default ReportPrint;
