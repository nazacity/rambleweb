import React, { useState, useEffect } from 'react';
import { get, post } from 'utils/request';
import Cookies from 'js-cookie';
import Script from 'react-load-script';
import { useRouter } from 'next/router';
import { setLoading } from '../../redux/actions/layoutActions';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, Avatar } from '@material-ui/core';
import ActivitiesBoard from 'components/activities/ActivitiesBoard';
import ActivityDetail from 'components/activities/ActivityDetail';
import BottomNavbar from 'components/activities/BottomNavbar';
import { setActivity, setLineUser } from '../../redux/actions/lineAction';

const index = () => {
  const activity = useSelector((state) => state.line.activity);
  const dispatch = useDispatch();
  const router = useRouter();
  const handleLiff = async () => {
    dispatch(setLoading(false)); // delete after finishing
    let accessToken;
    await liff.init({ liffId: '1655591354-8d5Zzbm5' });
    accessToken = await liff.getAccessToken();
    const profile = await liff.getProfile();
    if (accessToken) {
      Cookies.set('accessToken', accessToken);
      try {
        const res = await post('/api/everyone/getuserfromlinetoken', {
          accessToken: accessToken,
        });

        if (res.status === 200) {
          if (res.data === 'No user is found') {
            dispatch(
              setLineUser({
                type: 'line',
                lineId: profile.userId,
                user_picture_url: profile.pictureUrl,
                display_name: profile.displayName,
              })
            );
          } else {
            dispatch(
              setLineUser({
                type: 'ramble',
                ...res.data,
              })
            );
          }
        }
        dispatch(setLoading(false));
      } catch (error) {
        console.log(error);
        dispatch(setLoading(false));
      }
    }
  };

  const getActivityById = async () => {
    try {
      const res = await get(
        `/api/everyone/getactivitybyid/${router.query.activity}`
      );

      if (res.status === 200) {
        console.log(res.data);
        dispatch(setActivity(res.data));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (router.query.activity) {
      getActivityById();
    }
  }, [router]);
  return (
    <div>
      <Script
        url="https://static.line-scdn.net/liff/edge/2.1/sdk.js"
        onLoad={() => handleLiff()}
      />
      {!router.query.activity && <ActivitiesBoard />}
      {activity.courses.length > 0 && <ActivityDetail />}
      <BottomNavbar />
    </div>
  );
};

export default index;
