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
import { DatePicker, KeyboardDatePicker } from '@material-ui/pickers';
import Select from 'react-select';
import { gender, blood_type } from 'constants/user';
import { setLineUser } from '../../../../redux/actions/lineAction';

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { control, handleSubmit, errors } = useForm();
  const theme = useTheme();
  const dispatch = useDispatch();
  const [checkIdLoading, setCheckIdLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [message, setMessage] = useState({
    msg: '',
    state: 'success',
  });
  const user = useSelector((state) => state.line.user);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onSubmit = async (data) => {
    // dispatch(setLoading(true));

    try {
      const userinfo = {
        username: data.username,
        password: data.password,
        display_name: data.display_name,
        idcard: 'not provide',
        first_name: data.first_name,
        last_name: data.last_name,
        phone_number: data.phone_number,
        birthday: selectedDate,
        gender: data.gender,
        blood_type: data.blood_type,
        user_picture_url: user.user_picture_url,
        lineId: user.lineId,
      };

      const res = await axios.post(`${api}/api/everyone/createuser`, userinfo);

      dispatch(
        setLineUser({
          type: 'ramble',
          ...res.data.data,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography
        variant="body1"
        style={{ color: 'red', marginBottom: 10, textAlign: 'center' }}
      >
        เฉพาะครั้งแรก
      </Typography>
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
              {errors.password?.message
                ? errors.password.message
                : 'มากกว่า 8 ตัวอักษร'}
            </FormHelperText>
          </FormControl>
        )}
      />
      <Controller
        name="confirm_password"
        control={control}
        defaultValue=""
        rules={{
          required: 'กรุณาใส่ Confirm Password',
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
              Confirm Password
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
              labelWidth={140}
              error={errors.confirm_password && true}
            />
            <FormHelperText error={errors.confirm_password && true}>
              {errors.confirm_password?.message
                ? errors.confirm_password.message
                : 'ต้องตรงกับ password'}
            </FormHelperText>
          </FormControl>
        )}
      />
      <Controller
        as={TextField}
        name="display_name"
        control={control}
        defaultValue=""
        label="Display Name"
        variant="outlined"
        rules={{
          required: 'กรุณาใส่ Display Name',
        }}
        error={errors.display_name && true}
        helperText={errors.display_name?.message}
        // disabled={loading}
        style={{ width: '100%', marginBottom: 20 }}
      />
      <Typography>ข้อมูลส่วนตัว</Typography>
      <div style={{ marginBottom: 20 }}>
        {message.msg !== '' && (
          <Typography
            style={{
              color: message.state === 'success' ? '#5cb85c' : '#d9534f',

              marginLeft: 5,
            }}
          >
            {message.msg}
          </Typography>
        )}
      </div>
      <Controller
        as={TextField}
        name="first_name"
        control={control}
        defaultValue=""
        label="ชื่อ"
        variant="outlined"
        rules={{
          required: 'กรุณาใส่ First Name',
        }}
        error={errors.first_name && true}
        helperText={errors.first_name?.message}
        // disabled={loading}
        style={{ width: '100%', marginBottom: 20 }}
      />
      <Controller
        as={TextField}
        name="last_name"
        control={control}
        defaultValue=""
        label="นามสกุล"
        variant="outlined"
        rules={{
          required: 'กรุณาใส่ Last Name',
        }}
        error={errors.last_name && true}
        helperText={errors.last_name?.message}
        // disabled={loading}
        style={{ width: '100%', marginBottom: 20 }}
      />
      <Controller
        as={TextField}
        name="phone_number"
        control={control}
        defaultValue=""
        label="เบอร์โทรศัพท์"
        variant="outlined"
        rules={{
          required: 'กรุณาใส่ Phone Number',
        }}
        error={errors.phone_number && true}
        helperText={errors.phone_number?.message}
        // disabled={loading}
        style={{ width: '100%', marginBottom: 20 }}
      />
      <KeyboardDatePicker
        autoOk
        variant="inline"
        inputVariant="outlined"
        openTo="year"
        views={['year', 'month', 'date']}
        label="วันเกิด"
        format="DD MMMM YYYY"
        value={selectedDate}
        InputAdornmentProps={{ position: 'end' }}
        style={{ width: '100%', marginBottom: 20 }}
        onChange={(date) => {
          setSelectedDate(date);
        }}
      />
      <Controller
        menuPlacement="auto"
        name="gender"
        control={control}
        defaultValue=""
        // disabled={loading}
        render={({ onChange, value }) => (
          <Select
            placeholder="เพศ"
            value={gender.filter((option) => option.value === value)}
            options={gender}
            onChange={(e) => {
              onChange(e.value);
            }}
            styles={{
              control: (styles) => ({
                ...styles,
                backgroundColor: 'white',
                height: 60,
              }),
              container: (styles) => ({
                ...styles,
                width: '100%',
                height: 60,
                zIndex: 501,
                marginBottom: 20,
              }),
            }}
          />
        )}
      />
      <Controller
        menuPlacement="auto"
        name="blood_type"
        control={control}
        defaultValue=""
        // disabled={loading}
        render={({ onChange, value }) => (
          <Select
            placeholder="กรุ๊ปเลือด"
            value={blood_type.filter((option) => option.value === value)}
            options={blood_type}
            onChange={(e) => {
              onChange(e.value);
            }}
            styles={{
              control: (styles) => ({
                ...styles,
                backgroundColor: 'white',
                height: 60,
              }),
              container: (styles) => ({
                ...styles,
                width: '100%',
                height: 60,
                zIndex: 500,
                marginBottom: 20,
              }),
            }}
          />
        )}
      />
      <Button
        variant="contained"
        color="primary"
        style={{ width: '100%' }}
        type="submit"
      >
        บันทึกข้อมูล
      </Button>
      <Typography
        variant="body1"
        style={{ color: 'red', margin: '10px 0', textAlign: 'center' }}
      >
        ท่านสามารถเข้า Ramble Applicaiton ได้โดยใช้ Username และ Password
        จากการลงข้อมูลในครั้งนี้
      </Typography>
    </form>
  );
};

export default SignUpForm;
