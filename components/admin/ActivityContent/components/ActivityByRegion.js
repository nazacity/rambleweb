import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Pagination } from '@material-ui/lab';
import { Grid } from '@material-ui/core';
import { get } from '../../../../src/utils/request';
import ActivitiesCard from './ActivitiesCard';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const ActivityByRegion = ({
  region,
  loadingTrue,
  loadingFalse,
  setState,
  setActivityDetail,
  getActivity,
}) => {
  const classes = useStyles();
  const [activities, setActivities] = useState([]);

  const [page, setPage] = useState(1);
  const [show, setShow] = useState(1);
  const getActivitiesByRegion = async () => {
    loadingTrue();
    try {
      const res = await get(
        `/api/employees/getactivities?skip=${
          page === 1 ? 10 * (page - 1) : 10 * page + 1
        }&limit=11&region=${region}`
      );

      if (res.status === 200) {
        if (page === 1) {
          setActivities([...res.data]);
        } else {
          setActivities([...activities, ...res.data]);
        }
      }
      loadingFalse();
    } catch (error) {
      console.log(error);
      loadingFalse();
    }
  };

  useEffect(() => {
    getActivitiesByRegion();
  }, [page]);

  return (
    <Grid container spacing={3} style={{ padding: 20 }}>
      {activities.slice((show - 1) * 9, show * 9).map((item, index) => {
        return (
          <Grid item xs={4} key={index}>
            <ActivitiesCard activity={item} getActivity={getActivity} />
          </Grid>
        );
      })}
      <Grid container direction="row" justify="center" alignItems="center">
        <Pagination
          count={page + 1}
          color="primary"
          onChange={(e, value) => {
            if (page < value) {
              if (activities.length / 10 > page) {
                setPage(value);
              }
            }
            setShow(value);
          }}
        />
      </Grid>
    </Grid>
  );
};

export default ActivityByRegion;
