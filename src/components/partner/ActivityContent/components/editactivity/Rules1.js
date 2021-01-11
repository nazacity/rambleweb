import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { IconButton, Typography, Card } from '@material-ui/core';
import { Edit, Save, Close } from '@material-ui/icons';
import ReactMarkdown from 'react-markdown';
import dynamic from 'next/dynamic';

const MdEditor = dynamic(() => import('react-markdown-editor-lite'), {
  ssr: false,
});

const Rules = ({ editMode, setEditMode, activityDetail, editActivity }) => {
  const {
    register,
    handleSubmit,
    unregister,
    control,
    errors,
    reset,
  } = useForm({
    defaultValues: {
      rules1: activityDetail.rules1,
    },
  });

  const onSubmit = async (data) => {
    await editActivity(
      {
        type: 'rules1',
        rules1: data.rules1,
      },
      reset
    );
    setEditMode({ ...editMode, rules1: false });
  };

  if (editMode) {
    return (
      <Card style={{ padding: 20, marginBottom: 20 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ display: 'flex' }}>
            <Typography variant="h4">Rules</Typography>
            <div style={{ flex: 1 }} />
            <IconButton type="submit">
              <Save />
            </IconButton>
            <IconButton
              onClick={() => {
                setEditMode({ ...editMode, rules1: false });
              }}
            >
              <Close />
            </IconButton>
          </div>
          <Controller
            name="rules1"
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
        <Typography variant="h4">กฏ</Typography>
        <div style={{ flex: 1 }} />
        {/* <IconButton
          onClick={() => {
            setEditMode({ ...editMode, rules1: true });
          }}
        >
          <Edit />
        </IconButton> */}
      </div>
      <ReactMarkdown source={activityDetail.rules1} />
    </Card>
  );
};

export default Rules;
