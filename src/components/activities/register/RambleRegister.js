import React, { useState } from 'react';
import { Button, Typography } from '@material-ui/core';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

const RambleRegister = () => {
  return (
    <div
      style={{
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <SignUpForm />
    </div>
  );
};

export default RambleRegister;
