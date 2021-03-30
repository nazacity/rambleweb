import React, { Fragment } from 'react';
import Banner from '../editactivity/Banner';
import Title from '../editactivity/Title';
import Location from '../editactivity/Location';
import DateInfo from '../editactivity/DateInfo';

import CourseInfo from '../editactivity/CourseInfo';
import Routes from '../editactivity/Routes';
import TimelineForm from '../editactivity/TimelineForm';
import ShirtStyle from '../editactivity/ShirtStyle';
import Size from '../editactivity/Size';
import Rules from '../editactivity/Rules';
import Rules1 from '../editactivity/Rules1';
import MoreDetail from '../editactivity/MoreDetail';
import Condition from '../editactivity/Condition';
import Gifts from '../editactivity/Gifts';
import Contact from '../editactivity/Contact';
import SenderAddress from '../editactivity/SenderAddress';
import { useFadedShadowStyles } from '@mui-treasury/styles/shadow/faded';
import { Card } from '@material-ui/core';

const Detail = ({ activityDetail, editMode, setEditMode, editActivity }) => {
  const shadowStyles = useFadedShadowStyles();
  return (
    <Card
      style={{
        padding: 20,
        borderRadius: 10,
        width: 900,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      className={shadowStyles.root}
    >
      <Banner
        activityDetail={activityDetail}
        editMode={editMode.banner}
        setEditMode={setEditMode}
        editActivity={editActivity}
      />
      <div>
        <Title
          setEditMode={setEditMode}
          editMode={editMode.title}
          activityDetail={activityDetail}
          editActivity={editActivity}
        />
        <Location
          setEditMode={setEditMode}
          editMode={editMode.location}
          activityDetail={activityDetail}
          editActivity={editActivity}
        />
        <Contact
          setEditMode={setEditMode}
          editMode={editMode.contact}
          activityDetail={activityDetail}
          editActivity={editActivity}
        />
        <DateInfo
          setEditMode={setEditMode}
          editMode={editMode.dateinfo}
          activityDetail={activityDetail}
          editActivity={editActivity}
        />
        <CourseInfo
          setEditMode={setEditMode}
          editMode={editMode.courses}
          activityDetail={activityDetail}
          editActivity={editActivity}
        />
        <Routes
          setEditMode={setEditMode}
          editMode={editMode.courses}
          activityDetail={activityDetail}
          editActivity={editActivity}
        />
        <TimelineForm
          setEditMode={setEditMode}
          editMode={editMode.timeline}
          activityDetail={activityDetail}
          editActivity={editActivity}
        />
        <Gifts
          setEditMode={setEditMode}
          editMode={editMode.gifts}
          activityDetail={activityDetail}
          editActivity={editActivity}
        />
        <ShirtStyle
          setEditMode={setEditMode}
          editMode={editMode.shirtstyle}
          activityDetail={activityDetail}
          editActivity={editActivity}
        />
        <Size
          setEditMode={setEditMode}
          editMode={editMode.size}
          activityDetail={activityDetail}
          editActivity={editActivity}
        />
        <Rules
          setEditMode={setEditMode}
          editMode={editMode.rules}
          activityDetail={activityDetail}
          editActivity={editActivity}
        />
        <Rules1
          setEditMode={setEditMode}
          editMode={editMode.rules1}
          activityDetail={activityDetail}
          editActivity={editActivity}
        />
        <MoreDetail
          setEditMode={setEditMode}
          editMode={editMode.moredetail}
          activityDetail={activityDetail}
          editActivity={editActivity}
        />
        <Condition
          setEditMode={setEditMode}
          editMode={editMode.condition}
          activityDetail={activityDetail}
          editActivity={editActivity}
        />
        <SenderAddress
          setEditMode={setEditMode}
          editMode={editMode.senderAddress}
          activityDetail={activityDetail}
          editActivity={editActivity}
        />
      </div>
    </Card>
  );
};

export default Detail;
