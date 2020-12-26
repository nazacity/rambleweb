import React, { useState, useEffect } from 'react';
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
} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import axios from 'axios';
import { api } from '../../src/api/api';
import Cookies from 'js-cookie';
import Router, { useRouter } from 'next/router';
import { useToasts } from 'react-toast-notifications';
import { useForm, Controller } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { userStateHandle } from '../../redux/actions/userActions';
import { setLoading } from '../../redux/actions/layoutActions';
import { get } from '../../src/utils/request';

const signin = () => {
  const { addToast } = useToasts();
  const route = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const { control, handleSubmit, errors } = useForm();

  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(setLoading(false));
    }, [800]);
  }, []);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onSubmit = async (data) => {
    dispatch(setLoading(true));
    try {
      console.log(data);
      const res = await axios.post(`${api}/employees/login`, {
        username: data.username,
        password: data.password,
      });

      if (res.status === 200) {
        Cookies.set('accessToken', res.data.token);
        dispatch(userStateHandle(res.data.employee));
        addToast('SignIn Successed!', {
          appearance: 'success',
          autoDismiss: true,
        });
        Router.push('/admin');
      }
    } catch (error) {
      addToast('Username or Password is incorrect', {
        appearance: 'error',
        autoDismiss: true,
      });
      dispatch(setLoading(false));
    }
  };

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 3fr',
        height: '100vh',
      }}
    >
      <div
        style={{
          padding: 20,
          borderRight: '1px solid black',
          boxShadow: '5px 0px 10px 0px rgba(0,0,0,0.27)',
        }}
      >
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
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const { req, res } = ctx;

  try {
    const user = await get('/api/employees/getemployeebyjwt', ctx);
    res.writeHead(302, { Location: '/admin' });
    res.end();
    return { props: { user: user } };
  } catch (error) {
    return { props: {} };
  }
};

export default signin;
