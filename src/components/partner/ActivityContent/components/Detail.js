import React, { Fragment } from 'react';
import Banner from './editactivity/Banner';
import Title from './editactivity/Title';
import Location from './editactivity/Location';
import DateInfo from './editactivity/DateInfo';

import CourseInfo from './editactivity/CourseInfo';
import TimelineForm from './editactivity/TimelineForm';
import ShirtStyle from './editactivity/ShirtStyle';
import Size from './editactivity/Size';
import Rules from './editactivity/Rules';
import Rules1 from './editactivity/Rules1';
import MoreDetail from './editactivity/MoreDetail';
import Condition from './editactivity/Condition';
import Gifts from './editactivity/Gifts';
import SenderAddress from './editactivity/SenderAddress';

const Detail = ({ activityDetail, editMode, setEditMode, editActivity }) => {
  return (
    <Fragment>
      <Banner
        activityDetail={activityDetail}
        editMode={editMode.banner}
        setEditMode={setEditMode}
        editActivity={editActivity}
      />
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
      <div style={{ margin: 50 }} />
    </Fragment>
  );
};

export default Detail;
