import React, { useState, useEffect } from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Typography } from '@material-ui/core';
import { useFadedShadowStyles } from '@mui-treasury/styles/shadow/faded';
import cx from 'clsx';

const useStyles = makeStyles(({ palette }) => ({
  card: {
    borderRadius: 12,
    textAlign: 'center',
    height: 400,
  },
}));

const CourseReport = ({ activityDetail }) => {
  const styles = useStyles();
  const shadowStyles = useFadedShadowStyles();
  const [data, setData] = useState([]);

  const convertData = () => {
    const newData = activityDetail.courses.map((item) => {
      return {
        course: item.title,
        register_no: item.register_no === 0 ? 0.5 : item.register_no,
      };
    });

    setData(newData);
  };

  useEffect(() => {
    convertData();
  }, []);
  console.log(data);

  return (
    <Card className={cx(styles.card, shadowStyles.root)}>
      <div style={{ backgroundColor: '#8a1776', padding: 10, height: 50 }}>
        <Typography variant="h5" color="primary" style={{ color: '#fff' }}>
          ยอดผู้สมัครตามประเภทการแข่งขัน
        </Typography>
      </div>
      <div style={{ height: 350 }}>
        <ResponsiveBar
          data={data}
          keys={['register_no']}
          indexBy="course"
          margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
          padding={0.3}
          valueScale={{ type: 'linear' }}
          indexScale={{ type: 'band', round: true }}
          colors={{ scheme: 'nivo' }}
          defs={[
            {
              id: 'dots',
              type: 'patternDots',
              background: 'inherit',
              color: '#38bcb2',
              size: 4,
              padding: 1,
              stagger: true,
            },
            {
              id: 'lines',
              type: 'patternLines',
              background: 'inherit',
              color: '#eed312',
              rotation: -45,
              lineWidth: 6,
              spacing: 10,
            },
          ]}
          borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor="#ffffff"
          legends={[
            {
              dataFrom: 'keys',
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 120,
              translateY: 0,
              itemsSpacing: 2,
              itemWidth: 100,
              itemHeight: 20,
              itemDirection: 'left-to-right',
              itemOpacity: 0.85,
              symbolSize: 20,
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
          animate={true}
          motionStiffness={90}
          motionDamping={15}
        />
      </div>
    </Card>
  );
};

export default CourseReport;
