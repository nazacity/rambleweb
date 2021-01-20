import React, { useState } from 'react';
import { Button, Typography } from '@material-ui/core';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

const RambleRegister = () => {
  const [view, setView] = useState(0);

  return (
    <div
      style={{
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {view === 0 && <SignInForm setView={setView} />}
      {view === 1 && <SignUpForm setView={setView} />}
    </div>
  );
};

export default RambleRegister;
