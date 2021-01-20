import { Button } from '@material-ui/core';
import React from 'react';

const ButtonRegister = ({ absolute, onClick }) => {
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
      สมัคร
    </Button>
  );
};

export default ButtonRegister;