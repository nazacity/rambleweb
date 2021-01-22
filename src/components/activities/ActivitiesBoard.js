import { api } from 'api/api';
import axios from 'axios';
import React, { useState, useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '../../../redux/actions/layoutActions';

import { CardActionArea, makeStyles, Typography } from '@material-ui/core';

import FilterButton from './layout/FilterButton';
import BackButton from './layout/BackButton';
import FilterDialog from './activitiesboard/FilterDialog';
import AllActivities from './activitiesboard/AllActivities';
import FilteredActivities from './activitiesboard/FilteredActivities';

const ActivitiesBoard = () => {
  const [filterDialogOpen, setFilterDialogOpen] = useState(false);
  const [view, setView] = useState(0);
  const [filteredActivities, setFilteredActivities] = useState([]);

  const handleFilterDialogClose = () => {
    setFilterDialogOpen(false);
  };

  return (
    <div>
      {view === 1 && <BackButton setView={setView} />}
      <FilterButton setFilterDialogOpen={setFilterDialogOpen} />
      <FilterDialog
        open={filterDialogOpen}
        handleClose={handleFilterDialogClose}
        setView={setView}
        setFilteredActivities={setFilteredActivities}
      />

      {view === 0 && <AllActivities />}
      {view === 1 && (
        <FilteredActivities
          filteredActivities={filteredActivities}
          setFilteredActivities={setFilteredActivities}
        />
      )}
      <div style={{ marginBottom: 50 }} />
    </div>
  );
};

export default ActivitiesBoard;
