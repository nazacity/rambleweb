import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { IconButton, TextField, Typography } from '@material-ui/core';
import { HighlightOff, Add, Edit, Save, Close } from '@material-ui/icons';

const MoreDetail = ({
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
      more_detail: activityDetail.more_detail,
    },
  });
  const [indexes, setIndexes] = React.useState(
    activityDetail.more_detail.length > 0
      ? activityDetail.more_detail.map((item, index) => {
          return index;
        })
      : [0]
  );
  const [counter, setCounter] = React.useState(
    activityDetail.more_detail.length > 0
      ? activityDetail.more_detail.length
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
    const fieldName = `more_detail[${index}]`;
    unregister(`${fieldName}.more_detail`);
  };

  const onSubmit = async (data) => {
    const more_detail = data.more_detail.map((item, index) => {
      return { ...item, id: `${index + 1}` };
    });
    await editActivity(
      {
        type: 'more_detail',
        more_detail: [...more_detail],
      },
      reset
    );
    setEditMode({ ...editMode, moredetail: false });
  };
  if (editMode) {
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ display: 'flex' }}>
          <Typography variant="h4">รายละเอียดเพิ่มเติม</Typography>
          <div style={{ flex: 1 }} />
          <IconButton type="submit">
            <Save />
          </IconButton>
          <IconButton
            onClick={() => {
              setEditMode({ ...editMode, moredetail: false });
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
                name={`more_detail[${index}].description`}
                control={control}
                defaultValue=""
                label={`More Detail ${index + 1}`}
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
    );
  }
  return (
    <div style={{ margin: '20px auto' }}>
      <div style={{ display: 'flex' }}>
        <Typography variant="h4">รายละเอียดเพิ่มเติม</Typography>
        <div style={{ flex: 1 }} />
        <IconButton
          onClick={() => {
            setEditMode({ ...editMode, moredetail: true });
          }}
        >
          <Edit />
        </IconButton>
      </div>
      <div style={{ paddingLeft: 20 }}>
        {activityDetail.more_detail.map((item, index) => {
          return (
            <div key={index}>
              <Typography>{item.description}</Typography>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MoreDetail;
