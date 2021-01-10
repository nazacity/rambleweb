import React, { useState, useEffect } from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { makeStyles } from '@material-ui/core/styles';
import { Card } from '@material-ui/core';
import { useFadedShadowStyles } from '@mui-treasury/styles/shadow/faded';
import cx from 'clsx';

const useStyles = makeStyles(({ palette }) => ({
  card: {
    borderRadius: 12,
    textAlign: 'center',
    width: '100%',
  },
}));

const ShirtReport = ({ activityDetail }) => {
  const styles = useStyles();
  const shadowStyles = useFadedShadowStyles();
  const [data, setData] = useState([]);

  const convertData = () => {
    const newData = activityDetail.size.map((item) => {
      return {
        size: item.size,
        Male: item.male_quality,
        Female: item.female_quality,
      };
    });

    setData(newData);
  };
  useEffect(() => {
    convertData();
  }, []);

  const testData = [
    { size: 'S', Male: 60, Female: 82 },
    { size: 'M', Male: 47, Female: 23 },
    { size: 'L', Male: 35, Female: 10 },
    { size: 'XL', Male: 12, Female: 24 },
  ];

  console.log(activityDetail);

  const sendData = [
    { send: 'At event place', atevent: 100 },
    { send: 'Address', address: 120 },
  ];

  return (
    <Card className={cx(styles.card, shadowStyles.root)}>
      <div style={{ height: 400 }}>
        <ResponsiveBar
          data={testData}
          keys={['Male', 'Female']}
          indexBy="size"
          margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
          padding={0.3}
          valueScale={{ type: 'linear' }}
          indexScale={{ type: 'band', round: true }}
          colors={['#90caf9', '#f8bbd0']}
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
      <div style={{ height: 200 }}>
        <ResponsiveBar
          data={sendData}
          keys={['atevent', 'address']}
          layout="horizontal"
          indexBy="send"
          margin={{ top: 50, right: 130, bottom: 50, left: 150 }}
          padding={0.3}
          valueScale={{ type: 'linear' }}
          indexScale={{ type: 'band', round: true }}
          colors={['#aed581', '#ffcc80']}
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

export default ShirtReport;
