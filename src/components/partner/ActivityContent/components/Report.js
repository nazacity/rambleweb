import React, { useEffect, useState } from 'react';
import { get } from 'utils/request';
import MaterialTable from 'material-table';
import { Avatar, IconButton, Button, Typography } from '@material-ui/core';

const Report = ({ activityDetailId, loadingTrue, loadingFalse }) => {
  const [data, setData] = useState([]);
  const fetchUserActivities = async (data, reset) => {
    loadingTrue();
    try {
      const res = await get(`/api/partners/useractivities/${activityDetailId}`);

      console.log(res);
      if (res.status === 200) {
        setData(res.data.user_activities);
      }
      loadingFalse();
    } catch (error) {
      console.log(error);
      loadingFalse();
    }
  };

  console.log(data);

  useEffect(() => {
    fetchUserActivities();
  }, []);

  const columnTitle = [
    {
      title: 'รูปภาพ',
      field: 'user.user_picture_url',
      render: (rowData) => (
        <IconButton>
          <Avatar src={rowData.user.user_picture_url} />
        </IconButton>
      ),
      editable: 'never',
    },
    {
      title: 'หมายเลข',
      field: 'content_no',
    },
    {
      title: 'ชื่อ',
      field: 'user.first_name',
      editable: 'never',
    },
    {
      title: 'ชื่อ',
      field: 'user.last_name',
      editable: 'never',
    },
    {
      title: 'คอร์สวิ่ง',
      field: 'size',
      render: (rowData) => (
        <div>
          <Typography>{rowData.activity.course.title}</Typography>
        </div>
      ),
      editable: 'never',
    },
    {
      title: 'เสื้อ',
      field: 'size',
      render: (rowData) => (
        <div>
          <Typography>{rowData.size.size}</Typography>
          <Typography>{rowData.size.description}</Typography>
        </div>
      ),
      editable: 'never',
    },
    {
      title: 'ที่อยู่จัดส่ง',
      field: 'address',
      render: (rowData) => (
        <div>
          <Typography>{rowData.address.address}</Typography>
          <Typography>{rowData.address.province}</Typography>
          <Typography>{rowData.address.zip}</Typography>
          <Typography>{rowData.user.phone_number}</Typography>
        </div>
      ),
      editable: 'never',
    },
  ];

  return (
    <div>
      <MaterialTable
        columns={columnTitle}
        data={data}
        title=""
        editable={{
          onRowUpdate: (newData, oldData) =>
            new Promise(async (resolve) => {
              if (!oldData || newData === oldData) {
                resolve();
                return;
              }
              try {
                resolve();
              } catch (error) {
                console.log(error.message);
                resolve();
              }
            }),
        }}
        options={{
          pageSize: 15,
          pageSizeOptions: [15],
          paginationType: 'stepped',
          search: false,
        }}
        style={{
          boxShadow: 'none',
        }}
      />
    </div>
  );
};

export default Report;
