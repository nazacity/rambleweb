import React from 'react';
import ActivitiesCard from './activities/ActivitiesCard';
import { Grid, Typography } from '@material-ui/core';

import { activity_state } from 'constants/activity';

const Activities = ({ activities, setState, setActivityDetail }) => {
  const activityState = (state) => {
    switch (state) {
      case 'pre_register':
        return (
          <Grid
            style={{
              display: 'inline-block',
              // fontFamily: "'Sen', sans-serif",
              backgroundColor: '#ffc400',
              borderRadius: '0.5rem',
              padding: '2px 0.5rem',
              color: '#fff',
              marginBottom: '0.5rem',
              padding: 20,
            }}
            item
            xs={12}
          >
            <Typography variant="h4">ก่อนเปิดรับสมัคร</Typography>
          </Grid>
        );
      case 'registering':
        return (
          <Grid
            style={{
              display: 'inline-block',
              // fontFamily: "'Sen', sans-serif",
              backgroundColor: '#64dd17',
              borderRadius: '0.5rem',
              padding: '2px 0.5rem',
              color: '#fff',
              marginBottom: '0.5rem',
              padding: 20,
            }}
            item
            xs={12}
          >
            <Typography variant="h4">ห้วงสมัคร</Typography>
          </Grid>
        );
      case 'end_register':
        return (
          <Grid
            style={{
              display: 'inline-block',
              // fontFamily: "'Sen', sans-serif",
              backgroundColor: '#29b6f6',
              borderRadius: '0.5rem',
              padding: '2px 0.5rem',
              color: '#fff',
              marginBottom: '0.5rem',
              padding: 20,
            }}
            item
            xs={12}
          >
            <Typography variant="h4">ปิดรับสมัคร</Typography>
          </Grid>
        );
      case 'actual_date':
        return (
          <Grid
            style={{
              display: 'inline-block',
              // fontFamily: "'Sen', sans-serif",
              backgroundColor: '#2979ff',
              borderRadius: '0.5rem',
              padding: '2px 0.5rem',
              color: '#fff',
              marginBottom: '0.5rem',
              padding: 20,
            }}
            item
            xs={12}
          >
            <Typography variant="h4">วันงาน</Typography>
          </Grid>
        );
      case 'finished':
        return (
          <Grid
            style={{
              display: 'inline-block',
              // fontFamily: "'Sen', sans-serif",
              backgroundColor: '#ff1744',
              borderRadius: '0.5rem',
              padding: '2px 0.5rem',
              color: '#fff',
              marginBottom: '0.5rem',
              padding: 20,
            }}
            item
            xs={12}
          >
            <Typography variant="h4">สิ้นสุด</Typography>
          </Grid>
        );
      case 'cancel':
        return (
          <Grid
            style={{
              display: 'inline-block',
              // fontFamily: "'Sen', sans-serif",
              backgroundColor: '#3e2723',
              borderRadius: '0.5rem',
              padding: '2px 0.5rem',
              color: '#fff',
              marginBottom: '0.5rem',
              padding: 20,
            }}
            item
            xs={12}
          >
            <Typography variant="h4">ยกเลิก</Typography>
          </Grid>
        );
    }
  };
  return (
    <div>
      {activity_state.map((item) => {
        return (
          <Grid container spacing={3} style={{ padding: 20 }} key={item}>
            {activityState(item)}

            {activities.length > 0 &&
              activities.map((activity) => {
                if (activity.state === item) {
                  return (
                    <Grid key={activity._id} item xs={4}>
                      <ActivitiesCard
                        activity={activity}
                        setState={setState}
                        setActivityDetail={setActivityDetail}
                      />
                    </Grid>
                  );
                }
              })}
          </Grid>
        );
      })}
    </div>
  );
};

export default Activities;
