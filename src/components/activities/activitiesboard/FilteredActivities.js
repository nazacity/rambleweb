import React, { useState, useEffect, Fragment } from 'react';
import ActivityCardDetail from './ActivityCardDetail';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch } from 'react-redux';
import { setLoading } from '../../../../redux/actions/layoutActions';
import { CircularProgress, makeStyles } from '@material-ui/core';
import axios from 'axios';
import { api } from 'api/api';

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

const FilteredActivities = ({ filteredActivities }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {filteredActivities.map((item, index) => {
        return <ActivityCardDetail key={index} item={item} index={index} />;
      })}
    </div>
  );
};

export default FilteredActivities;
