import React from 'react';
import { Controller } from 'react-hook-form';
import { Typography } from '@material-ui/core';

import dynamic from 'next/dynamic';
import ReactMarkdown from 'react-markdown';

const MdEditor = dynamic(() => import('react-markdown-editor-lite'), {
  ssr: false,
});

const Condition = ({ control, errors, unregister, activityDetail }) => {
  return (
    <div>
      <div style={{ display: 'flex' }}>
        <Typography variant="h4">ข้อตกลง และเงื่อนไข</Typography>
      </div>
      <Controller
        name="condition"
        control={control}
        render={({ onChange, onBlur, value }) => (
          <MdEditor
            value={value}
            style={{ height: '500px' }}
            renderHTML={(text) => <ReactMarkdown source={text} />}
            onChange={({ html, text }) => {
              onChange(text);
            }}
          />
        )}
      />
    </div>
  );
};

export default Condition;
