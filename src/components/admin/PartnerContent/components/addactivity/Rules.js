import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import { IconButton, TextField, Typography } from '@material-ui/core';
import { HighlightOff, Add } from '@material-ui/icons';
import RuleDetails from './RuleDetail';

const Rules = ({ control, errors, unregister, activityDetail }) => {
  const [indexes, setIndexes] = React.useState(
    activityDetail.rules
      ? activityDetail.rules.map((item, index) => {
          return index;
        })
      : [0]
  );
  const [counter, setCounter] = React.useState(
    activityDetail.rules ? activityDetail.rules.length + 1 : 1
  );
  const addCourse = () => {
    setIndexes((prevIndexes) => [...prevIndexes, counter]);
    setCounter((prevCounter) => prevCounter + 1);
  };

  const removeCourse = (index) => () => {
    setIndexes((prevIndexes) => [
      ...prevIndexes.filter((item) => item !== index),
    ]);
    const fieldName = `rules[${index}]`;
    unregister(`${fieldName}.title`);
  };

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <Typography variant="h4">Rewards Rules</Typography>
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
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}
            >
              <Typography variant="h6">Rule {index + 1}</Typography>
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
                name={`rules[${index}].title`}
                control={control}
                defaultValue=""
                label={`Rule ${index + 1}`}
                variant="outlined"
                // disabled={loading}
                style={{
                  width: '100%',
                  margin: '1vh auto',
                }}
              />
            </div>
            <RuleDetails
              control={control}
              errors={errors}
              unregister={unregister}
              ruleIndex={`rules[${index}]`}
              index={index}
              activityDetail={activityDetail}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Rules;
