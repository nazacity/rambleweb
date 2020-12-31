import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import { IconButton, TextField, Typography } from '@material-ui/core';
import { HighlightOff, Add } from '@material-ui/icons';

const RuleDetails = ({
  control,
  errors,
  unregister,
  ruleIndex,
  activityDetail,
  index,
}) => {
  const [indexes, setIndexes] = React.useState(
    activityDetail.rules && activityDetail.rules[index]?.detail
      ? activityDetail.rules &&
          activityDetail.rules[index]?.detail.map((item, index) => {
            return index;
          })
      : [0]
  );
  const [counter, setCounter] = React.useState(
    activityDetail.rules && activityDetail.rules[index]?.detail
      ? activityDetail.rules && activityDetail.rules[index]?.detail.length
      : 1
  );
  const addCourse = () => {
    setIndexes((prevIndexes) => [...prevIndexes, counter]);
    setCounter((prevCounter) => prevCounter + 1);
  };

  const removeCourse = (index) => () => {
    setIndexes((prevIndexes) => [
      ...prevIndexes.filter((item) => item !== index),
    ]);
    const fieldName = `${ruleIndex}.detail[${index}]`;
    unregister(`${fieldName}.description`);
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="h6">Rule Details</Typography>
        <IconButton onClick={addCourse}>
          <Add />
        </IconButton>
      </div>
      {indexes.map((index) => {
        return (
          <div name="courses" key={index}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Typography variant="h6">
                Rule Detail Description {index + 1}
              </Typography>
              <div style={{ flex: 1 }} />
              <IconButton
                variant="outlined"
                color="primary"
                onClick={removeCourse(index)}
                disabled={index === 0}
              >
                <HighlightOff />
              </IconButton>
            </div>
            <div style={{ display: 'flex' }}>
              <Controller
                as={TextField}
                name={`${ruleIndex}.detail[${index}].description`}
                control={control}
                defaultValue=""
                label={`Rule Detail Description ${index + 1}`}
                variant="outlined"
                // disabled={loading}
                style={{
                  width: '100%',
                  margin: '1vh auto',
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RuleDetails;
