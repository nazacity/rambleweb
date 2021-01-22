import React from 'react';
import TuneIcon from '@material-ui/icons/Tune';
import { Fab, useTheme } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Link from 'Link';

const FilterButton = () => {
  const theme = useTheme();
  return (
    <Link href="/activities">
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
      >
        <ArrowBackIcon />
      </Fab>
    </Link>
  );
};

export default FilterButton;
