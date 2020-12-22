import React from 'react';
import LoadingOverlay from 'react-loading-overlay';
import { useSelector } from 'react-redux';
import BeatLoader from 'react-spinners/BeatLoader';
import { useTheme } from '@material-ui/core';

const LoadingPage = ({ children }) => {
  const loading = useSelector((state) => state.layout.loading);
  const theme = useTheme();
  return (
    <LoadingOverlay
      active={loading}
      //   text="Loading your content..."
      spinner={<BeatLoader color={theme.palette.primary.main} />}
    >
      {children}
    </LoadingOverlay>
  );
};

export default LoadingPage;
