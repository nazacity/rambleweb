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
// 5ff9c31c70d26b7b975ff086
const useStyles = makeStyles((theme) => ({
  loginbutton: {
    backgroundColor: '#00C300',
    border: 'none',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#00E000',
    },
    '&:focus': {
      backgroundColor: '#00B300',
    },
    marginBottom: 100,
    maxWidth: 600,
    width: '90vw',
  },
  loginsubdetail: {
    fontSize: '24px',
  },
}));

const successed = () => {
  const classes = useStyles();
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
      <div
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
              การเชื่อมต่อเรียบร้อย
            </Typography>
            <Typography
              variant="h6"
              color="primary"
              style={{ textAlign: 'center', marginBottom: 40 }}
            >
              กรุณา Add Line Ramble เป็นเพื่อน เพื่อรับ Feature เพิ่มเติมทาง
              Line
            </Typography>
            <Link
              href={'http://line.me/ti/p/~@833qbcov'}
              style={{ textDecoration: 'none' }}
            >
              <Button
                variant="contained"
                color="primary"
                className={classes.loginbutton}
                type="submit"
              >
                <img
                  src={lineLogo}
                  alt="linebutton"
                  style={{ width: 50, height: 50, marginRight: 10 }}
                />
                <span style={{ color: '#fff' }}>Add Friend</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default successed;
