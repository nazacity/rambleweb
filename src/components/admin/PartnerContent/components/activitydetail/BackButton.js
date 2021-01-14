import React from 'react';
import { AppBar, Fab } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const BackButton = ({ setState }) => {
  return (
    <AppBar
      position="fixed"
      style={{ backgroundColor: 'transparent', top: 100, left: 20 }}
      elevation={0}
    >
      <Fab
        color="primary"
        aria-label="edit"
        onClick={() => {
          setState(0);
        }}
      >
        <ArrowBackIcon />
      </Fab>
    </AppBar>
  );
};

export default BackButton;
