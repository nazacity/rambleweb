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
    width: '100%',
  },
}));

const ShirtReport = ({ activityDetail }) => {
  const styles = useStyles();
  const shadowStyles = useFadedShadowStyles();
  const [maleData, setMaleData] = useState([]);
  const [femaleData, setFemaleData] = useState([]);
  const [size, setSize] = useState([]);

  const convertData = () => {
    const mData = activityDetail.shirt_report.map((item) => {
      let male = {};
      item.size.map((item1) => {
        male = {
          ...male,
          [item1.size]: item1.male_quality === 0 ? 0.5 : item1.male_quality,
        };
      });
      return {
        course: item.course,
        ...male,
      };
    });

    setMaleData(mData);

    const FData = activityDetail.shirt_report.map((item) => {
      let female = {};
      item.size.map((item1) => {
        female = {
          ...female,
          [item1.size]: item1.female_quality === 0 ? 0.5 : item1.female_quality,
        };
      });
      return {
        course: item.course,
        ...female,
      };
    });

    setFemaleData(FData);

    const SData = activityDetail.size.map((item) => item.size);
    setSize(SData);
  };

  console.log(activityDetail);

  useEffect(() => {
    convertData();
  }, []);

  const sendData = [
    { send: 'At event', atevent: activityDetail.reception.atevent },
    { send: 'Address', address: activityDetail.reception.sendAddress },
  ];

  return (
    <Card className={cx(styles.card, shadowStyles.root)}>
      <div style={{ backgroundColor: '#8a1776', padding: 10, height: 50 }}>
        <Typography variant="h5" color="primary" style={{ color: '#fff' }}>
          ยอดเสื้อตามประเภทการแข่งขัน
        </Typography>
      </div>
      <div style={{ height: 500, display: 'flex' }}>
        <div
          style={{
            display: 'flex',
            flex: 1,
            paddingTop: 20,
            alignItems: 'center',
            flexDirection: 'column',
            width: '50%',
          }}
        >
          <Typography variant="h5" style={{ color: '#42a5f5' }}>
            ชาย
          </Typography>
          <ResponsiveBar
            data={maleData}
            // data={testData}
            keys={size}
            // keys={['S', 'M', 'L']}
            indexBy="course"
            margin={{ top: 50, right: 130, bottom: 70, left: 60 }}
            padding={0.3}
            valueScale={{ type: 'linear' }}
            indexScale={{ type: 'band', round: true }}
            colors={['#ce93d8', '#ff8a65', '#b0bec5']}
            groupMode="grouped"
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
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 20,
              legendPosition: 'middle',
              legendOffset: 32,
            }}
          />
        </div>
        <div
          style={{
            display: 'flex',
            flex: 1,
            paddingTop: 20,
            alignItems: 'center',
            flexDirection: 'column',
            width: '50%',
          }}
        >
          <Typography variant="h5" style={{ color: '#f48fb1' }}>
            หญิง
          </Typography>
          <ResponsiveBar
            data={femaleData}
            keys={size}
            // data={testData}
            // keys={['S', 'M', 'L']}
            indexBy="course"
            margin={{ top: 50, right: 130, bottom: 70, left: 60 }}
            padding={0.3}
            valueScale={{ type: 'linear' }}
            indexScale={{ type: 'band', round: true }}
            colors={['#ce93d8', '#ff8a65', '#b0bec5']}
            groupMode="grouped"
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
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 20,
              legendPosition: 'middle',
              legendOffset: 32,
            }}
          />
        </div>
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
