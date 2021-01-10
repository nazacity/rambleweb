import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { IconButton, TextField, Typography, Card } from '@material-ui/core';
import TimelineDisplay from '../activitydetail/TimelineDisplay';

import { HighlightOff, Add, Edit, Save, Close } from '@material-ui/icons';

const TimelineForm = ({
  editMode,
  setEditMode,
  activityDetail,
  editActivity,
}) => {
  const {
    register,
    handleSubmit,
    unregister,
    control,
    errors,
    reset,
  } = useForm({
    defaultValues: {
      timeline: activityDetail.timeline,
    },
  });

  const [indexes, setIndexes] = React.useState(
    activityDetail.timeline.length > 0
      ? activityDetail.timeline.map((item, index) => {
          return index;
        })
      : [0]
  );
  const [counter, setCounter] = React.useState(
    activityDetail.timeline.length > 0 ? activityDetail.timeline.length : 1
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

  const onSubmit = async (data) => {
    const timeline = data.timeline.map((item, index) => {
      return { ...item, id: `${index + 1}` };
    });
    await editActivity(
      {
        type: 'timeline',
        timeline: [...timeline],
      },
      reset
    );
    setEditMode({ ...editMode, timeline: false });
  };

  if (editMode) {
    return (
      <Card style={{ padding: 20, marginBottom: 20 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ display: 'flex' }}>
            <Typography variant="h4">รายละเอียดกำหนดการ</Typography>
            <div style={{ flex: 1 }} />
            <IconButton type="submit">
              <Save />
            </IconButton>
            <IconButton
              onClick={() => {
                setEditMode({ ...editMode, timeline: false });
              }}
            >
              <Close />
            </IconButton>
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
        </form>
      </Card>
    );
  }
  return (
    <Card style={{ padding: 20, marginBottom: 20 }}>
      <div style={{ display: 'flex' }}>
        <Typography variant="h4">รายละเอียดกำหนดการ</Typography>
        <div style={{ flex: 1 }} />
        <IconButton
          onClick={() => {
            setEditMode({ ...editMode, timeline: true });
          }}
        >
          <Edit />
        </IconButton>
      </div>
      <TimelineDisplay data={activityDetail.timeline} />
    </Card>
  );
};

export default TimelineForm;
