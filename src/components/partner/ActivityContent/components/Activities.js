import React, { useState, useEffect, Fragment } from 'react';
import ActivitiesCardListView from './activities/ActivitiesCardListView';
import ActivitiesCardModuleView from './activities/ActivitiesCardModuleView';
import { Grid, Typography, Card, Hidden, IconButton } from '@material-ui/core';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { activity_state } from 'constants/activity';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ViewListIcon from '@material-ui/icons/ViewList';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ViewQuiltIcon from '@material-ui/icons/ViewQuilt';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

const Activities = ({ activities, setState, setActivityDetail }) => {
  const [open, setOpen] = useState({
    finished: false,
    cancel: false,
  });
  const [view, setView] = React.useState('list');

  const handleChange = (event, nextView) => {
    setView(nextView);
  };

  const activityState = (state) => {
    switch (state) {
      case 'pre_register':
        return (
          <div
            style={{
              display: 'inline-block',
              backgroundColor: '#ffc400',
              color: '#fff',
              marginBottom: 10,
              padding: 10,
              width: 320,
            }}
          >
            <Typography variant="h6">ก่อนเปิดรับสมัคร</Typography>
          </div>
        );
      case 'registering':
        return (
          <div
            style={{
              display: 'inline-block',
              backgroundColor: '#64dd17',
              color: '#fff',
              marginBottom: 10,
              padding: 10,
              width: 320,
            }}
          >
            <Typography variant="h6">ห้วงสมัคร</Typography>
          </div>
        );
      case 'end_register':
        return (
          <div
            style={{
              display: 'inline-block',
              backgroundColor: '#29b6f6',
              color: '#fff',
              marginBottom: 10,
              padding: 10,
              width: 320,
            }}
          >
            <Typography variant="h6">ปิดรับสมัคร</Typography>
          </div>
        );
      case 'actual_date':
        return (
          <div
            style={{
              display: 'inline-block',
              backgroundColor: '#2979ff',
              color: '#fff',
              marginBottom: 10,
              padding: 10,
              width: 320,
            }}
          >
            <Typography variant="h6">วันงาน</Typography>
          </div>
        );
      case 'finished':
        return (
          <div
            style={{
              display: 'flex',
              backgroundColor: '#ff1744',
              color: '#fff',
              marginBottom: 10,
              padding: 10,
              width: 320 * 4,
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
              width: 320,
              width: 320 * 4,
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
    pre_register: [],
    registering: [],
    end_register: [],
    actual_date: [],
  });
  const convertData = () => {
    const pre_register = activities.filter(
      (item) => item.state === 'pre_register'
    );
    const registering = activities.filter(
      (item) => item.state === 'registering'
    );
    const end_register = activities.filter(
      (item) => item.state === 'end_register'
    );
    const actual_date = activities.filter(
      (item) => item.state === 'actual_date'
    );
    // const finished = activities.filter((item) => item.state === 'finished');
    // const cancel = activities.filter((item) => item.state === 'cancel');

    setActivitiesByState({
      pre_register: pre_register,
      registering: registering,
      end_register: end_register,
      actual_date: actual_date,
      // finished: finished,
      // finished: [...activities, ...activities, ...activities],
      // cancel: cancel,
      // cancel: [...activities, ...activities, ...activities],
    });
  };
  useEffect(() => {
    convertData();
  }, [activities]);

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);

    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result, item) => {
    const { destination, source, draggable } = result;
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
        display: 'flex',
        justifyContent: 'center',
        marginTop: 50,
        marginBottom: 100,
      }}
    >
      <div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <ToggleButtonGroup
            orientation="horizontal"
            value={view}
            exclusive
            onChange={handleChange}
          >
            <ToggleButton value="list" aria-label="list">
              <ViewListIcon />
            </ToggleButton>
            <ToggleButton value="module" aria-label="module">
              <ViewModuleIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        <Card style={{ paddingBottom: 40 }}>
          <Hidden mdDown>
            {view === 'list' && (
              <Fragment>
                <div style={{ display: 'flex' }}>
                  {activity_state.map((item) => {
                    return (
                      <DragDropContext
                        onDragEnd={(result) => onDragEnd(result, item)}
                        key={item}
                      >
                        <div>
                          {activityState(item)}
                          <Droppable droppableId={item}>
                            {(provided) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                style={{
                                  display: 'flex',
                                  flexDirection: 'column',
                                  alignItems: 'center',
                                }}
                              >
                                {activitiesByState[item].map(
                                  (activity, index) => {
                                    return (
                                      <Draggable
                                        draggableId={activity._id}
                                        index={index}
                                        key={activity._id}
                                      >
                                        {(provided) => (
                                          <div
                                            key={activity._id}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            ref={provided.innerRef}
                                          >
                                            <ActivitiesCardListView
                                              activity={activity}
                                              setState={setState}
                                              setActivityDetail={
                                                setActivityDetail
                                              }
                                            />
                                          </div>
                                        )}
                                      </Draggable>
                                    );
                                  }
                                )}
                                {provided.placeholder}
                              </div>
                            )}
                          </Droppable>
                        </div>
                      </DragDropContext>
                    );
                  })}
                </div>
              </Fragment>
            )}
            {view === 'module' && (
              <Fragment>
                <Grid
                  container
                  spacing={2}
                  style={{ padding: 20, width: 320 * 4 }}
                >
                  {activities.length > 0 &&
                    activities.map((item, index) => {
                      if (item.state === 'finished' || item.state == 'cancel') {
                        return;
                      }
                      return (
                        <Grid key={item._id} item xs={4}>
                          <ActivitiesCardModuleView
                            activity={item}
                            setState={setState}
                            setActivityDetail={setActivityDetail}
                          />
                        </Grid>
                      );
                    })}
                </Grid>
              </Fragment>
            )}
          </Hidden>
          <Hidden xsDown lgUp>
            {view === 'list' && (
              <Fragment>
                <div style={{ display: 'flex' }}>
                  {activity_state.slice(0, 2).map((item) => {
                    return (
                      <DragDropContext
                        onDragEnd={(result) => onDragEnd(result, item)}
                        key={item}
                      >
                        <div>
                          {activityState(item)}
                          <Droppable droppableId={item}>
                            {(provided) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                style={{
                                  display: 'flex',
                                  flexDirection: 'column',
                                  alignItems: 'center',
                                }}
                              >
                                {activitiesByState[item].map(
                                  (activity, index) => {
                                    return (
                                      <Draggable
                                        draggableId={activity._id}
                                        index={index}
                                        key={activity._id}
                                      >
                                        {(provided) => (
                                          <div
                                            key={activity._id}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            ref={provided.innerRef}
                                          >
                                            <ActivitiesCardListView
                                              activity={activity}
                                              setState={setState}
                                              setActivityDetail={
                                                setActivityDetail
                                              }
                                            />
                                          </div>
                                        )}
                                      </Draggable>
                                    );
                                  }
                                )}
                                {provided.placeholder}
                              </div>
                            )}
                          </Droppable>
                        </div>
                      </DragDropContext>
                    );
                  })}
                </div>
                <div style={{ display: 'flex' }}>
                  {activity_state.slice(2).map((item) => {
                    return (
                      <DragDropContext
                        onDragEnd={(result) => onDragEnd(result, item)}
                        key={item}
                      >
                        <div>
                          {activityState(item)}
                          <Droppable droppableId={item}>
                            {(provided) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                style={{
                                  display: 'flex',
                                  flexDirection: 'column',
                                  alignItems: 'center',
                                }}
                              >
                                {activitiesByState[item].map(
                                  (activity, index) => {
                                    return (
                                      <Draggable
                                        draggableId={activity._id}
                                        index={index}
                                        key={activity._id}
                                      >
                                        {(provided) => (
                                          <div
                                            key={activity._id}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            ref={provided.innerRef}
                                          >
                                            <ActivitiesCardListView
                                              activity={activity}
                                              setState={setState}
                                              setActivityDetail={
                                                setActivityDetail
                                              }
                                            />
                                          </div>
                                        )}
                                      </Draggable>
                                    );
                                  }
                                )}
                                {provided.placeholder}
                              </div>
                            )}
                          </Droppable>
                        </div>
                      </DragDropContext>
                    );
                  })}
                </div>
              </Fragment>
            )}
            {view === 'module' && (
              <Fragment>
                <Grid container spacing={2} style={{ padding: 20 }}>
                  {activities.length > 0 &&
                    activities.map((item, index) => {
                      if (item.state === 'finished' || item.state == 'cancel') {
                        return;
                      }
                      return (
                        <Grid key={item._id} item xs={6}>
                          <ActivitiesCardModuleView
                            activity={item}
                            setState={setState}
                            setActivityDetail={setActivityDetail}
                          />
                        </Grid>
                      );
                    })}
                </Grid>
              </Fragment>
            )}
          </Hidden>
          <Hidden smUp>
            {view === 'list' && (
              <Fragment>
                <div>
                  {activity_state.map((item) => {
                    return (
                      <DragDropContext
                        onDragEnd={(result) => onDragEnd(result, item)}
                        key={item}
                      >
                        <div>
                          {activityState(item)}
                          <Droppable droppableId={item}>
                            {(provided) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                style={{
                                  display: 'flex',
                                  flexDirection: 'column',
                                  alignItems: 'center',
                                }}
                              >
                                {activitiesByState[item].map(
                                  (activity, index) => {
                                    return (
                                      <Draggable
                                        draggableId={activity._id}
                                        index={index}
                                        key={activity._id}
                                      >
                                        {(provided) => (
                                          <div
                                            key={activity._id}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            ref={provided.innerRef}
                                          >
                                            <ActivitiesCardListView
                                              activity={activity}
                                              setState={setState}
                                              setActivityDetail={
                                                setActivityDetail
                                              }
                                            />
                                          </div>
                                        )}
                                      </Draggable>
                                    );
                                  }
                                )}
                                {provided.placeholder}
                              </div>
                            )}
                          </Droppable>
                        </div>
                      </DragDropContext>
                    );
                  })}
                </div>
              </Fragment>
            )}
            {view === 'module' && (
              <Fragment>
                <Grid container spacing={2} style={{ padding: 20 }}>
                  {activities.length > 0 &&
                    activities.map((item, index) => {
                      if (item.state === 'finished' || item.state == 'cancel') {
                        return;
                      }
                      return (
                        <Grid key={item._id} item xs={12}>
                          <ActivitiesCardModuleView
                            activity={item}
                            setState={setState}
                            setActivityDetail={setActivityDetail}
                          />
                        </Grid>
                      );
                    })}
                </Grid>
              </Fragment>
            )}
          </Hidden>
        </Card>
      </div>
    </div>
  );
};

export default Activities;
