import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  IconButton,
  TextField,
  Typography,
  Card,
  Button,
  Dialog,
  CardActionArea,
} from '@material-ui/core';
import { Edit, Save, Close } from '@material-ui/icons';
import DeleteIcon from '@material-ui/icons/Delete';
import { post, Delete } from 'utils/request';
import { useSelector } from 'react-redux';
import moment from 'moment';
import 'moment/locale/th';

const AnnoucementCard = ({ item, setActivityDetail, activityDetail }) => {
  const [editMode, setEditMode] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const { handleSubmit, unregister, control, reset, errors } = useForm({
    defaultValues: item,
  });
  const lang = useSelector((state) => state.layout.lang);
  moment.locale(lang);
  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const onSubmit = async (data) => {
    const res = await post(`/api/partners/announcement/${item._id}`, {
      activity_id: activityDetail._id,
      ...item,
      ...data,
    });

    if (res.status === 200) {
      setActivityDetail(res.data);
      reset(item);
    }
    setEditMode(false);
  };

  const onDelete = async () => {
    const res = await Delete(
      `/api/partners/announcement/${activityDetail._id}/${item._id}`
    );
    if (res.status === 200) {
      setActivityDetail(res.data);
      reset(item);
    }
  };

  if (editMode) {
    return (
      <Card style={{ padding: 10, marginBottom: 20 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ marginBottom: 20 }}>
            <div>
              <Controller
                name="picture_url"
                control={control}
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
                        value={value}
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
                style={{ width: '100%', borderRadius: 5, marginBottom: 10 }}
                type="submit"
              >
                ประกาศ
              </Button>
              <Button
                variant="outlined"
                color="primary"
                style={{ width: '100%', borderRadius: 5 }}
                onClick={() => {
                  setEditMode(false);
                }}
              >
                ยกเลิก
              </Button>
            </div>
          </div>
        </form>
      </Card>
    );
  }
  return (
    <div>
      <Card
        style={{
          borderRadius: 5,
          display: 'flex',
          cursor: 'pointer',
        }}
        onClick={() => {
          if (item.description.length > 80) {
            setDialogOpen(true);
          }
        }}
      >
        <CardActionArea
          style={{
            display: 'flex',
          }}
        >
          <img
            src={
              item.picture_url
                ? item.picture_url
                : activityDetail.activity_picture_url
            }
            style={{
              width: 100,
              height: 100,
              borderBottomLeftRadius: 5,
              borderTopLeftRadius: 5,
            }}
          />
          <div
            style={{
              margin: 5,
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              flex: 1,
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Typography variant="h6">{item.title}</Typography>
              <Typography variant="body1">
                {moment(item.createdAt).fromNow()}
              </Typography>
            </div>
            <Typography variant="body1">
              {item.description.length > 80
                ? item.description.substring(0, 80) + '...'
                : item.description}
            </Typography>
          </div>
        </CardActionArea>
      </Card>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <IconButton
          onClick={() => {
            setEditMode(true);
          }}
        >
          <Edit />
        </IconButton>
        <IconButton onClick={onDelete}>
          <DeleteIcon />
        </IconButton>
      </div>
      <Dialog
        open={dialogOpen}
        onClose={handleDialogClose}
        maxWidth="sm"
        fullWidth
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 20,
          }}
        >
          <img
            src={
              item.picture_url
                ? item.picture_url
                : activityDetail.activity_picture_url
            }
            style={{
              width: 200,
              height: 200,
              borderRadius: 10,
            }}
          />
          <Typography variant="h6">{item.title}</Typography>
          <Typography variant="body1">{item.description}</Typography>
        </div>
      </Dialog>
    </div>
  );
};

export default AnnoucementCard;
