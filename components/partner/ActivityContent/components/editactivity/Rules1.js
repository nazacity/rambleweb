import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { IconButton, TextField, Typography } from '@material-ui/core';
import { HighlightOff, Add, Edit, Save, Close } from '@material-ui/icons';

const Rules = ({ editMode, setEditMode, activityDetail, editActivity }) => {
  const {
    register,
    handleSubmit,
    unregister,
    control,
    errors,
    reset,
  } = useForm({
    rules1: activityDetail.rules1,
  });
  const [indexes, setIndexes] = React.useState(
    activityDetail.rules1.length > 0
      ? activityDetail.rules1.map((item, index) => {
          return index;
        })
      : [0]
  );
  const [counter, setCounter] = React.useState(
    activityDetail.rules1.length > 0 ? activityDetail.rules1.length : 1
  );
  const addCourse = () => {
    setIndexes((prevIndexes) => [...prevIndexes, counter]);
    setCounter((prevCounter) => prevCounter + 1);
  };

  const removeCourse = (index) => () => {
    setIndexes((prevIndexes) => [
      ...prevIndexes.filter((item) => item !== index),
    ]);
    const fieldName = `rules1[${index}]`;
    unregister(`${fieldName}.title`);
  };

  const onSubmit = async (data) => {
    const rules1 = data.rules1.map((item, index) => {
      return { ...item, id: `${index + 1}` };
    });
    await editActivity(
      {
        type: 'rules1',
        rules1: [...rules1],
      },
      reset
    );
    setEditMode({ ...editMode, rules1: false });
  };

  if (editMode) {
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ display: 'flex' }}>
          <Typography variant="h4">Rules</Typography>
          <div style={{ flex: 1 }} />
          <IconButton type="submit">
            <Save />
          </IconButton>
          <IconButton
            onClick={() => {
              setEditMode({ ...editMode, rules1: false });
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
                  name={`rules1[${index}].title`}
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
            </div>
          );
        })}
      </form>
    );
  }

  return (
    <div style={{ margin: '20px auto' }}>
      <div style={{ display: 'flex' }}>
        <Typography variant="h4">กฏ</Typography>
        <div style={{ flex: 1 }} />
        <IconButton
          onClick={() => {
            setEditMode({ ...editMode, rules1: true });
          }}
        >
          <Edit />
        </IconButton>
      </div>
      <div style={{ paddingLeft: 20 }}>
        {activityDetail.rules1.map((item, index) => {
          return (
            <div key={index} style={{ paddingHorizontal: 20, marginBottom: 5 }}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    backgroundColor: 'red',
                    width: 10,
                    height: 10,
                    borderRadius: 10,
                    marginRight: 10,
                  }}
                />
                <div style={{ flex: 1 }}>
                  <Typography>{item.title}</Typography>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Rules;
