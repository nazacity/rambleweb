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
import BackButton from './layout/BackButton2';

const Activity = () => {
  const [registerDialogOpen, setRegisterDialogOpen] = useState(false);
  const [paymentDialogOpen, setPaymentDialogOpen] = useState(false);
  const [userActivity, setUserActivity] = useState({
    state: 'unregister',
  });
  const activityDetail = useSelector((state) => state.line.activity);

  const user_activities = useSelector(
    (state) => state.line.user.user_activities
  );

  const checkUserActivities = () => {
    const checkActivity = user_activities.find(
      (item) =>
        item.activity.id._id === activityDetail._id ||
        item.activity.id === activityDetail._id
    );
    if (checkActivity) {
      setUserActivity(checkActivity);
    } else {
      setUserActivity({
        state: 'unregister',
      });
    }
  };

  useEffect(() => {
    checkUserActivities();
  }, [user_activities, activityDetail]);

  useEffect(() => {
    if (userActivity.state === 'waiting_payment') {
      setTimeout(() => {
        setPaymentDialogOpen(true);
      }, 500);
    }
  }, [userActivity]);

  const handleRegisterDialogOpen = () => {
    setRegisterDialogOpen(true);
  };

  const handleRegisterDialogClose = () => {
    setRegisterDialogOpen(false);
  };

  const handlePaymentDialogOpen = () => {
    setPaymentDialogOpen(true);
  };

  const handlePaymentDialogClose = () => {
    setPaymentDialogOpen(false);
  };
  console.log(userActivity.state);

  const handleButton = () => {
    if (userActivity.state === 'waiting_payment') {
      handlePaymentDialogOpen();
    } else if (userActivity.state === 'upcoming') {
    } else if (userActivity.state === 'unregister') {
      handleRegisterDialogOpen();
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <BackButton setUserActivity={setUserActivity} />
      <Banner
        activityDetail={activityDetail}
        buttonOnClick={handleButton}
        userActivity={userActivity}
      />
      <div
        style={{
          padding: 10,
          boxShadow: '0px 5px 5px 0px rgba(0,0,0,0.2)',
          width: '100vw',
        }}
      >
        <Location activityDetail={activityDetail} />
      </div>

      <div style={{ padding: '0 20px', width: '100vw' }}>
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

      <div style={{ marginTop: 20 }}>
        <ButtonRegister onClick={handleButton} userActivity={userActivity} />
      </div>

      {userActivity.state === 'waiting_payment' && (
        <Payment
          open={paymentDialogOpen}
          handleClose={handlePaymentDialogClose}
          userActivity={userActivity}
          activity={activityDetail}
        />
      )}
      <div style={{ height: 100 }} />
      <RegisterDialog
        userActivity={userActivity}
        setUserActivity={setUserActivity}
        open={registerDialogOpen}
        handleClose={handleRegisterDialogClose}
      />
    </div>
  );
};

export default Activity;
