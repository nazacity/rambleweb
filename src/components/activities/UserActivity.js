import React, { useState, useEffect, Fragment } from 'react';
import ActivityCardDetail from './useractivity/ActivityCardDetail';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  bottom: {
    color: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  top: {
    color: theme.palette.primary.main,
    animationDuration: '550ms',
    position: 'absolute',
    left: 0,
  },
  circle: {
    strokeLinecap: 'round',
  },
}));

const AllActivities = () => {
  const dispatch = useDispatch();
  const user_activities = useSelector(
    (state) => state.line.user.user_activities
  );

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {user_activities.map((item, index) => {
        if (item.state === 'waiting_payment' || item.state === 'upcoming') {
          return (
            <ActivityCardDetail
              key={index}
              item={item.activity.id}
              index={index}
              state={item.state}
            />
          );
        }
      })}
      <div style={{ marginBottom: 50 }} />
    </div>
  );
};

export default AllActivities;
