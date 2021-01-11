import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { IconButton, TextField, Typography, Card } from '@material-ui/core';
import { HighlightOff, Add, Edit, Save, Close } from '@material-ui/icons';
import ModalImage from 'react-modal-image';

const Gifts = ({ editMode, setEditMode, activityDetail, editActivity }) => {
  const {
    register,
    handleSubmit,
    unregister,
    control,
    errors,
    reset,
  } = useForm({
    defaultValues: {
      gifts: activityDetail.gifts,
    },
  });
  const [indexes, setIndexes] = React.useState(
    activityDetail.gifts.length > 0
      ? activityDetail.gifts.map((item, index) => {
          return index;
        })
      : [0]
  );
  const [counter, setCounter] = React.useState(
    activityDetail.gifts.length > 0 ? activityDetail.gifts.length : 1
  );
  const addCourse = () => {
    setIndexes((prevIndexes) => [...prevIndexes, counter]);
    setCounter((prevCounter) => prevCounter + 1);
  };

  const removeCourse = (index) => () => {
    setIndexes((prevIndexes) => [
      ...prevIndexes.filter((item) => item !== index),
    ]);
    const fieldName = `gifts[${index}]`;
    unregister(`${fieldName}.description`);
    unregister(`${fieldName}.gift_picture_url`);
  };

  //https://ev.runlah.com/api/1/images/st-df65BRiLl4r-U0hVBgaSL.jpg?size=xl

  const onSubmit = async (data) => {
    const gifts = data.gifts.map((item, index) => {
      return { ...item, id: `${index + 1}` };
    });
    await editActivity(
      {
        type: 'gifts',
        gifts: [...gifts],
      },
      reset
    );
    setEditMode({ ...editMode, gifts: false });
  };
  if (editMode) {
    return (
      <Card style={{ padding: 20, marginBottom: 20 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ display: 'flex' }}>
            <Typography variant="h4">รางวัลของที่ระลึก</Typography>
            <div style={{ flex: 1 }} />
            <IconButton type="submit">
              <Save />
            </IconButton>
            <IconButton
              onClick={() => {
                setEditMode({ ...editMode, gitfs: false });
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
                  name={`gifts[${index}].description`}
                  control={control}
                  defaultValue=""
                  label={`Gift Description ${index + 1}`}
                  variant="outlined"
                  // disabled={loading}
                  style={{
                    width: '100%',
                    margin: '1vh auto',
                  }}
                />
                <Controller
                  as={TextField}
                  name={`gifts[${index}].gift_picture_url`}
                  control={control}
                  defaultValue=""
                  label={`Gift Picture Url ${index + 1}`}
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
        <Typography variant="h4">รางวัลของที่ระลึก</Typography>
        <div style={{ flex: 1 }} />
        {/* <IconButton
          onClick={() => {
            setEditMode({ ...editMode, gifts: true });
          }}
        >
          <Edit />
        </IconButton> */}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
        {activityDetail.gifts.map((item, index) => {
          return (
            <div
              style={{ marginRight: 10, marginRight: 20, marginBottom: 20 }}
              key={index}
            >
              <div
                style={{
                  width: 200,
                  height: 200,
                }}
              >
                <ModalImage
                  small={item.gift_picture_url}
                  large={item.gift_picture_url}
                />
              </div>
              <Typography style={{ textAlign: 'center' }}>
                {item.description}
              </Typography>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default Gifts;
