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
        height: 400,
      }}
    >
      <CardContent>
        <Avatar
          style={{
            width: 120,
            height: 120,
            margin: 'auto',
          }}
          src={require('../../../../../public/assets/icon/ramble256.png')}
        />
        <p className={styles.statLabel}>ผู้ใช้งาน</p>
        <p className={styles.statValue}>{data.allUsers}</p>
      </CardContent>
      <Divider light />
      <Box display={'flex'}>
        <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
          <p className={styles.statLabel}>ผู้ชาย</p>
          <p className={styles.statValue}>{data.maleUsers}</p>
        </Box>
        <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
          <p className={styles.statLabel}>ผู้หญิง</p>
          <p className={styles.statValue}>{data.femaleUsers}</p>
        </Box>
      </Box>
    </Card>
  );
});

export default RegisteredReport;
