import { Avatar, Typography } from '@material-ui/core';
import React, { useState, useEffect, Fragment } from 'react';
import Banner from './activitydetail/Banner';
import Title from './activitydetail/Title';
import Location from './activitydetail/Location';
import Courses from './activitydetail/Courses';
import Gifts from './activitydetail/Gifts';
import Shirts from './activitydetail/Shirts';
import Rules from './activitydetail/Rules';
import Rules1 from './activitydetail/Rules1';
import TimelineForm from './activitydetail/TimelineForm';
import Size from './activitydetail/Size';
import DateInfo from './activitydetail/DateInfo';
import ButtonRegister from './activitydetail/ButtonRegister';
import RegisterDialog from './register/RegisterDialog';
import { useDispatch, useSelector } from 'react-redux';
import Payment from './register/Payment';

const Activity = () => {
  const [registerDialogOpen, setRegisterDialogOpen] = useState(false);
  const [userActivity, setUserActivity] = useState({
    _id: '',
  });
  const activityDetail = useSelector((state) => state.line.activity);

  const user_activities = useSelector(
    (state) => state.line.user.user_activities
  );

  const checkUserActivities = () => {
    const checkActivity = user_activities.find(
      (item) => item.activity.id._id === activityDetail._id
    );
    if (checkActivity) {
      setUserActivity(checkActivity);
    }
  };

  useEffect(() => {
    checkUserActivities();
  }, [user_activities, activityDetail]);

  const handleRegisterDialogOpen = () => {
    setRegisterDialogOpen(true);
  };

  const handleRegisterDialogClose = () => {
    setRegisterDialogOpen(false);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Banner
        activityDetail={activityDetail}
        buttonOnClick={handleRegisterDialogOpen}
        userActivity={userActivity._id ? false : true}
      />
      {!userActivity._id && (
        <Fragment>
          <div
            style={{
              padding: 10,
              boxShadow: '0px 5px 5px 0px rgba(0,0,0,0.2)',
            }}
          >
            <Location activityDetail={activityDetail} />
          </div>

          <div style={{ margin: '0 20px' }}>
            <Title activityDetail={activityDetail} />
            <DateInfo activityDetail={activityDetail} />
            <Courses activityDetail={activityDetail} />
            <TimelineForm activityDetail={activityDetail} />
            <Gifts activityDetail={activityDetail} />
            <Shirts activityDetail={activityDetail} />
            <Size activityDetail={activityDetail} />
            <Rules activityDetail={activityDetail} />
            <Rules1 activityDetail={activityDetail} />
          </div>
        </Fragment>
      )}
      {!userActivity._id && (
        <div style={{ marginTop: 20 }}>
          <ButtonRegister onClick={handleRegisterDialogOpen} />
        </div>
      )}
      {userActivity._id && (
        <Payment userActivity={userActivity} activity={activityDetail} />
      )}
      <div style={{ height: 100 }} />
      <RegisterDialog
        open={registerDialogOpen}
        handleClose={handleRegisterDialogClose}
      />
    </div>
  );
};

export default Activity;
