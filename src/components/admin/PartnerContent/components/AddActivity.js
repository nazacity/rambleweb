import React, { useState } from 'react';
import { IconButton, Button } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import Banner from './addactivity/Banner';
import Title from './addactivity/Title';
import Location from './addactivity/Location';
import Timeline from './addactivity/Timeline';
import DateInfo from './addactivity/DateInfo';
import CourseInfo from './addactivity/CourseInfo';
import Size from './addactivity/Size';
import Rules from './addactivity/Rules';
import Rules1 from './addactivity/Rules1';
import MoreDetail from './addactivity/MoreDetail';
import { useForm, Controller } from 'react-hook-form';
import ShirtStyle from './addactivity/ShirtStyle';
import ActivityDetail from './addactivity/ActivityPreview';
import Condition from './addactivity/Condition';
import Gifts from './addactivity/Gifts';
import SenderAddress from './addactivity/SenderAddress';
import Contact from './addactivity/Contact';
import { post } from 'utils/request';

import moment from 'moment';
import 'moment/locale/th';

moment.locale('th');

const defaultValues = {
  id: '',
  partner: '',
  activity_picture_url: '',
  title: '',
  sub_title: '',
  description: '',
  location: {
    lat: 0,
    lng: 0,
    province: '',
    place_name: '',
  },
  actual_date: new Date(),
  register_start_date: new Date(),
  register_end_date: new Date(),
  courses: [],
  timeline: [],
  rules: [],
  rules1: '',
  more_detail: '',
  shirt_detail: [],
  size: [],
  condition: '',
  gifts: [],
  senderAddress: {
    name: '',
    address: '',
    province: '',
    zip: '',
    phone_number: '',
  },
  contact: {
    phone_number: '',
    line: '',
  },
};

const AddActivity = ({
  setState,
  partnerId,
  loadingTrue,
  loadingFalse,
  getActivitiesById,
}) => {
  const {
    register,
    handleSubmit,
    unregister,
    control,
    errors,
    reset,
  } = useForm({ defaultValues });
  const [activityDetail, setActivityDetail] = useState({
    activity_picture_url: '',
    actual_date: new Date(),
    register_start_date: new Date(),
    register_end_date: new Date(),
  });
  const [contentState, setContentState] = useState(0);
  const onSubmit = async (data) => {
    // console.log(data.more_detail);
    setActivityDetail({ ...activityDetail, ...data });
    setContentState(1);
  };

  const handleBack = () => {
    reset(activityDetail);
    setContentState(0);
  };

  const handleCreateActivity = async () => {
    loadingTrue();
    try {
      const courses = activityDetail.courses.map((item, index) => {
        return { ...item, id: `${index + 1}` };
      });
      const timeline = activityDetail.timeline.map((item, index) => {
        return { ...item, id: `${index + 1}` };
      });
      const rules = activityDetail.rules.map((item, index) => {
        const detail = item.detail.map((item, index) => {
          return { ...item, id: `${index + 1}` };
        });
        return { ...item, id: `${index + 1}`, detail: detail };
      });

      const shirt_detail = activityDetail.shirt_detail.map((item, index) => {
        return { ...item, id: `${index + 1}` };
      });
      const size = activityDetail.size.map((item, index) => {
        return { ...item, id: `${index + 1}`, size: item.size.toUpperCase() };
      });

      let gifts = [];
      if (activityDetail.gifts[0].description !== '') {
        gifts = activityDetail.gifts.map((item, index) => {
          if (!item) {
          } else {
            return { ...item, id: `${index + 1}` };
          }
        });
      }

      const data = {
        partner: partnerId,

        // activity information
        activity_picture_url: activityDetail.activity_picture_url,
        title: activityDetail.title,
        sub_title: activityDetail.sub_title,
        description: activityDetail.description,
        location: activityDetail.location,
        actual_date: activityDetail.actual_date,
        register_start_date: activityDetail.register_start_date,
        register_end_date: activityDetail.register_end_date,

        courses: courses,

        timeline: timeline,

        rules: rules,
        rules1: activityDetail.rules1,

        more_detail: activityDetail.more_detail,

        shirt_detail: shirt_detail,
        size: size,
        condition: activityDetail.condition,
        gifts: activityDetail.gifts,
        senderAddress: activityDetail.senderAddress,
        contact: activityDetail.contact,
      };

      const res = await post('/api/employees/createactivity', data);
      if (res.status === 201) {
        await getActivitiesById();
        setActivityDetail({
          ...defaultValues,
        });
        setState(0);
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
      {contentState === 0 && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Banner
            activityDetail={activityDetail}
            setActivityDetail={setActivityDetail}
          />
          <Title control={control} errors={errors} />
          <Location control={control} errors={errors} />
          <Contact control={control} errors={errors} />
          <DateInfo
            activityDetail={activityDetail}
            setActivityDetail={setActivityDetail}
          />
          <CourseInfo
            control={control}
            errors={errors}
            unregister={unregister}
            activityDetail={activityDetail}
          />
          <Timeline
            control={control}
            errors={errors}
            unregister={unregister}
            activityDetail={activityDetail}
          />
          <Gifts
            control={control}
            errors={errors}
            unregister={unregister}
            activityDetail={activityDetail}
          />
          <ShirtStyle
            control={control}
            errors={errors}
            unregister={unregister}
            activityDetail={activityDetail}
          />
          <Size
            control={control}
            errors={errors}
            unregister={unregister}
            activityDetail={activityDetail}
          />
          <Rules1
            control={control}
            errors={errors}
            unregister={unregister}
            activityDetail={activityDetail}
          />
          <Rules
            control={control}
            errors={errors}
            unregister={unregister}
            activityDetail={activityDetail}
          />
          <MoreDetail
            control={control}
            errors={errors}
            unregister={unregister}
            activityDetail={activityDetail}
          />
          <Condition
            control={control}
            errors={errors}
            unregister={unregister}
            activityDetail={activityDetail}
          />
          <SenderAddress
            control={control}
            errors={errors}
            unregister={unregister}
            activityDetail={activityDetail}
          />
          <Button type="submit" variant="contained">
            Preview
          </Button>
        </form>
      )}
      {contentState === 1 && (
        <div>
          <ActivityDetail activityDetail={activityDetail} />
          <div style={{ display: 'flex' }}>
            <Button onClick={handleBack} variant="contained">
              Edit
            </Button>
            <Button onClick={handleCreateActivity} variant="contained">
              Confirm
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddActivity;
