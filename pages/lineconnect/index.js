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

const index = () => {
  // const router = useRouter();
  // const classes = useStyles();
  // const { addToast } = useToasts();
  // const dispatch = useDispatch();
  // const [view, setView] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      dispatch(setLoading(false));
    }, [800]);
  }, []);

  // const client_id = '1655591354';

  // const scope = 'openid%20profile%20email';
  // const state = router.query.user_id;
  // // const redirect = 'http%3A%2F%2Flocalhost:3000/lineconnect';
  // // const redirect_uri = 'http://localhost:3000/lineconnect';
  // const redirect = 'https%3A%2F%2Framble-club.com/lineconnect';
  // const redirect_uri = 'https://ramble-club.com/lineconnect';
  // const lineloginlink = `https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=${client_id}&redirect_uri=${redirect}&state=${state}&scope=${scope}`;
  // const client_secret = '107ae6120b8af1b1fa772ce8d628a21f';

  // useEffect(() => {
  //   if (router.query.code) {
  //     const lineRequest = {
  //       grant_type: 'authorization_code',
  //       code: router.query.code,
  //       redirect_uri: redirect_uri,
  //       client_id: client_id,
  //       client_secret: client_secret,
  //     };
  //     axios
  //       .post(
  //         'https://api.line.me/oauth2/v2.1/token',
  //         queryString.stringify(lineRequest),
  //         {
  //           headers: {
  //             'Content-Type': 'application/x-www-form-urlencoded',
  //           },
  //         }
  //       )
  //       .then(async (res1) => {
  //         if (router.query.state === 'undefined') {
  //           addToast('กรุณาเข้าผ่านแอพพลิเคชั่น Ramble', {
  //             appearance: 'error',
  //             autoDismiss: true,
  //           });
  //         } else {
  //           try {
  //             const res = await everyPost('/api/everyone/lineconnect', {
  //               accessToken: res1.data.access_token,
  //               user_id: router.query.state,
  //             });
  //             if (res.status === 200) {
  //               addToast('เชื่อมต่อกับ Line เรียบร้อย', {
  //                 appearance: 'success',
  //                 autoDismiss: true,
  //               });
  //               // setView(1);
  //               router.push('/lineconnect/successed');
  //             } else if (res.status === 401) {
  //               addToast('กรุณาเชื่อมต่อใหม่อีกครั้ง', {
  //                 appearance: 'error',
  //                 autoDismiss: true,
  //               });
  //               router.push('/lineconnect/failled');
  //             } else {
  //               addToast('กรุณาเชื่อมต่อใหม่อีกครั้ง', {
  //                 appearance: 'error',
  //                 autoDismiss: true,
  //               });
  //               router.push('/lineconnect/failled');
  //             }
  //           } catch (error) {
  //             console.log(error);
  //             addToast('กรุณาเชื่อมต่อใหม่อีกครั้ง', {
  //               appearance: 'error',
  //               autoDismiss: true,
  //             });
  //             router.push('/lineconnect/failled');
  //           }
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // }, [router]);

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
          {view === 0 && (
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
                เพิ่มรับ Feature แจ้งเตือน และอื่นๆ อีกมากมาย
              </Typography>
              <Link href={lineloginlink} style={{ textDecoration: 'none' }}>
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
                  <span style={{ color: '#fff' }}>Login with LINE</span>
                </Button>
              </Link>
            </div>
          )}
          {view === 1 && (
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
          )}
        </div>
      </div> */}
    </div>
  );
};

export default index;
