import React from 'react';
import TuneIcon from '@material-ui/icons/Tune';
import { Fab, useTheme } from '@material-ui/core';

const FilterButton = ({ setFilterDialogOpen }) => {
  const theme = useTheme();
  return (
    <Fab
      size="small"
      style={{
        position: 'fixed',
        top: 20,
        right: 20,
        zIndex: 100,
        backgroundColor: '#fff',
        color: theme.palette.primary.main,
      }}
      onClick={() => {
        setFilterDialogOpen(true);
      }}
    >
      <TuneIcon />
    </Fab>
  );
};

export default FilterButton;
