import React, { useState, useEffect } from 'react';
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
import axios from 'axios';
import { api } from 'api/api';
import Head from 'next/head';
import logo from '../../public/assets/icon/ramble144.png';

const index = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const activityDetail = useSelector((state) => state.line.activity);
  const handleLiff = async () => {
    // dispatch(setLoading(false)); // delete after finishing
    try {
      await liff.init({ liffId: '1655591354-8d5Zzbm5' });

      // const profile = await liff.getProfile();

      // const res = await axios.post(`${api}/users/lineId`, {
      //   lineId: profile.userId,
      //   user_picture_url: profile.pictureUrl,
      // });

      const res = await axios.post(`${api}/users/lineId`, {
        lineId: 'U83584e6690b2d22b4a604ac227348d9a',
        user_picture_url:
          'https://profile.line-scdn.net/0hDrAvGHgcG118DzLCHJVkCkBKFTALIR0VBG9WaVgIQ2tWawhZFW5UMl0GQzkBbQleRDtRPVgHRzoG',
      });

      if (res.data.message === 'No user is found') {
        dispatch(
          setLineUser({
            type: 'line',
            // lineId: profile.userId,
            // user_picture_url: profile.pictureUrl,
            // display_name: profile.displayName,
            lineId: 'U83584e6690b2d22b4a604ac227348d9a',
            user_picture_url:
              'https://profile.line-scdn.net/0hDrAvGHgcG118DzLCHJVkCkBKFTALIR0VBG9WaVgIQ2tWawhZFW5UMl0GQzkBbQleRDtRPVgHRzoG',
            display_name: 'warodom',
          })
        );
      } else {
        dispatch(
          setLineUser({
            type: 'ramble',
            ...res.data.user,
          })
        );
        Cookies.set('accessToken', res.data.token);
      }

      dispatch(setLoading(false));
    } catch (error) {
      console.log(error);
      dispatch(setLoading(false));
    }
  };

  const getActivityById = async (activityId) => {
    try {
      const res = await axios.get(
        `${api}/api/everyone/getactivitybyid/${activityId}`
      );

      if (res.status === 200) {
        dispatch(setActivity(res.data.data));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const queryString = decodeURIComponent(window.location.search).replace(
    '?liff.state=',
    ''
  );
  const params = new URLSearchParams(queryString);
  const activityId = params.get('activity');

  useEffect(() => {
    if (activityId) {
      getActivityById(activityId);
    }
  }, [router]);

  return (
    <div>
      <Head>
        <title>
          {activityDetail.title
            ? activityDetail.title
            : 'Ramble Sharing community'}
        </title>
      </Head>
      <Script
        url="https://static.line-scdn.net/liff/edge/2.1/sdk.js"
        onLoad={() => handleLiff()}
      />
      {!activityId && <ActivitiesBoard />}
      {activityId && <ActivityDetail />}
      <BottomNavbar />
    </div>
  );
};

export default index;
