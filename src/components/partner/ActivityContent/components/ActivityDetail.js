import React, { useState } from 'react';
import { IconButton, AppBar, Tabs, Tab, Toolbar } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';

import { post } from 'utils/request';
import Detail from './activitydetail/Detail';
import Announcement from './activitydetail/Announcement';
import UserReport from './activitydetail/UserReport';
import Report from './activitydetail/Report';
import Coupon from './activitydetail/Coupon';
import QrcodeGenerator from './activitydetail/QrcodeGenerator';

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
    senderAddress: false,
  });

  const editActivity = async (data, reset) => {
    loadingTrue();
    try {
      const res = await post(
        `/api/partners/editactivity/${activityDetail._id}`,
        data
      );
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
          <div>
            <Report />
          </div>
        );
      case 1:
        return (
          <div style={{ width: 800, margin: 'auto' }}>
            <Detail
              activityDetail={activityDetail}
              editActivity={editActivity}
              editMode={editMode}
              setEditMode={setEditMode}
            />
          </div>
        );
      case 2:
        return (
          <UserReport
            loadingFalse={loadingFalse}
            loadingTrue={loadingTrue}
            activityDetail={activityDetail}
          />
        );
      case 3:
        return (
          <Coupon activityDetail={activityDetail} editActivity={editActivity} />
        );
      case 4:
        return <QrcodeGenerator activityDetail={activityDetail} />;
      case 5:
        return (
          <Announcement
            activityDetail={activityDetail}
            setActivityDetail={setActivityDetail}
          />
        );
      default:
        return <div>Content is Not Found</div>;
    }
  };

  return (
    <div>
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
            <Tab label="รายงาน" />
            <Tab label="รายละเอียด" />
            <Tab label="ผู้สมัคร" />
            <Tab label="คูปอง" />
            <Tab label="Qrcode Generator" />
            <Tab label="ประกาศ" />
          </Tabs>
        </Toolbar>
      </AppBar>
      {stateContent()}
    </div>
  );
};

export default ActivityDetail;
