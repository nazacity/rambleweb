import { Avatar, Typography } from '@material-ui/core';
import React, { useState } from 'react';
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
import { useSelector } from 'react-redux';

const Activity = () => {
  const [registerDialogOpen, setRegisterDialogOpen] = useState(false);
  const activityDetail = useSelector((state) => state.line.activity);

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
      />
      <div
        style={{ padding: 10, boxShadow: '0px 5px 5px 0px rgba(0,0,0,0.2)' }}
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
      <div style={{ marginTop: 20 }}>
        <ButtonRegister onClick={handleRegisterDialogOpen} />
      </div>
      <div style={{ height: 100 }} />
      <RegisterDialog
        open={registerDialogOpen}
        handleClose={handleRegisterDialogClose}
      />
    </div>
  );
};

export default Activity;
