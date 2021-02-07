import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Button, makeStyles, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { setLoading } from '../../redux/actions/layoutActions';
import lineLogo from '../../public/assets/button/linebutton.png';

// Other
import axios from 'axios';
import Cookies from 'js-cookie';
import queryString from 'query-string';
import Link from 'Link';
import { useToasts } from 'react-toast-notifications';
import { everyPost } from 'utils/request';

const failed = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(setLoading(false));
    }, [800]);
  }, []);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* <div
        style={{
          maxWidth: 600,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <img
          src={require('../../public/assets/logo/ramble.png')}
          style={{ maxWidth: 600, width: '90vw', marginTop: 50 }}
        />
        <div
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              maxWidth: 600,
              width: '100vw',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography
              variant="h6"
              color="primary"
              style={{ textAlign: 'center' }}
            >
              เชื่อมต่อกับ Line
            </Typography>
            <Typography
              variant="h6"
              color="primary"
              style={{ textAlign: 'center', marginBottom: 50 }}
            >
              ล้มเหลวกรุณาลองใหม่อีกครั้ง
            </Typography>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default failed;
