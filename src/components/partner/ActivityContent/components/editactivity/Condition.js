import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { IconButton, Typography, Card } from '@material-ui/core';
import { Edit, Save, Close } from '@material-ui/icons';
import ReactMarkdown from 'react-markdown';
import dynamic from 'next/dynamic';

const MdEditor = dynamic(() => import('react-markdown-editor-lite'), {
  ssr: false,
});

const Condition = ({ editMode, setEditMode, activityDetail, editActivity }) => {
  const { handleSubmit, unregister, control, reset } = useForm({
    defaultValues: {
      condition: activityDetail.condition,
    },
  });

  const onSubmit = async (data) => {
    await editActivity(
      {
        type: 'condition',
        condition: data.condition,
      },
      reset
    );
    setEditMode({ ...editMode, condition: false });
  };
  if (editMode) {
    return (
      <Card style={{ padding: 20, marginBottom: 20 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ display: 'flex' }}>
            <Typography variant="h4">ข้อตกลง และเงื่อนไข</Typography>
            <div style={{ flex: 1 }} />
            <IconButton type="submit">
              <Save />
            </IconButton>
            <IconButton
              onClick={() => {
                setEditMode({ ...editMode, condition: false });
              }}
            >
              <Close />
            </IconButton>
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
        </form>
      </Card>
    );
  }
  return (
    <Card style={{ padding: 20, marginBottom: 20 }}>
      <div style={{ display: 'flex' }}>
        <Typography variant="h4">ข้อตกลง และเงื่อนไข</Typography>
        <div style={{ flex: 1 }} />
        {/* <IconButton
          onClick={() => {
            setEditMode({ ...editMode, condition: true });
          }}
        >
          <Edit />
        </IconButton> */}
      </div>
      <ReactMarkdown source={activityDetail.condition} />
    </Card>
  );
};

export default Condition;
