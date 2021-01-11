import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { IconButton, TextField, Typography, Card } from '@material-ui/core';
import { HighlightOff, Add, Edit, Save, Close } from '@material-ui/icons';

const ShirtStyle = ({
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
      size: activityDetail.size,
    },
  });
  const [indexes, setIndexes] = React.useState(
    activityDetail.size.length > 0
      ? activityDetail.size.map((item, index) => {
          return index;
        })
      : [0]
  );
  const [counter, setCounter] = React.useState(
    activityDetail.size.length > 0 ? activityDetail.size.length : 1
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

  const onSubmit = async (data) => {
    const size = data.size.map((item, index) => {
      return { ...item, id: `${index + 1}` };
    });
    await editActivity(
      {
        type: 'size',
        size: [...size],
      },
      reset
    );
    setEditMode({ ...editMode, size: false });
  };

  if (editMode) {
    return (
      <Card style={{ padding: 20, marginBottom: 20 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ display: 'flex' }}>
            <Typography variant="h4">Size</Typography>
            <div style={{ flex: 1 }} />
            <IconButton type="submit">
              <Save />
            </IconButton>
            <IconButton
              onClick={() => {
                setEditMode({ ...editMode, size: false });
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
        </form>
      </Card>
    );
  }
  return (
    <Card style={{ padding: 20, marginBottom: 20 }}>
      <div style={{ display: 'flex' }}>
        <Typography variant="h4">ไซส์เสื้อ</Typography>
        <div style={{ flex: 1 }} />
        {/* <IconButton
          onClick={() => {
            setEditMode({ ...editMode, size: true });
          }}
        >
          <Edit />
        </IconButton> */}
      </div>
      {activityDetail.size.map((size, index) => {
        return (
          <div key={index}>
            <Typography>
              {size.size} {size.description}
            </Typography>
          </div>
        );
      })}
    </Card>
  );
};

export default ShirtStyle;
