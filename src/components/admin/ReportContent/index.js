import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { get } from 'utils/request';
import { setLoading } from '../../../../redux/actions/layoutActions';
import RegisteredUserReport from './components/RegisteredUserReport';
import AgeRangeReport from './components/AgeRangeReport';
import GenderReport from './components/GenderReport';
import { Grid } from '@material-ui/core';
import ActivityByRegion from './components/ActivityByRegion';
import ActivityReport from './components/ActivityReport';

const index = () => {
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const getReportData = async () => {
    dispatch(setLoading(true));
    try {
      const res = await get('/api/employees/getreportdata');
      console.log(res);
      if (res.status === 200) {
        setData(res.data);
        convertData(res.data);
      }
      dispatch(setLoading(false));
    } catch (error) {
      console.log(error);
      dispatch(setLoading(false));
    }
  };

  const [data1, setData1] = useState([]);

  const convertData = (data) => {
    setData1([
      {
        age: '20down',
        'อายุ <20': data.Users20 === 0 ? 0.5 : data.Users20,
        // 'อายุ <20': 120,
      },
      {
        age: '20-30',
        'อายุ 20-30': data.Users20_30 === 0 ? 0.5 : data.Users20_30,
        // 'อายุ 20-30': 134,
      },
      {
        age: '30-40',
        'อายุ 30-40': data.Users30_40 === 0 ? 0.5 : data.Users30_40,
        // 'อายุ 30-40': 176,
      },
      {
        age: '40-50',
        'อายุ 40-50': data.Users40_50 === 0 ? 0.5 : data.Users40_50,
        // 'อายุ 40-50': 120,
      },
      {
        age: '50up',
        'อายุ >50': data.Users50 === 0 ? 0.5 : data.Users50,
        // 'อายุ >50': 160,
      },
    ]);
  };

  useEffect(() => {
    getReportData();
  }, []);
  return (
    <Grid container spacing={2} style={{ padding: 20 }}>
      <Grid item xs={12} md={6}>
        <RegisteredUserReport data={data} />
      </Grid>
      <Grid item xs={12} md={6}>
        <GenderReport detail={data} />
      </Grid>
      <Grid item xs={12}>
        <AgeRangeReport data={data1} />
      </Grid>
      <Grid item xs={12} md={6}>
        <ActivityReport data={data} />
      </Grid>
      <Grid item xs={12} md={6}>
        <ActivityByRegion detail={data} />
      </Grid>
    </Grid>
  );
};

export default index;
