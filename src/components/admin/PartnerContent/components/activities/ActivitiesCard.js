import React from 'react';
import NoSsr from '@material-ui/core/NoSsr';
import GoogleFontLoader from 'react-google-font-loader';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Row, Item } from '@mui-treasury/components/flex';
import { Info, InfoSubtitle, InfoTitle } from '@mui-treasury/components/info';
import { useNewsInfoStyles } from '@mui-treasury/styles/info/news';
import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';

import moment from 'moment';
import 'moment/locale/th';
moment.locale('th');

const useStyles = makeStyles(() => ({
  card: {
    minWidth: 320,
    position: 'relative',
    boxShadow: '0 8px 24px 0 rgba(0,0,0,0.12)',
    overflow: 'visible',
    borderRadius: '1.5rem',
    transition: '0.4s',
    cursor: 'pointer',
    '&:hover': {
      transform: 'translateY(-2px)',
      '& $shadow': {
        bottom: '-1.5rem',
      },
      '& $shadow2': {
        bottom: '-2.5rem',
      },
    },
    '&:before': {
      content: '""',
      position: 'absolute',
      zIndex: 0,
      display: 'block',
      width: '100%',
      bottom: -1,
      height: '100%',
      borderRadius: '1.5rem',
      backgroundColor: 'rgba(0,0,0,0.08)',
    },
  },
  main: {
    overflow: 'hidden',
    borderTopLeftRadius: '1.5rem',
    borderTopRightRadius: '1.5rem',
    zIndex: 1,
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      display: 'block',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(to top, #014a7d, rgba(0,0,0,0))',
    },
  },
  content: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    zIndex: 1,
    padding: '1.5rem 1.5rem 1rem',
  },
  avatar: {
    width: 48,
    height: 48,
  },
  tag: {
    display: 'inline-block',
    // fontFamily: "'Sen', sans-serif",
    backgroundColor: '#ff5dac',
    borderRadius: '0.5rem',
    padding: '2px 0.5rem',
    color: '#fff',
    marginBottom: '0.5rem',
  },
  title: {
    // fontFamily: "'Sen', sans-serif",
    fontSize: '2rem',
    fontWeight: 800,
    color: '#fff',
  },
  author: {
    zIndex: 1,
    position: 'relative',
    borderBottomLeftRadius: '1.5rem',
    borderBottomRightRadius: '1.5rem',
  },
  shadow: {
    transition: '0.2s',
    position: 'absolute',
    zIndex: 0,
    width: '88%',
    height: '100%',
    bottom: 0,
    borderRadius: '1.5rem',
    backgroundColor: 'rgba(0,0,0,0.06)',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  shadow2: {
    bottom: 0,
    width: '72%',
    backgroundColor: 'rgba(0,0,0,0.04)',
  },
}));

const ActivitiesCard = React.memo(function News3Card({
  activity,
  setState,
  setActivityDetail,
}) {
  const styles = useStyles();
  const mediaStyles = useCoverCardMediaStyles();

  const activityState = (state) => {
    switch (state) {
      case 'pre_register':
        return (
          <div
            style={{
              display: 'inline-block',
              // fontFamily: "'Sen', sans-serif",
              backgroundColor: '#ffc400',
              borderRadius: '0.5rem',
              padding: '2px 0.5rem',
              color: '#fff',
              marginBottom: '0.5rem',
            }}
          >
            ก่อนเปิดรับสมัคร
          </div>
        );
      case 'registering':
        return (
          <div
            style={{
              display: 'inline-block',
              // fontFamily: "'Sen', sans-serif",
              backgroundColor: '#64dd17',
              borderRadius: '0.5rem',
              padding: '2px 0.5rem',
              color: '#fff',
              marginBottom: '0.5rem',
            }}
          >
            ห้วงสมัคร
          </div>
        );
      case 'end_register':
        return (
          <div
            style={{
              display: 'inline-block',
              // fontFamily: "'Sen', sans-serif",
              backgroundColor: '#29b6f6',
              borderRadius: '0.5rem',
              padding: '2px 0.5rem',
              color: '#fff',
              marginBottom: '0.5rem',
            }}
          >
            ปิดรับสมัคร
          </div>
        );
      case 'actual_date':
        return (
          <div
            style={{
              display: 'inline-block',
              // fontFamily: "'Sen', sans-serif",
              backgroundColor: '#2979ff',
              borderRadius: '0.5rem',
              padding: '2px 0.5rem',
              color: '#fff',
              marginBottom: '0.5rem',
            }}
          >
            วันงาน
          </div>
        );
      case 'finished':
        return (
          <div
            style={{
              display: 'inline-block',
              // fontFamily: "'Sen', sans-serif",
              backgroundColor: '#ff1744',
              borderRadius: '0.5rem',
              padding: '2px 0.5rem',
              color: '#fff',
              marginBottom: '0.5rem',
            }}
          >
            สิ้นสุด
          </div>
        );
      case 'cancel':
        return (
          <div
            style={{
              display: 'inline-block',
              // fontFamily: "'Sen', sans-serif",
              backgroundColor: '#3e2723',
              borderRadius: '0.5rem',
              padding: '2px 0.5rem',
              color: '#fff',
              marginBottom: '0.5rem',
            }}
          >
            ยกเลิก
          </div>
        );
    }
  };
  return (
    <>
      <NoSsr>
        <GoogleFontLoader fonts={[{ font: 'Sen', weights: [400, 800] }]} />
      </NoSsr>
      <Card
        className={styles.card}
        onClick={() => {
          setActivityDetail(activity);
          setState(1);
        }}
      >
        <Box className={styles.main} minHeight={300} position={'relative'}>
          <CardMedia
            classes={mediaStyles}
            image={activity.activity_picture_url}
          />
          <div className={styles.content}>
            {/* <div className={styles.tag}>Fashion</div> */}
            {activityState(activity.state)}
            <Typography variant={'h2'} className={styles.title}>
              {activity.title}
            </Typography>
          </div>
        </Box>
        <Row
          className={styles.author}
          m={0}
          p={3}
          pt={2}
          gap={2}
          bgcolor={'common.white'}
        >
          {/* <Item>
            <Avatar
              className={styles.avatar}
              src={'https://i.pravatar.cc/300?img=13'}
            />
          </Item> */}
          <Info position={'middle'} useStyles={useNewsInfoStyles}>
            <InfoTitle>{activity.location.province}</InfoTitle>
            <InfoTitle>{activity.location.place_name}</InfoTitle>
            <InfoSubtitle>
              {moment(activity.actual_date).format('DD MMMM YYYY')}
            </InfoSubtitle>
          </Info>
        </Row>
      </Card>
    </>
  );
});
export default ActivitiesCard;
