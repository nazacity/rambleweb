import React from 'react';
import { Fab, useTheme } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Link from 'Link';

const FilterButton = ({ setUserActivity }) => {
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
        onClick={() => {
          setUserActivity({
            state: 'unregister',
          });
        }}
      >
        <ArrowBackIcon />
      </Fab>
    </Link>
  );
};

export default FilterButton;
