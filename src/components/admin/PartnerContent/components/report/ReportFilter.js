import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Typography, TextField, IconButton } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import Select from 'react-select';
import { get } from 'utils/request';

const ReportFilter = ({
  loadingTrue,
  loadingFalse,
  setData,
  activityDetail,
}) => {
  const { handleSubmit, unregister, control, reset, errors } = useForm({
    defaultValues: {},
  });
  const [filterData, setFilterData] = useState({
    courses: [],
    sizes: [],
  });

  const onSubmit = async (data) => {
    // loadingTrue();
    try {
      const res = await get(
        `/api/employees/filtereduseractivities/${activityDetail._id}?${
          data.course.value && 'course=' + data.course.value
        }${data.size.value && '&size=' + data.size.value}${
          data.idcard && '&idcard=' + data.idcard
        }`
      );

      if (res.status === 200) {
        setData(res.data);
      }
      loadingFalse();
    } catch (error) {
      console.log(error);
      loadingFalse();
    }
  };

  const convertData = async () => {
    let coursesData = [];
    let sizesData = [];
    await activityDetail.courses.map((item) => {
      coursesData.push({
        label: item.title,
        value: item._id,
      });
    });

    await activityDetail.size.map((item) => {
      sizesData.push({
        label: item.size,
        value: item.size,
      });
    });
    setFilterData({
      courses: coursesData,
      sizes: sizesData,
    });
  };

  useEffect(() => {
    convertData();
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        padding: 30,
        borderBottom: '1px solid black',
        alignItems: 'center',
        paddingLeft: 100,
      }}
    >
      <Typography variant="h4">Filter</Typography>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ marginLeft: 50 }}>
          <Controller
            menuPlacement="auto"
            name="course"
            control={control}
            label="คอร์ส"
            variant="outlined"
            // disabled={loading}
            defaultValue={{ label: 'ทั้งหมด', value: '' }}
            render={({ onChange, value }) => (
              <Select
                value={value}
                options={[
                  { label: 'ทั้งหมด', value: '' },
                  ...filterData.courses,
                ]}
                onChange={(e) => {
                  onChange(e);
                }}
                styles={{
                  control: (styles) => ({
                    ...styles,
                    backgroundColor: 'white',
                    height: 60,
                    width: 300,
                  }),
                  container: (styles) => ({
                    ...styles,
                    width: '100%',
                    height: 60,
                    zIndex: 500,
                  }),
                }}
              />
            )}
          />
          {errors.course?.message && (
            <Typography style={{ color: '#d9534f' }}>
              {errors.course?.message}
            </Typography>
          )}
        </div>
        <div style={{ marginLeft: 50 }}>
          <Controller
            menuPlacement="auto"
            name="size"
            control={control}
            label="ไซส์เสื้อ"
            variant="outlined"
            // disabled={loading}
            defaultValue={{ label: 'ทั้งหมด', value: '' }}
            render={({ onChange, value }) => (
              <Select
                value={value}
                options={[{ label: 'ทั้งหมด', value: '' }, ...filterData.sizes]}
                onChange={(e) => {
                  onChange(e);
                }}
                styles={{
                  control: (styles) => ({
                    ...styles,
                    backgroundColor: 'white',
                    height: 60,
                    width: 300,
                  }),
                  container: (styles) => ({
                    ...styles,
                    width: '100%',
                    height: 60,
                    zIndex: 500,
                    width: 300,
                  }),
                }}
              />
            )}
          />
        </div>
        <div style={{ marginLeft: 50 }}>
          <Controller
            as={TextField}
            name="idcard"
            control={control}
            defaultValue=""
            label="รหัสบัตรประชาชน"
            variant="outlined"
            style={{ width: 300 }}
          />
        </div>
        <div style={{ marginLeft: 10 }}>
          <IconButton onClick={handleSubmit(onSubmit)}>
            <Search />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default ReportFilter;
