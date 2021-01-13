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
      const res = await axios.post(`${api}/partners/login`, {
        username: data.username,
        password: data.password,
      });

      if (res.status === 200) {
        Cookies.set('accessToken', res.data.token);
        dispatch(userStateHandle(res.data.partner));
        addToast('SignIn Successed!', {
          appearance: 'success',
          autoDismiss: true,
        });
        Router.push('/partner');
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
    <Fragment>
      <Hidden smDown>
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
          <div
            style={{
              backgroundImage:
                'linear-gradient(   139deg,rgb(100, 43, 115) 0%,rgb(198, 66, 110) 100%)',
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              justifyContent: 'center',
              paddingTop: 100,
              paddingBottom: 100,
            }}
          >
            <img
              src={require('../../public/assets/logo/ramblewhite.png')}
              style={{ width: '50vw', margin: 50 }}
            />
          </div>
        </div>
      </Hidden>
      <Hidden mdUp>
        <div
          style={{
            padding: 20,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img
            src={require('../../public/assets/logo/ramble.png')}
            style={{ width: '70vw', margin: 50 }}
          />
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
      </Hidden>
    </Fragment>
  );
};

export const getServerSideProps = async (ctx) => {
  const { req, res } = ctx;

  try {
    const user = await get('/api/partners/getpartnerbyjwt', ctx);
    res.writeHead(302, { Location: '/partner' });
    res.end();
    return { props: { user: user } };
  } catch (error) {
    return { props: {} };
  }
};

export default signin;
