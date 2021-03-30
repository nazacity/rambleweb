import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { IconButton, TextField, Typography } from '@material-ui/core';
import { HighlightOff, Add, Edit, Save, Close } from '@material-ui/icons';
import ModalImage from 'react-modal-image';

const RacePack = ({ editMode, setEditMode, activityDetail, editActivity }) => {
  const { handleSubmit, unregister, control, errors, reset } = useForm({
    defaultValues: {
      racepack: activityDetail.racepack,
    },
  });
  const [indexes, setIndexes] = React.useState(
    activityDetail.racepack.length > 0
      ? activityDetail.racepack.map((item, index) => {
          return index;
        })
      : [0]
  );
  const [counter, setCounter] = React.useState(
    activityDetail.racepack.length > 0 ? activityDetail.racepack.length : 1
  );
  const addCourse = () => {
    setIndexes((prevIndexes) => [...prevIndexes, counter]);
    setCounter((prevCounter) => prevCounter + 1);
  };

  const removeCourse = (index) => () => {
    setIndexes((prevIndexes) => [
      ...prevIndexes.filter((item) => item !== index),
    ]);
    const fieldName = `racepack[${index}]`;
    unregister(`${fieldName}.title`);
    unregister(`${fieldName}.range`);
    unregister(`${fieldName}.route_picture_url`);
  };

  const onSubmit = async (data) => {
    const racepack = data.racepack.map((item, index) => {
      return { ...item, id: `${index + 1}` };
    });
    await editActivity(
      {
        type: 'racepack',
        racepack: [...racepack],
      },
      reset
    );
    setEditMode({ ...editMode, racepack: false });
  };
  if (editMode) {
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ display: 'flex' }}>
          <Typography variant="h4">Race Pack</Typography>
          <div style={{ flex: 1 }} />
          <IconButton type="submit">
            <Save />
          </IconButton>
          <IconButton
            onClick={() => {
              setEditMode({ ...editMode, courses: false });
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
            <div name="racepack" key={index}>
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
                label="Race Pack Title"
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
                name={`racepack[${index}].racepack_picture_url`}
                control={control}
                defaultValue=""
                label="Race Packe Picture Url"
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
    );
  }
  return (
    <div style={{ margin: '20px auto' }}>
      <div style={{ display: 'flex' }}>
        <Typography variant="h4">Race Pack</Typography>
        <div style={{ flex: 1 }} />
        <IconButton
          onClick={() => {
            setEditMode({ ...editMode, routes: true });
          }}
        >
          <Edit />
        </IconButton>
      </div>
      {activityDetail.racepack.map((item, index) => {
        return (
          <div
            key={index}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 20,
            }}
          >
            <div
              style={{
                width: 200,
                height: 200,
                overflow: 'hidden',
              }}
            >
              <ModalImage
                small={item.racepack_picture_url}
                large={item.racepack_picture_url}
              />
            </div>
            <div>
              <Typography style={{ marginLeft: 20 }}>{item.title}</Typography>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RacePack;
