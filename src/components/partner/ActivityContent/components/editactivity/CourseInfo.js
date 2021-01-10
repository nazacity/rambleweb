import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { IconButton, TextField, Typography, Card } from '@material-ui/core';
import { HighlightOff, Add, Edit, Save, Close } from '@material-ui/icons';
import ModalImage from 'react-modal-image';

const CourseInfo = ({
  editMode,
  setEditMode,
  activityDetail,
  editActivity,
}) => {
  const { handleSubmit, unregister, control, errors, reset } = useForm({
    defaultValues: {
      courses: activityDetail.courses,
    },
  });
  const [indexes, setIndexes] = React.useState(
    activityDetail.courses.length > 0
      ? activityDetail.courses.map((item, index) => {
          return index;
        })
      : [0]
  );
  const [counter, setCounter] = React.useState(
    activityDetail.courses.length > 0 ? activityDetail.courses.length : 1
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

  const onSubmit = async (data) => {
    const courses = data.courses.map((item, index) => {
      return { ...item, id: `${index + 1}` };
    });
    await editActivity(
      {
        type: 'courses',
        courses: [...courses],
      },
      reset
    );
    setEditMode({ ...editMode, courses: false });
  };
  if (editMode) {
    return (
      <Card style={{ padding: 20, marginBottom: 20 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ display: 'flex' }}>
            <Typography variant="h4">คอร์สวิ่ง</Typography>
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
        </form>
      </Card>
    );
  }
  return (
    <Card style={{ padding: 20, marginBottom: 20 }}>
      <div style={{ display: 'flex' }}>
        <Typography variant="h4">คอร์สวิ่ง</Typography>
        <div style={{ flex: 1 }} />
        <IconButton
          onClick={() => {
            setEditMode({ ...editMode, courses: true });
          }}
        >
          <Edit />
        </IconButton>
      </div>
      {activityDetail.courses.map((item, index) => {
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
                small={item.course_picture_url}
                large={item.course_picture_url}
              />
            </div>
            <div>
              <Typography style={{ marginLeft: 20 }}>{item.title}</Typography>
              <Typography style={{ marginLeft: 20 }}>
                ค่าสมัคร {item.price} บาท
              </Typography>
            </div>
          </div>
        );
      })}
    </Card>
  );
};

export default CourseInfo;
