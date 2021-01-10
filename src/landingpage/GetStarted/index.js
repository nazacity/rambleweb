import React from 'react';
import BannerWrapper from '../Banner/banner.style';
import { Button, Typography, Hidden } from '@material-ui/core';
import { LocalizationContext } from '../../../pages/_app';

const index = () => {
  const { t } = React.useContext(LocalizationContext);
  return (
    <div
      id="getstarted"
      style={{
        backgroundImage:
          'linear-gradient(   139deg,rgb(100, 43, 115) 0%,rgb(198, 66, 110) 100%)',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: 100,
        paddingBottom: 100,
      }}
    >
      <Hidden smDown>
        <img src="./assets/logo/ramblewhite.png" style={{ height: 150 }} />
        <div style={{ width: '40vw', margin: '100px auto' }}>
          <Typography
            variant="h2"
            style={{ color: '#fff', textAlign: 'center', marginBottom: 50 }}
          >
            {t('getstarted.getstart')}
          </Typography>
          <Typography
            variant="h4"
            style={{ color: '#fff', textAlign: 'center' }}
          >
            {t('getstarted.title')}
          </Typography>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            variant="contained"
            color="primary"
            style={{
              backgroundColor: 'rgba(0,0,0,0.6)',
              marginRight: 30,
              borderRadius: 10,
            }}
          >
            <img
              src="./assets/button/applystore.png"
              alt="ramble apple store"
              style={{ width: 200 }}
            />
          </Button>
          <Button
            variant="contained"
            color="primary"
            style={{ backgroundColor: 'rgba(0,0,0,0.6)', borderRadius: 10 }}
          >
            <img
              src="./assets/button/googleplay.png"
              alt="ramble apple store"
              style={{ width: 200 }}
            />
          </Button>
        </div>
      </Hidden>
      <Hidden mdUp>
        <img src="./assets/logo/ramblewhite.png" style={{ width: '90vw' }} />
        <div style={{ width: '90vw', margin: '30px auto' }}>
          <Typography
            variant="h2"
            style={{
              color: '#fff',
              textAlign: 'center',
              marginBottom: 20,
              fontSize: 30,
            }}
          >
            {t('getstarted.getstart')}
          </Typography>
          <Typography
            variant="h4"
            style={{ color: '#fff', textAlign: 'center', fontSize: 18 }}
          >
            {t('getstarted.title')}
          </Typography>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            variant="contained"
            color="primary"
            style={{
              backgroundColor: 'rgba(0,0,0,0.6)',
              marginRight: 10,
              borderRadius: 10,
            }}
          >
            <img
              src="./assets/button/applystore.png"
              alt="ramble apple store"
              style={{ width: 150 }}
            />
          </Button>
          <Button
            variant="contained"
            color="primary"
            style={{ backgroundColor: 'rgba(0,0,0,0.6)', borderRadius: 10 }}
          >
            <img
              src="./assets/button/googleplay.png"
              alt="ramble apple store"
              style={{ width: 150 }}
            />
          </Button>
        </div>
      </Hidden>
    </div>
  );
};

export default index;