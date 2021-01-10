import React from 'react';
import { ResponsivePie } from '@nivo/pie';
import { makeStyles } from '@material-ui/core/styles';
import { Card } from '@material-ui/core';
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
      value: 582,
      color: 'hsl(353, 70%, 50%)',
    },
    {
      id: 'female',
      label: 'Female',
      value: 573,
      color: 'hsl(12, 70%, 50%)',
    },
  ];

  return (
    <Card
      className={cx(styles.card, shadowStyles.root)}
      style={{ marginBottom: 50 }}
    >
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
    </Card>
  );
};

export default AgeRangeReport;
