import React from 'react';
import BannerWrapper from '../Banner/banner.style';
import { Button, Typography, Hidden } from '@material-ui/core';
import { LocalizationContext } from '../../../pages/_app';
import Link from 'Link';

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
        height: '100vh',
      }}
    >
      <Hidden smDown>
        <img src="./assets/logo/ramblewhite.png" style={{ height: 150 }} />
        <div style={{ width: '40vw', margin: '100px auto' }}>
          {/* <Typography variant="h4" style={{ color: '#fff', marginBottom: 50 }}>
            {t('contact.tel')} 0881493995
          </Typography> */}
          <Typography
            variant="h4"
            style={{ color: '#fff', textAlign: 'center' }}
          >
            {t('contact.email')} ramblemarathon@gmail.com
          </Typography>
        </div>
      </Hidden>
      <Hidden mdUp>
        <img src="./assets/logo/ramblewhite.png" style={{ width: '90vw' }} />
        <div style={{ width: '90vw', margin: '30px auto' }}>
          {/* <Link href="tel:0881493995">
            <Typography variant="body1" style={{ color: '#fff' }}>
              {t('contact.tel')} 088-149-3995
            </Typography>
          </Link> */}
          <Typography
            variant="body1"
            style={{ color: '#fff', textAlign: 'center' }}
          >
            {t('contact.email')} ramblemarathon@gmail.com
          </Typography>
        </div>
      </Hidden>
    </div>
  );
};

export default index;
