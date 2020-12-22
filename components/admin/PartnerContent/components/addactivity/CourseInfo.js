import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import { IconButton, TextField, Typography } from '@material-ui/core';
import { HighlightOff, Add } from '@material-ui/icons';

const CourseInfo = ({ control, errors, unregister, activityDetail }) => {
  const [indexes, setIndexes] = React.useState(
    activityDetail.courses
      ? activityDetail.courses.map((item, index) => {
          return index;
        })
      : [0]
  );
  const [counter, setCounter] = React.useState(
    activityDetail.courses ? activityDetail.courses.length + 1 : 1
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
    unregister(`${fieldName}.price`);
    unregister(`${fieldName}.course_picture_url`);
  };

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <Typography variant="h4">คอร์สวิ่ง</Typography>
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
              name={`courses[${index}].title`}
              control={control}
              defaultValue=""
              label="Course Title"
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
              name={`courses[${index}].range`}
              control={control}
              defaultValue=""
              label="Course Range"
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
              name={`courses[${index}].price`}
              control={control}
              defaultValue=""
              label="Course Price"
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
              name={`courses[${index}].course_picture_url`}
              control={control}
              defaultValue=""
              label="Course Picture Url"
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

export default CourseInfo;
