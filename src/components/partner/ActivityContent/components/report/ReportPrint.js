import React from 'react';
import RegisteredReport from './RegisteredReport';
import AgeRangeReport from './AgeRangeReport';
import ShirtReport from './ShirtReport';
import CourseReport from './CourseReport';
import GenderReport from './GenderReport';

const ReportPrint = ({ activityDetail }) => {
  return (
    <div style={{ display: 'flex' }}>
      <div
        style={{
          width: 1000,
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
          <GenderReport activityDetail={activityDetail} />
        </div>
        <div style={{ marginTop: 650 }}>
          <ShirtReport activityDetail={activityDetail} />
        </div>
        <div style={{ marginTop: 50 }}>
          <CourseReport activityDetail={activityDetail} />
        </div>
      </div>
    </div>
  );
};

export default ReportPrint;
