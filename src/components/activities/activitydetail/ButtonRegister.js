import { Button } from '@material-ui/core';
import React from 'react';

const ButtonRegister = ({ absolute, onClick, userActivity }) => {
  return (
    <Button
      style={{
        position: absolute ? 'absolute' : undefined,
        bottom: 10,
        right: 10,
        width: 200,
      }}
      variant="contained"
      color="primary"
      onClick={onClick}
    >
      {userActivity.state === 'unregister' && 'สมัคร'}
      {userActivity.state === 'waiting_payment' && 'ชำระ'}
      {userActivity.state === 'upcoming' && 'Upcomimng'}
    </Button>
  );
};

export default ButtonRegister;
