import React, { useState } from 'react';
import { IconButton, AppBar, Tabs, Tab, Toolbar } from '@material-ui/core';
import MainAdvertize from './components/MainAdvertize';

const index = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const stateContent = () => {
    switch (value) {
      case 0:
        return <MainAdvertize />;

      default:
        return <div>Content is Not Found</div>;
    }
  };

  return (
    <div>
      <AppBar position="static" color="default">
        <Toolbar>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab label="Main Advertize" />
            <Tab label="Onboarding" />
          </Tabs>
        </Toolbar>
      </AppBar>
      {stateContent()}
    </div>
  );
};

export default index;
