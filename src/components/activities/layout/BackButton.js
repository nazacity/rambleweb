import React from 'react';
import TuneIcon from '@material-ui/icons/Tune';
import { Fab, useTheme } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const FilterButton = ({ setView }) => {
  const theme = useTheme();
  return (
    <Fab
      size="small"
      style={{
        position: 'fixed',
        top: 20,
        left: 20,
        zIndex: 100,
        backgroundColor: '#fff',
        color: theme.palette.primary.main,
      }}
      onClick={() => {
        setView(0);
      }}
    >
      <ArrowBackIcon />
    </Fab>
  );
};

export default FilterButton;
