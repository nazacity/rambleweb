import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { makeStyles } from '@material-ui/core/styles';
import { Card } from '@material-ui/core';
import { useFadedShadowStyles } from '@mui-treasury/styles/shadow/faded';
import cx from 'clsx';

const useStyles = makeStyles(({ palette }) => ({
  card: {
    borderRadius: 12,
    textAlign: 'center',
    width: '47%',
    height: 400,
  },
}));

const AgeRangeReport = ({ activityDetail }) => {
  const styles = useStyles();
  const shadowStyles = useFadedShadowStyles();

  const data = [
    {
      age: '20down',
      //   participant_20: activityDetail.report_infomation.age_20,
      'อายุ <20': 120,
    },
    {
      age: '20-30',
      //   participant_20_30: activityDetail.report_infomation.age_20_30,
      'อายุ 20-30': 134,
    },
    {
      age: '30-40',
      //   participant: activityDetail.report_infomation.age_30_40,
      'อายุ 30-40': 176,
    },
    {
      age: '40-50',
      //   participant_40_50: activityDetail.report_infomation.age_40_50,
      'อายุ 40-50': 120,
    },
    {
      age: '50up',
      //   participant_40_50: activityDetail.report_infomation.age_50,
      'อายุ >50': 160,
    },
  ];
  return (
    <Card className={cx(styles.card, shadowStyles.root)}>
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
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'ห้วงอายุ',
          legendPosition: 'middle',
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'จำนวนผู้สมัครตามห้วงอายุ',
          legendPosition: 'middle',
          legendOffset: -40,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
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
    </Card>
  );
};

export default AgeRangeReport;
