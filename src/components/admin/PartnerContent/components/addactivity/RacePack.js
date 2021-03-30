import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import { IconButton, TextField, Typography } from '@material-ui/core';
import { HighlightOff, Add } from '@material-ui/icons';

const RacePack = ({ control, errors, unregister, activityDetail }) => {
  const [indexes, setIndexes] = React.useState(
    activityDetail.racepack
      ? activityDetail.racepack.map((item, index) => {
          return index;
        })
      : [0]
  );
  const [counter, setCounter] = React.useState(
    activityDetail.racepack ? activityDetail.racepack.length + 1 : 1
  );
  const addCourse = () => {
    setIndexes((prevIndexes) => [...prevIndexes, counter]);
    setCounter((prevCounter) => prevCounter + 1);
  };

  const removeCourse = (index) => () => {
    setIndexes((prevIndexes) => [
      ...prevIndexes.filter((item) => item !== index),
    ]);
    const fieldName = `racepack[${index}]`;
    unregister(`${fieldName}.title`);
    unregister(`${fieldName}.racepack_picture_url`);
  };

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <Typography variant="h4">Race Pack</Typography>
        <IconButton onClick={addCourse}>
          <Add />
        </IconButton>
      </div>
      {indexes.map((index) => {
        return (
          <div name="racepack" key={index}>
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
              name={`racepack[${index}].title`}
              control={control}
              defaultValue=""
              label="Racepack Title"
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
              name={`racepack[${index}].racepack_picture_url`}
              control={control}
              defaultValue=""
              label="Racepack Picture Url"
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

export default RacePack;
