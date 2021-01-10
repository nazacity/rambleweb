import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { IconButton, TextField, Typography, Card } from '@material-ui/core';
import { HighlightOff, Add, Edit, Save, Close } from '@material-ui/icons';
import ModalImage from 'react-modal-image';

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
      shirt_detail: activityDetail.shirt_detail,
    },
  });
  const [indexes, setIndexes] = React.useState(
    activityDetail.shirt_detail.length > 0
      ? activityDetail.shirt_detail.map((item, index) => {
          return index;
        })
      : [0]
  );
  const [counter, setCounter] = React.useState(
    activityDetail.shirt_detail.length > 0
      ? activityDetail.shirt_detail.length
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
    const fieldName = `shirt_detail[${index}]`;
    unregister(`${fieldName}.style`);
    unregister(`${fieldName}.shirt_picturl_url`);
  };

  const onSubmit = async (data) => {
    const shirt_detail = data.shirt_detail.map((item, index) => {
      return { ...item, id: `${index + 1}` };
    });
    await editActivity(
      {
        type: 'shirt_detail',
        shirt_detail: [...shirt_detail],
      },
      reset
    );
    setEditMode({ ...editMode, shirtdetail: false });
  };

  if (editMode) {
    return (
      <Card style={{ padding: 20, marginBottom: 20 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ display: 'flex' }}>
            <Typography variant="h4">แบบเสื้อ</Typography>
            <div style={{ flex: 1 }} />
            <IconButton type="submit">
              <Save />
            </IconButton>
            <IconButton
              onClick={() => {
                setEditMode({ ...editMode, shirtstyle: false });
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
                  name={`shirt_detail[${index}].style`}
                  control={control}
                  defaultValue=""
                  label="ชื่อแบบ"
                  variant="outlined"
                  // disabled={loading}
                  style={{
                    width: '100%',
                    margin: '1vh auto',
                  }}
                />
                <Controller
                  as={TextField}
                  name={`shirt_detail[${index}].shirt_picturl_url`}
                  control={control}
                  defaultValue=""
                  label="Shirt Picturl Url"
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
        <Typography variant="h4">แบบเสื้อ</Typography>
        <div style={{ flex: 1 }} />
        <IconButton
          onClick={() => {
            setEditMode({ ...editMode, shirtstyle: true });
          }}
        >
          <Edit />
        </IconButton>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          flex: 1,
        }}
      >
        {activityDetail.shirt_detail.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginRight: 20,
                marginBottom: 20,
                justifyContent: 'center',
                width: 200,
                height: 200,
              }}
            >
              <ModalImage
                small={item.shirt_picturl_url}
                large={item.shirt_picturl_url}
              />
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default ShirtStyle;
