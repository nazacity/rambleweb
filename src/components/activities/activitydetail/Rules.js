import { Typography } from '@material-ui/core';
import React from 'react';

const Rules = ({ activityDetail }) => {
  return (
    <div style={{ margin: '10px 0' }}>
      <div style={{ display: 'flex' }}>
        <Typography variant="h6">กติการางวัล</Typography>
      </div>
      <div style={{ paddingLeft: 20 }}>
        {activityDetail.rules.map((item, index) => {
          return (
            <div key={index} style={{ marginBottom: 5 }}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    backgroundColor: 'red',
                    width: 10,
                    height: 10,
                    borderRadius: 10,
                    marginRight: 10,
                  }}
                />
                <div style={{ flex: 1 }}>
                  <Typography>{item.title}</Typography>
                </div>
              </div>
              <div style={{ paddingLeft: 40 }}>
                {item.detail &&
                  item.detail.map((item, index) => {
                    return (
                      <div key={index}>
                        <Typography>{item.description}</Typography>
                      </div>
                    );
                  })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Rules;
