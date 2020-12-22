import React, { useState, useEffect, Fragment } from 'react';
import { AppBar, useScrollTrigger } from '@material-ui/core';
import { useSelector } from 'react-redux';
import AdminAppBar from './admin/AdminAppBar';
import PartnerAppBar from './partner/PartnerAppBar';

const ElevateAppBar = (props) => {
  const { window } = props;

  const user = useSelector((state) => state.user);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  if (!user._id) {
    return <div />;
  }

  return (
    <AppBar
      position={trigger ? 'fixed' : 'static'}
      elevation={trigger ? 2 : 0}
      style={{
        borderTop: '1px solid #e0e0e0',
        borderBottom: '1px solid #e0e0e0',
        backgroundColor: 'white',
      }}
      // color="primary"
    >
      {user.type === 'employee' && <AdminAppBar />}
      {user.type === 'partner' && <PartnerAppBar />}
    </AppBar>
  );
};

export default ElevateAppBar;
