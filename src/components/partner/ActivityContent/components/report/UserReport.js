import React, { useEffect, useState, useRef } from 'react';
import { get, post } from 'utils/request';
import MaterialTable from 'material-table';
import { Avatar, IconButton, Typography } from '@material-ui/core';
import CheckDialog from '../report/CheckDialog';
import { useFadedShadowStyles } from '@mui-treasury/styles/shadow/faded';

const UserReport = ({ activityDetail, loadingTrue, loadingFalse }) => {
  const shadowStyles = useFadedShadowStyles();
  const [data, setData] = useState([]);
  const [printDialog, setPrintDialog] = useState(false);
  const [printData, setPrintData] = useState({});
  const [sizeLookup, setSizeLookup] = useState({});
  const [courseLookup, setCourseLookup] = useState({});
  const [rowData, setRowData] = useState({});
  const [checkDialogOpen, setCheckDialogOpen] = useState(false);

  const handleCheckDialogClose = () => {
    setRowData({});
    setCheckDialogOpen(courseLookup);
  };

  const convertCourseLookup = () => {
    let data = {};
    activityDetail.courses.map((item) => {
      data = { ...data, [item._id]: item.title };
    });

    setCourseLookup(data);
  };

  const convertSizeLookup = () => {
    let data = {};
    activityDetail.size.map((item) => {
      data = { ...data, [item.size]: item.size };
    });

    setSizeLookup(data);
  };

  useEffect(() => {
    convertCourseLookup();
    convertSizeLookup();
  }, []);

  const handlePrintDialogClose = () => {
    setPrintData({});
    setPrintDialog(false);
  };
  const printRef = useRef();
  const fetchUserActivities = async () => {
    loadingTrue();
    try {
      const res = await get(
        `/api/partners/useractivities/${activityDetail._id}`
      );

      if (res.status === 200) {
        setData(res.data.user_activities);
      }
      loadingFalse();
    } catch (error) {
      console.log(error);
      loadingFalse();
    }
  };

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
      filtering: false,
      export: false,
    },
    {
      title: 'first_name',
      field: 'user.first_name',
      editable: 'never',
    },
    {
      title: 'last_name',
      field: 'user.last_name',
      editable: 'never',
    },
    {
      title: 'idcard',
      field: 'idcard',
      editable: 'never',
    },
    {
      title: 'course_title',
      field: 'activity.course._id',
      editable: 'never',
      lookup: courseLookup,
    },
    {
      title: 'shirt_size',
      field: 'size.size',
      render: (rowData) => (
        <div>
          <Typography>{rowData.size.size}</Typography>
          <Typography>{rowData.size.description}</Typography>
        </div>
      ),
      editable: 'never',
      lookup: sizeLookup,
    },
    {
      title: 'gender',
      field: 'user.gender',
      editable: 'never',
      editable: 'never',
      lookup: {
        male: 'ชาย',
        female: 'หญิง',
      },
    },
    {
      title: 'state',
      field: 'state',
      render: (rowData) => (
        <div>
          <Typography>
            {rowData.state === 'waiting_payment' ? 'รอการชำระ' : 'ชำระแล้ว'}
          </Typography>
        </div>
      ),
      editable: 'never',
      lookup: {
        waiting_payment: 'รอการชำระ',
        upcoming: 'ชำระแล้ว',
      },
    },
  ];

  return (
    <div className={shadowStyles.root}>
      <CheckDialog
        open={checkDialogOpen}
        handleClose={handleCheckDialogClose}
        rowData={rowData}
        data={data}
        setData={setData}
      />
      <MaterialTable
        columns={columnTitle}
        data={data}
        title=""
        actions={[
          {
            icon: 'check',
            tooltip: 'Check in and Check out',
            onClick: (event, rowData) => {
              setRowData(rowData);
              setCheckDialogOpen(true);
            },
          },
        ]}
        options={{
          pageSize: 50,
          pageSizeOptions: [50],
          paginationType: 'stepped',
          search: true,
          filtering: true,
          exportFileName: activityDetail.title,
          rowStyle: (rowData) => {
            if (rowData.state === 'waiting_payment') {
              return {
                backgroundColor: '#ef9a9a',
                color: '#fff',
              };
            }
            if (!rowData.printed) {
              return {
                backgroundColor: '#fff9c4',
                color: '#c62828',
              };
            }
          },
        }}
        style={{ borderRadius: 10 }}
      />
    </div>
  );
};

export default UserReport;
