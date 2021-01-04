import React, { useEffect, useState } from 'react';
import { get, post } from 'utils/request';
import { useDispatch } from 'react-redux';
import { setLoading } from '../../../../../redux/actions/layoutActions';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Grid } from '@material-ui/core';
import Link from 'next/link';

const MainAdvertize = () => {
  const [mainAdvertizes, setMainAdvertizes] = useState([]);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    unregister,
    control,
    errors,
    reset,
  } = useForm({});

  const fetchMainAdvertizes = async () => {
    dispatch(setLoading(true));
    try {
      const res = await get('/api/everyone/mainadvertize');
      console.log(res);
      if (res.status === 200) {
        setMainAdvertizes(res.data);
      }
      dispatch(setLoading(false));
    } catch (error) {
      console.log(error);
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    fetchMainAdvertizes();
  }, []);

  const onSubmit = async (data) => {
    try {
      dispatch(setLoading(true));
      const res = await post('/api/employees/mainadvertize', data);
      console.log(res);
      if (res.status === 200) {
        setMainAdvertizes([...mainAdvertizes, res.data]);
        reset();
      }
      dispatch(setLoading(false));
    } catch (error) {
      console.log(error);
      dispatch(setLoading(false));
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={6} style={{ padding: 50 }}>
        <Grid container spacing={2}>
          {mainAdvertizes.map((item) => {
            return (
              <Grid item xs={6} key={item._id}>
                <Link href={item.uri}>
                  <img
                    src={item.advertize_picture_url}
                    style={{ height: 200, width: 300, borderRadius: 10 }}
                  />
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
      <Grid item xs={4}>
        <Controller
          as={TextField}
          name="advertize_picture_url"
          control={control}
          defaultValue=""
          label="advertize picture url"
          variant="outlined"
          rules={{
            required: 'กรุณาใส่ picture url',
          }}
          error={errors.advertize_picture_url && true}
          helperText={errors.advertize_picture_url?.message}
          // disabled={loading}
          style={{ width: '100%', margin: 10 }}
        />
        <Controller
          as={TextField}
          name="uri"
          control={control}
          defaultValue=""
          label="Link web size"
          variant="outlined"
          rules={{
            required: 'กรุณาใส่ Link Web Size',
          }}
          error={errors.uri && true}
          helperText={errors.uri?.message}
          // disabled={loading}
          style={{ width: '100%', margin: 10 }}
        />
        <Button onClick={handleSubmit(onSubmit)} variant="contained">
          Create
        </Button>
      </Grid>
    </Grid>
  );
};

export default MainAdvertize;
