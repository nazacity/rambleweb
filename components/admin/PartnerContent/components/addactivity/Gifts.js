import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import { IconButton, TextField, Typography } from '@material-ui/core';
import { HighlightOff, Add } from '@material-ui/icons';

const Gifts = ({ control, errors, unregister, activityDetail }) => {
  const [indexes, setIndexes] = React.useState(
    activityDetail.gifts
      ? activityDetail.gifts.map((item, index) => {
          return index;
        })
      : [0]
  );
  const [counter, setCounter] = React.useState(
    activityDetail.gifts ? activityDetail.gifts.length + 1 : 1
  );
  const addCourse = () => {
    setIndexes((prevIndexes) => [...prevIndexes, counter]);
    setCounter((prevCounter) => prevCounter + 1);
  };

  const removeCourse = (index) => () => {
    setIndexes((prevIndexes) => [
      ...prevIndexes.filter((item) => item !== index),
    ]);
    const fieldName = `gifts[${index}]`;
    unregister(`${fieldName}.description`);
    unregister(`${fieldName}.gift_picture_url`);
  };

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <Typography variant="h4">รางวัลของที่ระลึก</Typography>
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
              name={`gifts[${index}].description`}
              control={control}
              defaultValue=""
              label={`Gift Description ${index + 1}`}
              variant="outlined"
              // disabled={loading}
              style={{
                width: '100%',
                margin: '1vh auto',
              }}
            />
            <Controller
              as={TextField}
              name={`gifts[${index}].gift_picture_url`}
              control={control}
              defaultValue=""
              label={`Gift Picture Url ${index + 1}`}
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

export default Gifts;
