import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import { IconButton, TextField, Typography } from '@material-ui/core';
import { HighlightOff, Add } from '@material-ui/icons';

const Routes = ({ control, errors, unregister, activityDetail }) => {
  const [indexes, setIndexes] = React.useState(
    activityDetail.courses
      ? activityDetail.routes.map((item, index) => {
          return index;
        })
      : [0]
  );
  const [counter, setCounter] = React.useState(
    activityDetail.routes ? activityDetail.routes.length + 1 : 1
  );
  const addCourse = () => {
    setIndexes((prevIndexes) => [...prevIndexes, counter]);
    setCounter((prevCounter) => prevCounter + 1);
  };

  const removeCourse = (index) => () => {
    setIndexes((prevIndexes) => [
      ...prevIndexes.filter((item) => item !== index),
    ]);
    const fieldName = `course[${index}]`;
    unregister(`${fieldName}.title`);
    unregister(`${fieldName}.range`);
    unregister(`${fieldName}.route_picture_url`);
  };

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <Typography variant="h4">เส้นทาง</Typography>
        <IconButton onClick={addCourse}>
          <Add />
        </IconButton>
      </div>
      {indexes.map((index) => {
        return (
          <div name="routes" key={index}>
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
              name={`routes[${index}].title`}
              control={control}
              defaultValue=""
              label="Route Title"
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
              name={`routes[${index}].range`}
              control={control}
              defaultValue=""
              label="Route Range"
              variant="outlined"
              // disabled={loading}
              style={{
                width: '100%',
                margin: '1vh auto',
                height: '50px',
              }}
              type="number"
            />
            <Controller
              as={TextField}
              name={`routes[${index}].route_picture_url`}
              control={control}
              defaultValue=""
              label="Route Picture Url"
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

export default Routes;
