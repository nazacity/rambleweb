import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import { IconButton, TextField, Typography } from '@material-ui/core';
import { HighlightOff, Add } from '@material-ui/icons';

const ShirtStyle = ({ control, errors, unregister, activityDetail }) => {
  const [indexes, setIndexes] = React.useState(
    activityDetail.shirt_detail
      ? activityDetail.shirt_detail.map((item, index) => {
          return index;
        })
      : [0]
  );
  const [counter, setCounter] = React.useState(
    activityDetail.shirt_detail ? activityDetail.shirt_detail.length + 1 : 1
  );
  const addCourse = () => {
    setIndexes((prevIndexes) => [...prevIndexes, counter]);
    setCounter((prevCounter) => prevCounter + 1);
  };

  const removeCourse = (index) => () => {
    setIndexes((prevIndexes) => [
      ...prevIndexes.filter((item) => item !== index),
    ]);
    const fieldName = `shirt_detail[${index}]`;
    unregister(`${fieldName}.style`);
    unregister(`${fieldName}.shirt_picturl_url`);
  };

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <Typography variant="h4">แบบเสื้อ</Typography>
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
              name={`shirt_detail[${index}].style`}
              control={control}
              defaultValue=""
              label="ชื่อแบบ"
              variant="outlined"
              // disabled={loading}
              style={{
                width: '100%',
                margin: '1vh auto',
              }}
            />
            <Controller
              as={TextField}
              name={`shirt_detail[${index}].shirt_picturl_url`}
              control={control}
              defaultValue=""
              label="Shirt Picturl Url"
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
