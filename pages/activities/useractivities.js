import React from 'react';
import axios from 'axios';
import { api } from 'api/api';
import BottomNavbar from 'components/activities/BottomNavbar';
import { setActivity, setLineUser } from '../../redux/actions/lineAction';
import { useDispatch, useSelector } from 'react-redux';
import Script from 'react-load-script';
import { setLoading } from '../../redux/actions/layoutActions';
import Cookies from 'js-cookie';
import UserActivity from 'components/activities/UserActivity';

const useractivities = () => {
  const dispatch = useDispatch();
  const handleLiff = async () => {
    // dispatch(setLoading(false)); // delete after finishing
    try {
      await liff.init({ liffId: '1655591354-8d5Zzbm5' });

      const profile = await liff.getProfile();
      const res = await axios.post(`${api}/users/lineId`, {
        lineId: profile.userId,
        user_picture_url: profile.pictureUrl,
      });
      //   const res = await axios.post(`${api}/users/lineId`, {
      //     lineId: 'U83584e6690b2d22b4a604ac227348d9a',
      //     user_picture_url:
      //       'https://profile.line-scdn.net/0hDrAvGHgcG118DzLCHJVkCkBKFTALIR0VBG9WaVgIQ2tWawhZFW5UMl0GQzkBbQleRDtRPVgHRzoG',
      //   });

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
  return (
    <div>
      <Script
        url="https://static.line-scdn.net/liff/edge/2.1/sdk.js"
        onLoad={() => handleLiff()}
      />
      <UserActivity />
      <BottomNavbar />
    </div>
  );
};

export default useractivities;
