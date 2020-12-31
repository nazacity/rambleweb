import React, { useState, useEffect, Fragment } from 'react';
import { AppBar, useScrollTrigger, Toolbar } from '@material-ui/core';
import { useSelector } from 'react-redux';

const ElevateAppBar = (props) => {
  const { window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return (
    <AppBar
      position="fixed"
      elevation={trigger ? 2 : 0}
      style={{
        borderTop: '1px solid #e0e0e0',
        borderBottom: '1px solid #e0e0e0',
        backgroundColor: trigger ? '#fff' : 'transparent',
      }}
      // color="primary"
    >
      <Toolbar>
        <img
          src="./assets/icon/ramble256.png"
          style={{ height: 80, marginRight: 20 }}
        />
      </Toolbar>
    </AppBar>
  );
};

export default ElevateAppBar;
