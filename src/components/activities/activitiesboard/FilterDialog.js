import {
  Typography,
  IconButton,
  Grid,
  Button,
  useTheme,
  Slider,
} from '@material-ui/core';
import { Close } from '@material-ui/icons';
import React, { useState, useEffect, Fragment } from 'react';
import { post } from 'utils/request';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import { regionEnum1 } from 'constants/provinces';
import Select from 'react-select';
import { useForm, Controller } from 'react-hook-form';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { useToasts } from 'react-toast-notifications';
import { useDispatch } from 'react-redux';
import { setLoading } from '../../../../redux/actions/layoutActions';
import Axios from 'axios';
import { api } from 'api/api';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FilterDialog = ({
  open,
  handleClose,
  setView,
  setFilteredActivities,
}) => {
  const { handleSubmit, unregister, control, reset, errors } = useForm({
    defaultValues: {},
  });
  const [value, setValue] = useState([0, 100]);
  const theme = useTheme();
  const { addToast } = useToasts();
  const dispatch = useDispatch();

  const handleRangeChange = (event, newValue) => {
    setValue(newValue);
  };
  const [selectedDate, setSelectedDate] = React.useState({
    startDate: new Date(),
    endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
  });

  const onSubmit = async (data) => {
    if (!data.region) {
      addToast('กรุณาเลือกภูมิภาค', {
        appearance: 'error',
        autoDismiss: true,
      });
    } else {
      dispatch(setLoading(true));
      try {
        const res = await Axios.get(
          `${api}/api/everyone/getactivities?region=${data.region.value}&from=${selectedDate.startDate}&to=${selectedDate.endDate}&range_min=${value[0]}&range_max=${value[1]}&limit=50`
        );

        if (res.status === 200) {
          setFilteredActivities([...res.data]);
        }
        dispatch(setLoading(false));
        setView(1);
        handleClose();
      } catch (error) {
        console.log(error);
        dispatch(setLoading(false));
      }
    }
  };

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
      style={{
        zIndex: 100,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 20,
          paddingTop: 60,
        }}
      >
        <div style={{ position: 'absolute', right: 10, top: 10, zIndex: 5000 }}>
          <IconButton onClick={handleClose}>
            <Close color="primary" />
          </IconButton>
        </div>
        <div style={{ marginBottom: 20, width: '100%' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: 10,
                backgroundColor: theme.palette.primary.main,
              }}
            />
            <Typography style={{ marginLeft: 10 }} color="primary" variant="h6">
              ภูมิภาค
            </Typography>
          </div>
          <Controller
            menuPlacement="auto"
            name="region"
            control={control}
            label="คอร์ส"
            variant="outlined"
            // disabled={loading}
            defaultValue={''}
            render={({ onChange, value }) => (
              <Select
                value={value}
                options={regionEnum1}
                onChange={(e) => {
                  onChange(e);
                }}
                placeholder="เลือกภูมิภาค"
                styles={{
                  control: (styles) => ({
                    ...styles,
                    backgroundColor: 'white',
                    height: 60,
                    width: '100%',
                  }),
                  container: (styles) => ({
                    ...styles,
                    width: '100%',
                    height: 60,
                    zIndex: 500,
                    width: '100%',
                  }),
                }}
              />
            )}
          />
        </div>
        <div style={{ marginBottom: 20, width: '100%' }}>
          <div
            style={{
              display: 'flex',
              width: '100%',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: 10,
                backgroundColor: theme.palette.primary.main,
              }}
            />
            <Typography style={{ marginLeft: 10 }} color="primary" variant="h6">
              ระยะทาง (กม.)
            </Typography>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Typography
              style={{ marginRight: 20 }}
              color="primary"
              variant="body2"
            >
              {value[0]}
            </Typography>
            <Slider
              value={value}
              onChange={handleRangeChange}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
            />
            <Typography
              style={{ marginLeft: 20 }}
              color="primary"
              variant="body2"
            >
              {value[1]}
            </Typography>
          </div>
        </div>
        <div style={{ marginBottom: 20, width: '100%' }}>
          <div
            style={{
              display: 'flex',
              width: '100%',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: 10,
                backgroundColor: theme.palette.primary.main,
              }}
            />
            <Typography style={{ marginLeft: 10 }} color="primary" variant="h6">
              ระหว่างวันที่
            </Typography>
          </div>
          <div>
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <KeyboardDatePicker
                disablePast
                disableToolbar
                inputVariant="outlined"
                format="DD MMM yyyy"
                margin="normal"
                label="จากวันที่"
                value={selectedDate.startDate}
                onChange={(date) => {
                  setSelectedDate({
                    ...selectedDate,
                    startDate: date,
                  });
                }}
                style={{ width: '100%' }}
              />
              <KeyboardDatePicker
                disablePast
                disableToolbar
                margin="normal"
                inputVariant="outlined"
                label="ถึงวันที่"
                format="DD MMM yyyy"
                value={selectedDate.endDate}
                onChange={(date) => {
                  setSelectedDate({
                    ...selectedDate,
                    endDate: date,
                  });
                }}
                style={{ width: '100%' }}
              />
            </MuiPickersUtilsProvider>
          </div>
        </div>
        <Button
          color="primary"
          variant="contained"
          onClick={handleSubmit(onSubmit)}
          style={{ width: '80%', height: 50 }}
        >
          ค้นหากิจกรรม
        </Button>
      </div>
    </Dialog>
  );
};

export default FilterDialog;
