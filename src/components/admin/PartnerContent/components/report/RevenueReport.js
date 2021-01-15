import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Typography } from '@material-ui/core';
import { useFadedShadowStyles } from '@mui-treasury/styles/shadow/faded';
import cx from 'clsx';
import { ResponsivePie } from '@nivo/pie';
import Box from '@material-ui/core/Box';
import { useGutterBorderedGridStyles } from '@mui-treasury/styles/grid/gutterBordered';

const useStyles = makeStyles(({ palette }) => ({
  card: {
    borderRadius: 12,
    textAlign: 'center',
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

const CourseReport = ({ activityDetail, mobile }) => {
  const styles = useStyles();
  const shadowStyles = useFadedShadowStyles();
  const [data, setData] = useState([]);
  const borderedGridStyles = useGutterBorderedGridStyles({
    borderColor: 'rgba(0, 0, 0, 0.08)',
    height: '50%',
  });
  const convertData = () => {
    const newData = activityDetail.courses.map((item) => {
      return {
        id: item.title,
        label: item.title,
        value: item.revenue ? item.revenue : 0,
      };
    });

    setData(newData);
  };

  useEffect(() => {
    convertData();
  }, []);

  return (
    <Card className={cx(styles.card, shadowStyles.root)}>
      <div style={{ backgroundColor: '#8a1776', padding: 10, height: 50 }}>
        <Typography variant="h5" color="primary" style={{ color: '#fff' }}>
          รายได้
        </Typography>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: mobile ? 'column' : 'row',
        }}
      >
        <div style={{ height: 350, width: 450 }}>
          <ResponsivePie
            data={data}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            colors={{ scheme: 'nivo' }}
            borderWidth={1}
            borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
            radialLabelsSkipAngle={10}
            radialLabelsTextColor="#333333"
            radialLabelsLinkColor={{ from: 'color' }}
            sliceLabelsSkipAngle={10}
            sliceLabelsTextColor="#ffffff"
            defs={[
              {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true,
              },
              {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10,
              },
            ]}
          />
        </div>
        <div>
          {data.map((item) => {
            return (
              <Card style={{ width: 200, margin: 20 }} key={item.id}>
                <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
                  <p className={styles.statLabel}>{item.label}</p>
                  <p className={styles.statValue}>{item.value}</p>
                </Box>
              </Card>
            );
          })}
          <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
            <p className={styles.statLabel}>ค่าส่ง ems</p>
            <p className={styles.statValue}>
              {activityDetail.report_infomation.mailfee
                ? activityDetail.report_infomation.mailfee
                : 0}
            </p>
          </Box>
          <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
            <p className={styles.statLabel}>รายได้ทั้งหมด</p>
            <p className={styles.statValue}>
              {activityDetail.report_infomation.mailfee
                ? data.reduce((sum, item) => sum + item.value, 0) +
                  activityDetail.report_infomation.mailfee
                : data.reduce((sum, item) => sum + item.value, 0)}
            </p>
          </Box>
        </div>
      </div>
    </Card>
  );
};

export default CourseReport;
