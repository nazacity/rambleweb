import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  IconButton,
  TextField,
  Typography,
  Card,
  Button,
} from '@material-ui/core';
import { HighlightOff, Add, Edit, Save, Close } from '@material-ui/icons';
import ModalImage from 'react-modal-image';
import { post } from 'utils/request';
import { useSelector } from 'react-redux';
import moment from 'moment';
import 'moment/locale/th';
import AnnoucementCard from '../announcement/AnnoucementCard';
import { useFadedShadowStyles } from '@mui-treasury/styles/shadow/faded';

const Announcement = ({ activityDetail, setActivityDetail }) => {
  const shadowStyles = useFadedShadowStyles();
  const { handleSubmit, unregister, control, reset, errors } = useForm({});
  const lang = useSelector((state) => state.layout.lang);
  moment.locale(lang);

  const onSubmit = async (data) => {
    const res = await post('/api/partners/announcement', {
      activity_id: activityDetail._id,
      ...data,
    });

    if (res.status === 200) {
      setActivityDetail(res.data);
    }
    reset();
    setEditMode(false);
  };

  return (
    <Card
      style={{ padding: 20, borderRadius: 10 }}
      className={shadowStyles.root}
    >
      <div style={{ display: 'flex' }}>
        <Typography variant="h4">ประกาศ</Typography>
        <div style={{ flex: 1 }} />
      </div>
      <Card style={{ padding: 5, marginBottom: 20 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ marginBottom: 20 }}>
            <div>
              <Controller
                name="picture_url"
                control={control}
                defaultValue=""
                render={({ onChange, value }) => {
                  return (
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                      }}
                    >
                      <TextField
                        label="picture url 300x300"
                        variant="outlined"
                        error={errors.picture_url && true}
                        helperText={errors.picture_url?.message}
                        onChange={onChange}
                        style={{ width: '100%', marginBottom: 10 }}
                      />
                      {value !== '' && (
                        <img
                          src={value}
                          style={{
                            height: 100,
                            width: 100,
                            borderRadius: 5,
                            marginBottom: 10,
                          }}
                        />
                      )}
                    </div>
                  );
                }}
              />
            </div>
            <div>
              <Controller
                as={TextField}
                name="title"
                control={control}
                defaultValue=""
                label="Title"
                variant="outlined"
                rules={{
                  required: 'กรุณาใส่ title',
                }}
                error={errors.title && true}
                helperText={errors.title?.message}
                // disabled={loading}
                style={{ width: '100%', marginBottom: 10 }}
              />
              <Controller
                as={TextField}
                name="description"
                control={control}
                defaultValue=""
                label="Description"
                variant="outlined"
                rules={{
                  required: 'กรุณาใส่ Description',
                }}
                error={errors.description && true}
                helperText={errors.description?.message}
                // disabled={loading}
                style={{ width: '100%', marginBottom: 10 }}
                multiline={true}
                rows={3}
              />
              <Button
                variant="contained"
                color="primary"
                style={{ width: '100%', borderRadius: 5 }}
                type="submit"
              >
                ประกาศ
              </Button>
            </div>
          </div>
        </form>
      </Card>
      <div>
        {activityDetail.announcement.length > 0 &&
          activityDetail.announcement
            .sort((a, b) => {
              return new Date(b.createdAt) - new Date(a.createdAt);
            })
            .map((item) => {
              return (
                <AnnoucementCard
                  item={item}
                  activityDetail={activityDetail}
                  setActivityDetail={setActivityDetail}
                  key={item._id}
                />
              );
            })}
      </div>
    </Card>
  );
};

export default Announcement;
