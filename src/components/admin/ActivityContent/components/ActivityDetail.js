import React, { useState } from 'react';
import { IconButton } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import Banner from '../../PartnerContent/components/editactivity/Banner';
import Title from '../../PartnerContent/components/editactivity/Title';
import Location from '../../PartnerContent/components/editactivity/Location';
import DateInfo from '../../PartnerContent/components/editactivity/DateInfo';

import CourseInfo from '../../PartnerContent/components/editactivity/CourseInfo';
import TimelineForm from '../../PartnerContent/components/editactivity/TimelineForm';
import ShirtStyle from '../../PartnerContent/components/editactivity/ShirtStyle';
import Size from '../../PartnerContent/components/editactivity/Size';
import Rules from '../../PartnerContent/components/editactivity/Rules';
import Rules1 from '../../PartnerContent/components/editactivity/Rules1';
import MoreDetail from '../../PartnerContent/components/editactivity/MoreDetail';
import Condition from '../../PartnerContent/components/editactivity/Condition';
import Gifts from '../../PartnerContent/components/editactivity/Gifts';
import SenderAddress from '../../PartnerContent/components/editactivity/SenderAddress';
import { post } from 'utils/request';

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
        `/api/employees/editactivity/${activityDetail._id}`,
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

  return (
    <div
      style={{
        width: 600,
        padding: 20,
        alignSelf: 'center',
        margin: 'auto',
      }}
    >
      <IconButton
        onClick={() => {
          setState(0);
        }}
        style={{ marginBottom: 20 }}
      >
        <ArrowBack />
      </IconButton>
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
    </div>
  );
};

export default ActivityDetail;
