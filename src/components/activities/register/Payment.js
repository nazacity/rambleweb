import { Typography, IconButton, Grid, Button } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import React, { useState, useEffect, Fragment } from 'react';
import { post } from 'utils/request';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import { useSelector } from 'react-redux';
import Fade from 'react-reveal/Fade';
import BannerWrapper, {
  ButtonGroup,
  VideoWrapper,
  BannerWrapper1,
  BannerWrapper2,
} from './banner.style';
import bannerImg from '../../../../public/assets/screen/mockup1.png';
import activity1 from '../../../../public/assets/screen/activity1.png';
import activity2 from '../../../../public/assets/screen/activity2.png';
import activity3 from '../../../../public/assets/screen/activity3.png';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Payment = ({ userActivity, activity, open, handleClose }) => {
  // const classes = useStyles();
  //   const [qrcode, setQrcode] = useState('');

  //   const getQrcode = async () => {
  //     let amount;
  //     if (userActivity.address._id !== '5ff6600d20ed83388ab4ccbd') {
  //       amount = +userActivity.activity.course.price + 80;
  //       const res = await post(`/api/users/requestpayment/${userActivity._id}`, {
  //         amount: amount,
  //         activity_title: activity.title,
  //         mailfee: true,
  //       });

  //       if (res) {
  //         setQrcode(res.data.qrImage);
  //       }
  //     } else {
  //       amount = +userActivity.activity.course.price;
  //       const res = await post(`/api/users/requestpayment/${userActivity._id}`, {
  //         amount: amount,
  //         activity_title: activity.title,
  //         mailfee: false,
  //       });

  //       if (res) {
  //         setQrcode(res.data.qrImage);
  //       }
  //     }
  //   };

  //   useEffect(() => {
  //     getQrcode();
  //   }, [userActivity]);

  const feature = [
    {
      id: 1,
      icon: './assets/feature/white1.png',
      description: 'Runner community to provide your new experiences',
    },
    {
      id: 2,
      icon: './assets/feature/white2.png',
      description: 'Discover new activities faster',
    },
    {
      id: 3,
      icon: './assets/feature/white3.png',
      description: 'Find new running activities easily',
    },
    {
      id: 4,
      icon: './assets/feature/white4.png',
      description: 'Keep contact with organizer',
    },
    {
      id: 5,
      icon: './assets/feature/white5.png',
      description: 'Alert you when your activities is coming',
    },
    {
      id: 6,
      icon: './assets/feature/white6.png',
      description: 'Store your milestones',
    },
    {
      id: 7,
      icon: './assets/feature/white7.png',
      description: 'Record your history activities',
    },
  ];
  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <div
        style={{
          backgroundImage:
            'linear-gradient(139deg, rgb(100, 43, 115), rgb(198, 66, 110))',
          flex: 1,
        }}
      >
        <div style={{ position: 'absolute', right: 10, top: 10, zIndex: 5000 }}>
          <IconButton onClick={handleClose}>
            <Close style={{ color: 'rgba(255, 255, 255, 0.8)' }} />
          </IconButton>
        </div>
        <Grid
          container
          spacing={2}
          direction="row"
          alignItems="center"
          justify="center"
        >
          <Grid item xs={10} style={{ position: 'relative' }}>
            <Fade up delay={100}>
              <img
                src={bannerImg}
                alt="Banner"
                style={{ width: '100vw', marginLeft: '5vw' }}
              />
            </Fade>
            <Fade up delay={300}>
              <img
                src={activity1}
                alt="activities"
                style={{
                  width: '30vw',
                  position: 'absolute',
                  top: '10vw',
                  left: '13vw',
                }}
              />
            </Fade>
            <Fade up delay={200}>
              <img
                src={activity2}
                alt="activities"
                style={{
                  width: '30vw',
                  position: 'absolute',
                  top: '25vw',
                  left: '30vw',
                }}
              />
            </Fade>
            <Fade up delay={340}>
              <img
                src={activity3}
                alt="activities"
                style={{
                  width: '30vw',
                  position: 'absolute',
                  top: '5vw',
                  left: '42vw',
                }}
              />
            </Fade>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          direction="row"
          alignItems="center"
          justify="center"
        >
          <Grid item xs={10} sm={8}>
            <Fade up delay={200}>
              <Typography
                variant="body1"
                style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: 18,
                  textAlign: 'center',
                }}
              >
                กรุณาดำเนินการชำระเงินต่อที่
              </Typography>
              <Typography
                variant="body1"
                style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: 18,
                  textAlign: 'center',
                  marginBottom: 20,
                }}
              >
                Ramble Application
              </Typography>
            </Fade>
            <Fade up delay={300}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginBottom: 20,
                }}
              >
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
                  style={{
                    backgroundColor: 'rgba(0,0,0,0.6)',
                    borderRadius: 10,
                  }}
                >
                  <img
                    src="./assets/button/googleplay.png"
                    alt="ramble apple store"
                    style={{ width: 150 }}
                  />
                </Button>
              </div>
            </Fade>
          </Grid>
          <Grid item xs={10} sm={8}>
            <Fade up delay={400}>
              <Typography
                variant="body1"
                style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: 18,
                  textAlign: 'center',
                }}
              >
                พบกับฟีเจอร์อำนวยความสะดวกใหม่ๆ มากมาย
              </Typography>
            </Fade>
          </Grid>
        </Grid>
        {feature.map((item) => {
          return (
            <div
              style={{ display: 'flex', margin: 10, alignItems: 'center' }}
              key={item.id}
            >
              <Fade up delay={400}>
                <img src={item.icon} style={{ width: 80, height: 80 }} />
              </Fade>
              <Fade up delay={400}>
                <Typography
                  variant="body1"
                  style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontSize: 18,
                    marginLeft: 10,
                  }}
                >
                  {item.description}
                </Typography>
              </Fade>
            </div>
          );
        })}
      </div>
    </Dialog>
  );
};

export default Payment;
