import React, { useState, useEffect, Fragment } from 'react';
import ActivityCardDetail from './ActivityCardDetail';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '../../../../redux/actions/layoutActions';
import { CircularProgress, makeStyles } from '@material-ui/core';
import axios from 'axios';
import { api } from 'api/api';
import Cookie from 'js-cookie';
import { get } from 'utils/request';

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
  const classes = useStyles();
  const [firstFetched, setFirstFetched] = useState(false);
  const [activities, setActivities] = useState([]);
  const [page, setPage] = useState(0);
  const [noMore, setNoMore] = useState(false);

  const onLoadMore = async () => {
    if (!noMore) {
      dispatch(setLoading(true));
      setPage(page + 1);
      try {
        const token = Cookie.get('accessToken');

        let res;
        if (token) {
          res = await get(`/api/users/getactivities?skip=${5 * page}&limit=5`);
        } else {
          res = await axios.get(
            `${api}/api/everyone/getactivities?skip=${5 * page}&limit=5`
          );
        }

        if (res.status === 200) {
          if (res.data.length === 0) {
            setNoMore(true);
          } else {
            if (page === 0) {
              setActivities([...res.data]);
            } else {
              setActivities([...activities, ...res.data]);
            }
          }
        }
        setFirstFetched(true);
        dispatch(setLoading(false));
      } catch (error) {
        console.log(error);
        dispatch(setLoading(false));
      }
    }
  };

  useEffect(() => {
    onLoadMore(true);
  }, []);

  if (!firstFetched) {
    return (
      <div
        style={{
          backgroundImage:
            'linear-gradient(   139deg,rgb(100, 43, 115) 0%,rgb(198, 66, 110) 100%)',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingTop: 100,
          paddingBottom: 100,
          height: '100vh',
        }}
      >
        <img
          src={require('../../../../public/assets/logo/ramblewhite.png')}
          style={{ width: '50vw', margin: 50 }}
        />
      </div>
    );
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <InfiniteScroll
        dataLength={activities.length}
        next={onLoadMore}
        hasMore={!noMore}
        loader={
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <div className={classes.root}>
              <CircularProgress
                variant="determinate"
                className={classes.bottom}
                size={20}
                thickness={4}
                value={100}
              />
              <CircularProgress
                variant="indeterminate"
                disableShrink
                className={classes.top}
                classes={{
                  circle: classes.circle,
                }}
                size={20}
                thickness={4}
              />
            </div>
          </div>
        }
        // endMessage={
        //   <p style={{ textAlign: 'center' }}>
        //     <b>Yay! You have seen it all</b>
        //   </p>
        // }
      >
        {activities.map((item, index) => {
          return <ActivityCardDetail key={index} item={item} index={index} />;
        })}
      </InfiniteScroll>
    </div>
  );
};

export default AllActivities;
