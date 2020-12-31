import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import { IconButton, TextField, Typography } from '@material-ui/core';
import { HighlightOff, Add } from '@material-ui/icons';

const ShirtStyle = ({ control, errors, unregister, activityDetail }) => {
  const [indexes, setIndexes] = React.useState(
    activityDetail.size
      ? activityDetail.size.map((item, index) => {
          return index;
        })
      : [0]
  );
  const [counter, setCounter] = React.useState(
    activityDetail.size ? activityDetail.size.length + 1 : 1
  );
  const addCourse = () => {
    setIndexes((prevIndexes) => [...prevIndexes, counter]);
    setCounter((prevCounter) => prevCounter + 1);
  };

  const removeCourse = (index) => () => {
    setIndexes((prevIndexes) => [
      ...prevIndexes.filter((item) => item !== index),
    ]);
    const fieldName = `size[${index}]`;
    unregister(`${fieldName}.size`);
    unregister(`${fieldName}.description`);
  };

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <Typography variant="h4">Size</Typography>
        <IconButton onClick={addCourse}>
          <Add />
        </IconButton>
      </div>
      {indexes.map((index) => {
        return (
          <div name="courses" key={index}>
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
              name={`size[${index}].size`}
              control={control}
              defaultValue=""
              label="Size"
              variant="outlined"
              // disabled={loading}
              style={{
                width: '100%',
                margin: '1vh auto',
              }}
            />
            <Controller
              as={TextField}
              name={`size[${index}].description`}
              control={control}
              defaultValue=""
              label="Size Description"
              variant="outlined"
              // disabled={loading}
              style={{
                width: '100%',
                margin: '1vh auto',
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ShirtStyle;
