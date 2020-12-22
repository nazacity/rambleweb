import React, { useState, useEffect } from 'react';

// MUI
import {
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Slide,
  Avatar,
  Button,
} from '@material-ui/core';
import { Close, Add } from '@material-ui/icons';

import Activities from './Activities';
import ActivityDetail from './ActivityDetail';
import AddActivity from './AddActivity';

import { get } from '../../../../src/utils/request';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({
  open,
  handleClose,
  profile,
  loadingTrue,
  loadingFalse,
}) {
  const [state, setState] = useState(0);
  const [activities, setActivities] = useState(0);
  const [activityDetail, setActivityDetail] = useState({});

  const stateContent = () => {
    switch (state) {
      case 0:
        return (
          <Activities
            activities={activities}
            setState={setState}
            setActivityDetail={setActivityDetail}
          />
        );
      case 1:
        return (
          <ActivityDetail
            activityDetail={activityDetail}
            setActivityDetail={setActivityDetail}
            setState={setState}
            loadingTrue={loadingTrue}
            loadingFalse={loadingFalse}
          />
        );
      case 2:
        return (
          <AddActivity
            setState={setState}
            partnerId={profile._id}
            loadingTrue={loadingTrue}
            loadingFalse={loadingFalse}
            getActivitiesById={getActivitiesById}
          />
        );
    }
  };

  const getActivitiesById = async () => {
    if (profile._id) {
      loadingTrue();
      try {
        const res = await get(`/api/employees/getpartner/${profile._id}`);
        setActivities(res.activities);
      } catch (error) {
        console.log(error);
      }
    } else {
      return;
    }
    loadingFalse();
  };

  useEffect(() => {
    getActivitiesById();
  }, [profile]);

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={() => {
        setState(0);
        handleClose();
      }}
      TransitionComponent={Transition}
      style={{ zIndex: 50, minWidth: 800 }}
    >
      <AppBar style={{ position: 'relative' }}>
        <Toolbar>
          <Avatar src={profile.picture_url} />
          <Typography
            variant="h6"
            style={{
              marginLeft: 20,
              flex: 1,
            }}
          >
            {profile.display_name}
          </Typography>
          {state === 2 ? (
            <Button
              color="inherit"
              onClick={() => {
                setState(0);
              }}
              style={{ marginRight: 20 }}
            >
              ยกเลิก
            </Button>
          ) : (
            <Button
              color="inherit"
              onClick={() => {
                setState(2);
              }}
              startIcon={<Add />}
              style={{ marginRight: 20 }}
            >
              สร้างกิจกรรม
            </Button>
          )}
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => {
              setState(0);
              handleClose();
            }}
            aria-label="close"
          >
            <Close />
          </IconButton>
        </Toolbar>
      </AppBar>
      {stateContent()}
    </Dialog>
  );
}
