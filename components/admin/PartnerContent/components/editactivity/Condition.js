import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { IconButton, TextField, Typography } from '@material-ui/core';
import { HighlightOff, Add, Edit, Save, Close } from '@material-ui/icons';

const Condition = ({ editMode, setEditMode, activityDetail, editActivity }) => {
  const { handleSubmit, unregister, control, reset } = useForm({
    defaultValues: {
      condition: activityDetail.condition,
    },
  });
  const [indexes, setIndexes] = React.useState(
    activityDetail.condition.length > 0
      ? activityDetail.condition.map((item, index) => {
          return index;
        })
      : [0]
  );
  const [counter, setCounter] = React.useState(
    activityDetail.condition.length > 0 ? activityDetail.condition.length : 1
  );
  const addCourse = () => {
    setIndexes((prevIndexes) => [...prevIndexes, counter]);
    setCounter((prevCounter) => prevCounter + 1);
  };

  const removeCourse = (index) => () => {
    setIndexes((prevIndexes) => [
      ...prevIndexes.filter((item) => item !== index),
    ]);
    const fieldName = `condition[${index}]`;
    unregister(`${fieldName}.condition`);
  };

  const onSubmit = async (data) => {
    const condition = data.condition.map((item, index) => {
      return { ...item, id: `${index + 1}` };
    });
    await editActivity(
      {
        type: 'condition',
        condition: [...condition],
      },
      reset
    );
    setEditMode({ ...editMode, condition: false });
  };
  if (editMode) {
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ display: 'flex' }}>
          <Typography variant="h4">ข้อตกลง และเงื่อนไข</Typography>
          <div style={{ flex: 1 }} />
          <IconButton type="submit">
            <Save />
          </IconButton>
          <IconButton
            onClick={() => {
              setEditMode({ ...editMode, condition: false });
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
                name={`condition[${index}].description`}
                control={control}
                defaultValue=""
                label={`Condition ${index + 1}`}
                variant="outlined"
                // disabled={loading}
                style={{
                  width: '100%',
                  margin: '1vh auto',
                }}
                multiline={true}
                rows={5}
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
        <Typography variant="h4">ข้อตกลง และเงื่อนไข</Typography>
        <div style={{ flex: 1 }} />
        <IconButton
          onClick={() => {
            setEditMode({ ...editMode, condition: true });
          }}
        >
          <Edit />
        </IconButton>
      </div>
      <div style={{ paddingLeft: 20 }}>
        {activityDetail.condition.map((item, index) => {
          return (
            <div key={index}>
              <Typography style={{ textAlign: 'center' }}>
                {item.description}
              </Typography>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Condition;
