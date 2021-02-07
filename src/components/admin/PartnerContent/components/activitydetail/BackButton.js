import React from 'react';
import { AppBar, Fab } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const BackButton = ({ setState }) => {
  return (
    <Fab
      color="primary"
      aria-label="edit"
      style={{ position: 'absolute', top: 100, left: 20 }}
      onClick={() => {
        setState(0);
      }}
    >
      <ArrowBackIcon />
    </Fab>
  );
};

export default BackButton;
