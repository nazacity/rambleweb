import React from 'react';
import { Dialog } from '@material-ui/core';
import Lottie from 'react-lottie';
import * as animationData from './successed.json';

const RegisterSuccessedDialog = ({ open, handleClose }) => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Lottie options={defaultOptions} />
      </div>
    </Dialog>
  );
};

export default RegisterSuccessedDialog;
