import React, { useState, useEffect } from 'react';
import { post } from 'utils/request';
import Cookies from 'js-cookie';
import Script from 'react-load-script';
import { useRouter } from 'next/router';
import { setLoading } from '../../redux/actions/layoutActions';
import { useDispatch } from 'react-redux';
import { Typography, Avatar } from '@material-ui/core';
import logo from '../../public/assets/icon/ramble256.png';

const index = () => {
  const [state, setState] = useState({
    test: '',
  });
  const [user, setUser] = useState({
    test: '',
  });
  const dispatch = useDispatch();
  const router = useRouter();
  const handleLiff = async () => {
    dispatch(setLoading(false));
    let accessToken;
    await liff.init({ liffId: '1655591354-8d5Zzbm5' });
    accessToken = await liff.getAccessToken();
    const profile = await liff.getProfile();
    setUser(profile);
    if (accessToken) {
      Cookies.set('accessToken', accessToken);
      const res = await post('/api/everyone/getuserfromline', {
        accessToken: accessToken,
      });

      if (res.status === 200) {
        console.log(res.data);
      }
    }
  };

  useEffect(() => {
    setState(router.query);
  }, [router]);

  return (
    <div>
      <Script
        url="https://static.line-scdn.net/liff/edge/2.1/sdk.js"
        onLoad={() => handleLiff()}
      />
      <div style={{ height: 100 }}>
        <Typography variant="h1">{state.test}</Typography>
      </div>
      <Avatar src={user.pictureUrl ? user.pictureUrl : logo} />
      {user.displayName}
    </div>
  );
};

export default index;
