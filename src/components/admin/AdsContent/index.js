import React, { useState } from 'react';
import { IconButton, AppBar, Tabs, Tab, Toolbar } from '@material-ui/core';
import MainContent from './components/MainContent';
import BlogContent from './components/BlogContent';
import SocialContent from './components/SocialContent';

const index = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const stateContent = () => {
    switch (value) {
      case 0:
        return <MainContent />;
      case 1:
        return <BlogContent />;
      case 2:
        return <SocialContent />;
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
            <Tab label="Main Content" />
            <Tab label="Blog Content" />
            <Tab label="Social Content" />
          </Tabs>
        </Toolbar>
      </AppBar>
      {stateContent()}
    </div>
  );
};

export default index;
