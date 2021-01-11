import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  IconButton,
  TextField,
  Typography,
  Card,
  CardActionArea,
} from '@material-ui/core';
import { HighlightOff, Add, Edit, Save, Close } from '@material-ui/icons';
import ModalImage from 'react-modal-image';
import { useFadedShadowStyles } from '@mui-treasury/styles/shadow/faded';

const Coupon = ({ activityDetail, editActivity }) => {
  const shadowStyles = useFadedShadowStyles();
  const [editMode, setEditMode] = useState(false);
  const { handleSubmit, unregister, control, reset } = useForm({
    defaultValues: {
      coupons: activityDetail.coupons,
    },
  });
  const [indexes, setIndexes] = React.useState(
    activityDetail.coupons.length > 0
      ? activityDetail.coupons.map((item, index) => {
          return index;
        })
      : [0]
  );
  const [counter, setCounter] = React.useState(
    activityDetail.coupons.length > 0 ? activityDetail.coupons.length : 1
  );
  const addCourse = () => {
    setIndexes((prevIndexes) => [...prevIndexes, counter]);
    setCounter((prevCounter) => prevCounter + 1);
  };

  const removeCourse = (index) => () => {
    setIndexes((prevIndexes) => [
      ...prevIndexes.filter((item) => item !== index),
    ]);
    const fieldName = `coupons[${index}]`;
    unregister(`${fieldName}.coupons`);
  };

  const onSubmit = async (data) => {
    // const coupons = data.coupons.map((item, index) => {
    //   return { ...item, id: `${index + 1}` };
    // });
    await editActivity(
      {
        type: 'coupons',
        coupons: [...data.coupons],
      },
      reset
    );
    setEditMode(false);
  };
  if (editMode) {
    return (
      <Card
        style={{ borderRadius: 10, marginTop: 50 }}
        className={shadowStyles.root}
      >
        <div
          style={{
            display: 'flex',
            backgroundColor: '#8a1776',
            padding: 10,
            height: 50,
          }}
        >
          <Typography
            variant="h5"
            color="primary"
            style={{ color: '#fff', textAlign: 'center' }}
          >
            คูปอง
          </Typography>
          <div style={{ flex: 1 }} />
          <IconButton
            onClick={handleSubmit(onSubmit)}
            style={{ color: '#fff' }}
          >
            <Save />
          </IconButton>
          <IconButton
            onClick={() => {
              setEditMode(false);
            }}
            style={{ color: '#fff' }}
          >
            <Close />
          </IconButton>
          <IconButton onClick={addCourse} style={{ color: '#fff' }}>
            <Add />
          </IconButton>
        </div>
        <div style={{ padding: 20 }}>
          {indexes.map((index) => {
            return (
              <div name="coupons" key={index}>
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
                  name={`coupons[${index}].description`}
                  control={control}
                  defaultValue=""
                  label={`coupon description ${index + 1}`}
                  variant="outlined"
                  // disabled={loading}
                  style={{
                    width: '100%',
                    margin: '1vh auto',
                  }}
                />
                <Controller
                  as={TextField}
                  name={`coupons[${index}].coupon_picture_url`}
                  control={control}
                  defaultValue=""
                  label={`coupon picture url ${
                    index + 1
                  } กว้าง 600 px สูง 300 px`}
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
        </div>
      </Card>
    );
  }
  return (
    <Card
      style={{ borderRadius: 10, marginTop: 50 }}
      className={shadowStyles.root}
    >
      <div
        style={{
          display: 'flex',
          backgroundColor: '#8a1776',
          padding: 10,
          height: 50,
        }}
      >
        <Typography
          variant="h5"
          color="primary"
          style={{ color: '#fff', textAlign: 'center' }}
        >
          คูปอง
        </Typography>
        <div style={{ flex: 1 }} />
        <IconButton
          style={{ color: '#fff' }}
          onClick={() => {
            setEditMode(true);
          }}
        >
          <Edit />
        </IconButton>
      </div>

      <div style={{ padding: 10 }}>
        {activityDetail.coupons.map((item, index) => {
          return (
            <Card key={index} style={{ margin: 20 }}>
              <CardActionArea
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    width: 300,
                    height: 200,
                    overflow: 'hidden',
                  }}
                >
                  <ModalImage
                    small={item.coupon_picture_url}
                    large={item.coupon_picture_url}
                  />
                </div>
                <Typography variant="body1" color="primary">
                  {item.description}
                </Typography>
              </CardActionArea>
            </Card>
          );
        })}
      </div>
    </Card>
  );
};

export default Coupon;
