import React, { useState } from 'react';
import { IconButton, AppBar, Tabs, Tab, Toolbar } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';

import { post } from '../../../../src/utils/request';
import Detail from './Detail';
import Report from './Report';
import Coupon from './Coupon';
import QrcodeGenerator from './QrcodeGenerator';

const ActivityDetail = ({
  activityDetail,
  setState,
  setActivityDetail,
  loadingTrue,
  loadingFalse,
}) => {
  const [editMode, setEditMode] = useState({
    banner: false,
    title: false,
    location: false,
    dateinfo: false,
    courses: false,
    timeline: false,
    gifts: false,
    shirtstyle: false,
    size: false,
    rules: false,
    rules1: false,
    moredetail: false,
    condition: false,
  });

  const editActivity = async (data, reset) => {
    loadingTrue();
    try {
      const res = await post(
        `/api/partners/editactivity/${activityDetail._id}`,
        data
      );

      console.log(res);
      if (res.status === 200) {
        if (reset) {
          reset(res.data);
        }
        setActivityDetail(res.data);
      }
      loadingFalse();
    } catch (error) {
      console.log(error);
      loadingFalse();
    }
  };

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const stateContent = () => {
    switch (value) {
      case 0:
        return (
          <Detail
            activityDetail={activityDetail}
            editActivity={editActivity}
            editMode={editMode}
            setEditMode={setEditMode}
          />
        );
      case 1:
        return <Report />;
      case 2:
        return (
          <Coupon activityDetail={activityDetail} editActivity={editActivity} />
        );
      case 3:
        return <QrcodeGenerator activityDetail={activityDetail} />;
      default:
        return <div>Content is Not Found</div>;
    }
  };

  return (
    <div
      style={{
        width: 800,
      }}
    >
      <AppBar position="static" color="default">
        <Toolbar>
          <IconButton
            onClick={() => {
              setState(0);
            }}
          >
            <ArrowBack />
          </IconButton>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab label="รายละเอียด" />
            <Tab label="รายงาน" />
            <Tab label="คูปอง" />
            <Tab label="Qrcode Generator" />
          </Tabs>
        </Toolbar>
      </AppBar>
      {stateContent()}
    </div>
  );
};

export default ActivityDetail;
