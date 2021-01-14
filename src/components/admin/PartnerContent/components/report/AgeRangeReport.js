import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Typography } from '@material-ui/core';
import { useFadedShadowStyles } from '@mui-treasury/styles/shadow/faded';
import cx from 'clsx';

const AgeRangeReport = ({ activityDetail, mobile }) => {
  const shadowStyles = useFadedShadowStyles();

  const data = [
    {
      age: '20down',
      'อายุ <20':
        activityDetail.report_infomation.age_20 === 0
          ? 0.5
          : activityDetail.report_infomation.age_20,
      // 'อายุ <20': 120,
    },
    {
      age: '20-30',
      'อายุ 20-30':
        activityDetail.report_infomation.age_20_30 === 0
          ? 0.5
          : activityDetail.report_infomation.age_20_30,
      // 'อายุ 20-30': 134,
    },
    {
      age: '30-40',
      'อายุ 30-40':
        activityDetail.report_infomation.age_30_40 === 0
          ? 0.5
          : activityDetail.report_infomation.age_30_40,
      // 'อายุ 30-40': 176,
    },
    {
      age: '40-50',
      'อายุ 40-50':
        activityDetail.report_infomation.age_40_50 === 0
          ? 0.5
          : activityDetail.report_infomation.age_40_50,
      // 'อายุ 40-50': 120,
    },
    {
      age: '50up',
      'อายุ >50':
        activityDetail.report_infomation.age_50 === 0
          ? 0.5
          : activityDetail.report_infomation.age_50,
      // 'อายุ >50': 160,
    },
  ];
  return (
    <Card
      className={shadowStyles.root}
      style={{
        borderRadius: 12,
        textAlign: 'center',
        height: 400,
        width: mobile ? undefined : '47%',
      }}
    >
      <div style={{ backgroundColor: '#8a1776', padding: 10, height: 50 }}>
        <Typography variant="h5" color="primary" style={{ color: '#fff' }}>
          ยอดผู้สมัครตามช่วงอายุ
        </Typography>
      </div>
      <div style={{ height: 350 }}>
        <ResponsiveBar
          data={data}
          keys={[
            'อายุ <20',
            'อายุ 20-30',
            'อายุ 30-40',
            'อายุ 40-50',
            'อายุ >50',
          ]}
          indexBy="age"
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

export default AgeRangeReport;
