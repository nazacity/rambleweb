import React from 'react';
import LoadingOverlay from 'react-loading-overlay';
import { useSelector } from 'react-redux';
import BeatLoader from 'react-spinners/BeatLoader';
import { CircularProgress, makeStyles, useMediaQuery } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    marginBottom: 50,
  },
  bottom: {
    color: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  top: {
    color: theme.palette.primary.main,
    animationDuration: '550ms',
    position: 'absolute',
    left: 0,
  },
  circle: {
    strokeLinecap: 'round',
  },
}));

const LoadingPage = ({ children }) => {
  const loading = useSelector((state) => state.layout.loading);
  const classes = useStyles();
  const matches600down = useMediaQuery('(max-width:600px)');
  const matches1200down = useMediaQuery('(max-width:1200px)');

  return (
    <LoadingOverlay
      active={loading}
      //   text="Loading your content..."
      spinner={
        <div className={classes.root}>
          <CircularProgress
            variant="indeterminate"
            disableShrink
            className={classes.top}
            classes={{
              circle: classes.circle,
            }}
            size={matches600down ? 30 : matches1200down ? 40 : 50}
            thickness={4}
          />
        </div>
      }
    >
      {children}
    </LoadingOverlay>
  );
};

export default LoadingPage;
