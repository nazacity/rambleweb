import React from 'react';
import { ResponsivePie } from '@nivo/pie';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Typography } from '@material-ui/core';
import { useFadedShadowStyles } from '@mui-treasury/styles/shadow/faded';
import cx from 'clsx';

const useStyles = makeStyles(({ palette }) => ({
  card: {
    borderRadius: 12,
    textAlign: 'center',
    width: '100%',
    height: 400,
  },
}));

const AgeRangeReport = ({ activityDetail }) => {
  const styles = useStyles();
  const shadowStyles = useFadedShadowStyles();

  const data = [
    {
      id: 'male',
      label: 'Male',
      value:
        activityDetail.report_infomation.participant_male_number === 0
          ? 0.5
          : activityDetail.report_infomation.participant_male_number,
    },
    {
      id: 'female',
      label: 'Female',
      value:
        activityDetail.report_infomation.participant_female_number === 0
          ? 0.5
          : activityDetail.report_infomation.participant_female_number,
    },
  ];

  return (
    <Card
      className={cx(styles.card, shadowStyles.root)}
      style={{ marginBottom: 50 }}
    >
      <div style={{ backgroundColor: '#8a1776', padding: 10, height: 50 }}>
        <Typography variant="h5" color="primary" style={{ color: '#fff' }}>
          ยอดผู้สมัครตามเพศ
        </Typography>
      </div>
      <div style={{ height: 350 }}>
        <ResponsivePie
          data={data}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          colors={['#42a5f5', '#f48fb1']}
          borderWidth={1}
          borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
          radialLabelsSkipAngle={10}
          radialLabelsTextColor="#333333"
          radialLabelsLinkColor={{ from: 'color' }}
          sliceLabelsSkipAngle={10}
          sliceLabelsTextColor="#333333"
          enableRadialLabels={false}
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
          legends={[
            {
              anchor: 'bottom',
              direction: 'row',
              justify: false,
              translateX: 0,
              translateY: 56,
              itemsSpacing: 0,
              itemWidth: 100,
              itemHeight: 18,
              itemTextColor: '#999',
              itemDirection: 'left-to-right',
              itemOpacity: 1,
              symbolSize: 18,
              symbolShape: 'circle',
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemTextColor: '#000',
                  },
                },
              ],
            },
          ]}
        />
      </div>
    </Card>
  );
};

export default AgeRangeReport;
