import React, { useState, useEffect, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Button,
  FormHelperText,
  Hidden,
  Typography,
  useTheme,
} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import axios from 'axios';
import { api } from 'api/api';
import Cookies from 'js-cookie';
import Router, { useRouter } from 'next/router';
import { useToasts } from 'react-toast-notifications';
import { useForm, Controller } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { get } from 'utils/request';
import { setLoading } from '../../../../redux/actions/layoutActions';

const SignUpForm = ({ setView }) => {
  const [showPassword, setShowPassword] = useState(false);
  const { control, handleSubmit, errors } = useForm();
  const theme = useTheme();
  const dispatch = useDispatch();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onSubmit = async (data) => {
    // dispatch(setLoading(true));
    try {
    } catch (error) {}
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        as={TextField}
        name="username"
        control={control}
        defaultValue=""
        label="Username"
        variant="outlined"
        rules={{
          required: 'กรุณาใส่ Username',
        }}
        error={errors.username && true}
        helperText={errors.username?.message}
        // disabled={loading}
        style={{ width: '100%', marginBottom: 20 }}
      />
      <Controller
        name="password"
        control={control}
        defaultValue=""
        rules={{
          required: 'กรุณาใส่ Password',
        }}
        render={({ onChange, value }) => (
          <FormControl
            style={{ width: '100%', marginBottom: 20 }}
            variant="outlined"
          >
            <InputLabel
              htmlFor="outlined-adornment-password"
              error={errors.password && true}
            >
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              value={value}
              onChange={onChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={70}
              error={errors.password && true}
            />
            <FormHelperText error={errors.password && true}>
              {errors.password?.message}
            </FormHelperText>
          </FormControl>
        )}
      />
      <Button
        variant="contained"
        color="primary"
        style={{ width: '100%' }}
        type="submit"
      >
        สมัคร Ramble Id
      </Button>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography>มีบัญชีแล้ว ใช่หรือไม่</Typography>
        <Button
          style={{ color: theme.palette.primary.main, fontSize: 18 }}
          onClick={() => {
            setView(0);
          }}
        >
          ล็อคอิน
        </Button>
      </div>
    </form>
  );
};

export default SignUpForm;
