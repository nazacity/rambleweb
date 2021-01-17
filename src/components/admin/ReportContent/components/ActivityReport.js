import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import { useFadedShadowStyles } from '@mui-treasury/styles/shadow/faded';
import { useGutterBorderedGridStyles } from '@mui-treasury/styles/grid/gutterBordered';

const useStyles = makeStyles(({ palette }) => ({
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: '0.5px',
    marginTop: 8,
    marginBottom: 0,
  },
  subheader: {
    fontSize: 14,
    color: palette.grey[500],
    marginBottom: '0.875em',
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
  },
}));

export const RegisteredReport = React.memo(function ProfileCard({ data }) {
  const styles = useStyles();
  const shadowStyles = useFadedShadowStyles();
  const borderedGridStyles = useGutterBorderedGridStyles({
    borderColor: 'rgba(0, 0, 0, 0.08)',
    height: '50%',
  });
  return (
    <Card
      className={shadowStyles.root}
      style={{
        borderRadius: 12,
        textAlign: 'center',
        height: '100%',
      }}
    >
      <CardContent>
        <p className={styles.statLabel}>กิจกรรมทั้งหมด</p>
        <p className={styles.statValue}>{data.allActivities}</p>
      </CardContent>
      <Divider light />
      <Box display={'flex'}>
        <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
          <p className={styles.statLabel}>ก่อนเปิดรับสมัคร</p>
          <p className={styles.statValue}>{data.pre_registerActivities}</p>
        </Box>
        <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
          <p className={styles.statLabel}>เปิดรับสมัคร</p>
          <p className={styles.statValue}>{data.registeringActivities}</p>
        </Box>
      </Box>
      <Divider light />
      <Box display={'flex'}>
        <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
          <p className={styles.statLabel}>ปิดรับสมัคร</p>
          <p className={styles.statValue}>{data.end_registerActivities}</p>
        </Box>
        <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
          <p className={styles.statLabel}>วันงาน</p>
          <p className={styles.statValue}>{data.actual_dateActivities}</p>
        </Box>
      </Box>
      <Divider light />
      <Box display={'flex'}>
        <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
          <p className={styles.statLabel}>สิ้นสุด</p>
          <p className={styles.statValue}>{data.finishedActivities}</p>
        </Box>
        <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
          <p className={styles.statLabel}>ยกเลิก</p>
          <p className={styles.statValue}>{data.cancelActivities}</p>
        </Box>
      </Box>
    </Card>
  );
});

export default RegisteredReport;
