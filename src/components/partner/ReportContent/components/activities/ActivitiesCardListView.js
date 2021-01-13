import React from 'react';
import NoSsr from '@material-ui/core/NoSsr';
import GoogleFontLoader from 'react-google-font-loader';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import { Row, Item } from '@mui-treasury/components/flex';
import { Info, InfoSubtitle, InfoTitle } from '@mui-treasury/components/info';
import { useNewsInfoStyles } from '@mui-treasury/styles/info/news';
import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';
import { useGutterBorderedGridStyles } from '@mui-treasury/styles/grid/gutterBordered';
import moment from 'moment';
import 'moment/locale/th';
import { Hidden } from '@material-ui/core';
moment.locale('th');

const useStyles = makeStyles(({ palette }) => ({
  card: {
    position: 'relative',
    boxShadow: '0 8px 24px 0 rgba(0,0,0,0.12)',
    overflow: 'visible',
    borderRadius: '1.5rem',
    transition: '0.4s',
    marginBottom: 20,
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
  avatar: {
    width: 60,
    height: 60,
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
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
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
  statLabel: {
    fontSize: 18,
    color: palette.grey[500],
    fontWeight: 500,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    margin: 0,
  },
  statValue: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 4,
    letterSpacing: '1px',
    lineHeight: 0.8,
    textAlign: 'center',
  },
}));

const ActivitiesCard = React.memo(function News3Card({
  activity,
  setState,
  setActivityDetail,
}) {
  const styles = useStyles();
  const borderedGridStyles = useGutterBorderedGridStyles({
    borderColor: 'rgba(0, 0, 0, 0.08)',
    height: '50%',
  });
  const activityState = (state) => {
    switch (state) {
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
    <Card
      className={styles.card}
      onClick={() => {
        setActivityDetail(activity);
        setState(1);
      }}
    >
      <Row className={styles.author} m={0} gap={2} bgcolor={'common.white'}>
        <Avatar className={styles.avatar} src={activity.activity_picture_url} />
        <Info position={'middle'} useStyles={useNewsInfoStyles}>
          {activityState(activity.state)}
          <InfoTitle>{activity.location.province}</InfoTitle>
          <InfoTitle>{activity.location.place_name}</InfoTitle>
          <InfoSubtitle>
            {moment(activity.actual_date).format('DD MMMM YYYY')}
          </InfoSubtitle>
        </Info>

        <Hidden smDown>
          <Card>
            <Box display={'flex'}>
              <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
                <p className={styles.statLabel}>ผู้สมัคร</p>
                <p className={styles.statValue}>
                  {activity.report_infomation.participant_number}
                </p>
              </Box>
              <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
                <p className={styles.statLabel}>ผู้ชาย</p>
                <p className={styles.statValue}>
                  {activity.report_infomation.participant_male_number}
                </p>
              </Box>
              <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
                <p className={styles.statLabel}>ผู้หญิง</p>
                <p className={styles.statValue}>
                  {activity.report_infomation.participant_female_number}
                </p>
              </Box>
            </Box>
          </Card>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
              <p className={styles.statLabel}>รายได้ทั้งหมด</p>
              <p className={styles.statValue}>
                {activity.courses.reduce(
                  (sum, item) => sum + item.register_no * item.price,
                  0
                )}
              </p>
            </Box>
          </div>
        </Hidden>
      </Row>
    </Card>
  );
});
export default ActivitiesCard;
