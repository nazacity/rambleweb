import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { IconButton, TextField, Typography, Card } from '@material-ui/core';
import { HighlightOff, Add, Edit, Save, Close } from '@material-ui/icons';
import RuleDetails from './RuleDetail';

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
      rules: activityDetail.rules.map((item) => {
        if (
          item.detail &&
          item.detail.length === 1 &&
          item.detail[0].description === null
        ) {
          return {
            ...item,
            detail: [{ description: '' }],
          };
        } else {
          return {
            ...item,
            detail: item.detail,
          };
        }
      }),
    },
  });
  const [indexes, setIndexes] = React.useState(
    activityDetail.rules.length > 0
      ? activityDetail.rules.map((item, index) => {
          return index;
        })
      : [0]
  );
  const [counter, setCounter] = React.useState(
    activityDetail.rules.length > 0 ? activityDetail.rules.length : 1
  );
  const addCourse = () => {
    setIndexes((prevIndexes) => [...prevIndexes, counter]);
    setCounter((prevCounter) => prevCounter + 1);
  };

  const removeCourse = (index) => () => {
    setIndexes((prevIndexes) => [
      ...prevIndexes.filter((item) => item !== index),
    ]);
    const fieldName = `rules[${index}]`;
    unregister(`${fieldName}.title`);
  };

  const onSubmit = async (data) => {
    const rules = data.rules.map((item, index) => {
      const detail = item.detail.map((item, index) => {
        return { ...item, id: `${index + 1}` };
      });
      return { ...item, id: `${index + 1}`, detail: detail };
    });
    await editActivity(
      {
        type: 'rules',
        rules: [...rules],
      },
      reset
    );
    setEditMode({ ...editMode, rules: false });
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
                setEditMode({ ...editMode, rules: false });
              }}
            >
              <Close />
            </IconButton>
            <IconButton onClick={addCourse}>
              <Add />
            </IconButton>
          </div>
          {indexes.map((index) => {
            return (
              <div name="courses" key={index}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                  }}
                >
                  <Typography variant="h6">Rule {index + 1}</Typography>
                  <div style={{ flex: 1 }} />
                  <IconButton
                    variant="outlined"
                    color="primary"
                    onClick={removeCourse(index)}
                    disabled={index === 0}
                  >
                    <HighlightOff />
                  </IconButton>
                </div>
                <div style={{ display: 'flex' }}>
                  <Controller
                    as={TextField}
                    name={`rules[${index}].title`}
                    control={control}
                    defaultValue=""
                    label={`Rule ${index + 1}`}
                    variant="outlined"
                    // disabled={loading}
                    style={{
                      width: '100%',
                      margin: '1vh auto',
                    }}
                  />
                </div>
                <RuleDetails
                  control={control}
                  errors={errors}
                  unregister={unregister}
                  ruleIndex={`rules[${index}]`}
                  index={index}
                  activityDetail={activityDetail}
                />
              </div>
            );
          })}
        </form>
      </Card>
    );
  }

  return (
    <Card style={{ padding: 20, marginBottom: 20 }}>
      <div style={{ display: 'flex' }}>
        <Typography variant="h4">กติการางวัล</Typography>
        <div style={{ flex: 1 }} />
        {/* <IconButton
          onClick={() => {
            setEditMode({ ...editMode, rules: true });
          }}
        >
          <Edit />
        </IconButton> */}
      </div>
      <div style={{ paddingLeft: 20 }}>
        {activityDetail.rules.map((item, index) => {
          return (
            <div key={index} style={{ paddingHorizontal: 20, marginBottom: 5 }}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    backgroundColor: 'red',
                    width: 10,
                    height: 10,
                    borderRadius: 10,
                    marginRight: 10,
                  }}
                />
                <div style={{ flex: 1 }}>
                  <Typography>{item.title}</Typography>
                </div>
              </div>
              <div style={{ paddingLeft: 40 }}>
                {item.detail &&
                  item.detail.map((item, index) => {
                    return (
                      <div key={index}>
                        <Typography>{item.description}</Typography>
                      </div>
                    );
                  })}
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default Rules;
