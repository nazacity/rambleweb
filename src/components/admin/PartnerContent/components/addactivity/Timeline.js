import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import { IconButton, TextField, Typography } from '@material-ui/core';
import { HighlightOff, Add } from '@material-ui/icons';

const Timeline = ({ control, errors, unregister, activityDetail }) => {
  const [indexes, setIndexes] = React.useState(
    activityDetail.timeline
      ? activityDetail.timeline.map((item, index) => {
          return index;
        })
      : [0]
  );
  const [counter, setCounter] = React.useState(
    activityDetail.timeline ? activityDetail.timeline.length + 1 : 1
  );
  const addCourse = () => {
    setIndexes((prevIndexes) => [...prevIndexes, counter]);
    setCounter((prevCounter) => prevCounter + 1);
  };

  const removeCourse = (index) => () => {
    setIndexes((prevIndexes) => [
      ...prevIndexes.filter((item) => item !== index),
    ]);
    const fieldName = `timeline[${index}]`;
    unregister(`${fieldName}.timeline`);
    unregister(`${fieldName}.title`);
    unregister(`${fieldName}.description`);
  };

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <Typography variant="h4">รายละเอียดกำหนดการ</Typography>
        <IconButton onClick={addCourse}>
          <Add />
        </IconButton>
      </div>
      {indexes.map((index) => {
        return (
          <div name={'timeline'} key={index}>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <IconButton
                variant="outlined"
                color="primary"
                onClick={removeCourse(index)}
                disabled={index === 0}
              >
                <HighlightOff />
              </IconButton>
            </div>
            <Controller
              as={TextField}
              name={`timeline[${index}].time`}
              control={control}
              defaultValue=""
              label="Timeline"
              variant="outlined"
              // disabled={loading}
              style={{
                width: '100%',
                margin: '1vh auto',
                height: '50px',
              }}
            />
            <Controller
              as={TextField}
              name={`timeline[${index}].title`}
              control={control}
              defaultValue=""
              label="Timeline Title"
              variant="outlined"
              // disabled={loading}
              style={{
                width: '100%',
                margin: '1vh auto',
                height: '50px',
              }}
            />
            <Controller
              as={TextField}
              name={`timeline[${index}].description`}
              control={control}
              defaultValue=""
              label="Description"
              variant="outlined"
              // disabled={loading}
              style={{
                width: '100%',
                margin: '1vh auto',
                height: '50px',
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Timeline;
