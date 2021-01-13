import React, { useState, useEffect, Fragment } from 'react';
import ActivitiesCardListView from './activities/ActivitiesCardListView';
import {
  Grid,
  Typography,
  Card,
  Collapse,
  useMediaQuery,
  IconButton,
} from '@material-ui/core';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
const Activities = ({ activities, setState, setActivityDetail }) => {
  const [open, setOpen] = useState({
    finished: false,
    cancel: false,
  });

  const activityState = (state) => {
    switch (state) {
      case 'finished':
        return (
          <div
            style={{
              display: 'flex',
              backgroundColor: '#ff1744',
              color: '#fff',
              marginBottom: 10,
              padding: 10,
              alignItems: 'center',
            }}
          >
            <Typography variant="h6">สิ้นสุด</Typography>
            <div style={{ flex: 1 }} />
            <IconButton
              onClick={() => {
                setOpen({ ...open, finished: !open.finished });
              }}
              style={{ color: '#fff' }}
            >
              {open.finished ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
          </div>
        );
      case 'cancel':
        return (
          <div
            style={{
              display: 'flex',
              backgroundColor: '#3e2723',
              color: '#fff',
              marginBottom: 10,
              padding: 10,
              alignItems: 'center',
            }}
          >
            <Typography variant="h6">ยกเลิก</Typography>
            <div style={{ flex: 1 }} />
            <IconButton
              onClick={() => {
                setOpen({ ...open, cancel: !open.cancel });
              }}
              style={{ color: '#fff' }}
            >
              {open.cancel ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
          </div>
        );
    }
  };

  const [activitiesByState, setActivitiesByState] = useState({
    finished: [],
    cancel: [],
  });
  const convertData = () => {
    const finished = activities.filter((item) => item.state === 'finished');
    const cancel = activities.filter((item) => item.state === 'cancel');

    setActivitiesByState({
      finished: finished,
      // finished: [...activities, ...activities, ...activities],
      cancel: cancel,
      // cancel: [...activities, ...activities, ...activities],
    });
  };
  useEffect(() => {
    convertData();
  }, [activities]);

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    console.log(removed);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result, item) => {
    const { destination, source, draggable } = result;
    console.log(!destination);
    if (!destination) {
      return;
    }

    if (destination.index === source.index) {
      return;
    }

    const column = activitiesByState[item];
    const quotes = reorder(column, source.index, destination.index);
    setActivitiesByState({ ...activitiesByState, [item]: quotes });
  };

  return (
    <div
      style={{
        margin: 50,
      }}
    >
      <Card style={{ paddingBottom: 40 }}>
        <div>
          {activityState('finished')}
          <Collapse in={open.finished} collapsedHeight={80}>
            <Grid container spacing={2} style={{ padding: 5 }}>
              {activitiesByState.finished.map((activity, index) => {
                return (
                  <Grid item xs={12} key={activity._id}>
                    <ActivitiesCardListView
                      activity={activity}
                      setState={setState}
                      setActivityDetail={setActivityDetail}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Collapse>
        </div>
        <div>
          {activityState('cancel')}
          <Collapse in={open.cancel} collapsedHeight={80}>
            <Grid container spacing={2} style={{ padding: 5 }}>
              {activitiesByState.cancel.map((activity, index) => {
                return (
                  <Grid item xs={3} key={activity._id}>
                    <ActivitiesCardListView
                      activity={activity}
                      setState={setState}
                      setActivityDetail={setActivityDetail}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Collapse>
        </div>
      </Card>
    </div>
  );
};

export default Activities;
