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
import axios from 'axios';
import { api } from 'api/api';

const index = () => {
  const activity = useSelector((state) => state.line.activity);
  const dispatch = useDispatch();
  const router = useRouter();
  const handleLiff = async () => {
    // dispatch(setLoading(false)); // delete after finishing
    try {
      await liff.init({ liffId: '1655591354-8d5Zzbm5' });

      const profile = await liff.getProfile();
      // const res = await axios.post(`${api}/users/lineId`, {
      //   lineId: 'U83584e6690b2d22b4a604ac227348d9a',
      //   user_picture_url:
      //     'https://profile.line-scdn.net/0hDrAvGHgcG118DzLCHJVkCkBKFTALIR0VBG9WaVgIQ2tWawhZFW5UMl0GQzkBbQleRDtRPVgHRzoG',
      // });

      const res = await axios.post(`${api}/users/lineId`, {
        lineId: profile.userId,
        user_picture_url: profile.pictureUrl,
      });

      if (res.data.message === 'No user is found') {
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
            ...res.data.user,
          })
        );
        Cookies.set('accessToken', res.token);
      }

      dispatch(setLoading(false));
    } catch (error) {
      console.log(error);
      dispatch(setLoading(false));
    }
  };

  const getActivityById = async () => {
    try {
      const res = await axios.get(
        `${api}/api/everyone/getactivitybyid/${router.query.activity}`
      );

      if (res.status === 200) {
        dispatch(setActivity(res.data.data));
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
      {router.query.activity && <ActivityDetail />}
      <BottomNavbar />
    </div>
  );
};

export default index;
