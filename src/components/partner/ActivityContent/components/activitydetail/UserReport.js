import React, { useEffect, useState, useRef, Fragment } from 'react';
import { get, post } from 'utils/request';
import MaterialTable from 'material-table';
import {
  Avatar,
  IconButton,
  Button,
  Typography,
  Dialog,
} from '@material-ui/core';
import AddressPrint from '../report/AddressPrint';
import ReactToPrint from 'react-to-print';
import PrintIcon from '@material-ui/icons/Print';
import ReportFilter from '../report/ReportFilter';
import CSVReader from 'react-csv-reader';
import CheckDialog from '../report/CheckDialog';

const UserReport = ({ activityDetail, loadingTrue, loadingFalse }) => {
  const [data, setData] = useState([]);
  const [printDialog, setPrintDialog] = useState(false);
  const [printData, setPrintData] = useState({});
  const [sizeLookup, setSizeLookup] = useState({});
  const [courseLookup, setCourseLookup] = useState({});
  const [rowData, setRowData] = useState({});
  const [checkDialogOpen, setCheckDialogOpen] = useState(false);
  const [loading, setLoading] = useState(false);

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
      title: 'id',
      field: '_id',
      filtering: false,
      render: (rowData) => <div />,
      editable: 'never',
    },
    {
      title: 'contest_no',
      field: 'contest_no',
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
      lookup: courseLookup,
    },
    {
      title: 'shirt_size',
      field: 'size.size',
      render: (rowData) => (
        <div>
          <Typography>{rowData.size.size}</Typography>
        </div>
      ),
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
      title: 'address',
      field: 'address.address',
      render: (rowData) => (
        <div>
          {rowData.state !== 'waiting_payment' && (
            <IconButton
              onClick={() => {
                setPrintData(rowData);
                setPrintDialog(true);
              }}
              style={{ margin: 'auto' }}
            >
              <PrintIcon />
            </IconButton>
          )}
          {rowData.address && (
            <Fragment>
              <Typography>
                {rowData.address.address === 'At event'
                  ? 'รับที่งาน'
                  : rowData.address?.address}
              </Typography>
              <Typography>{rowData.address.province}</Typography>
              <Typography>{rowData.address.zip}</Typography>
              <Typography>
                {rowData.address.address === 'At event'
                  ? rowData.user.phone_number
                  : rowData.address.phone_number}
              </Typography>
            </Fragment>
          )}
        </div>
      ),
      editable: 'never',
      filtering: false,
      export: false,
    },
    {
      title: 'state',
      field: 'state',
      lookup: {
        waiting_payment: 'รอการชำระ',
        upcoming: 'ชำระแล้ว',
        actual_date: 'รอมาเช็คอิน',
        checked_in: 'เช็คอินแล้ว',
        checked_out: 'เช็คเอ้าท์แล้ว',
        cancel: 'ยกเลิก',
      },
    },
  ];

  const handleForce = async (data, fileInfo) => {
    loadingTrue();
    try {
      let newData = [];
      await data.map(async (item) => {
        const res = await post(
          `/api/partners/updatconstestuseractivities/${item.id}`,
          {
            contest_no: `${item.contest_no}`,
          }
        );
        newData.push(res.data);
      });

      await fetchUserActivities();
    } catch (error) {
      console.log(error);
    }
  };

  const papaparseOptions = {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    transformHeader: (header) => header.toLowerCase().replace(/\W/g, '_'),
  };

  const updatePrintedState = async () => {
    if (!printData.printed) {
      loadingTrue();
      try {
        const res = await get(
          `/api/partners/updateprintstate/${printData._id}`
        );

        if (res.status === 200) {
          const newData = data;
          const index = data.findIndex((item) => item._id === res.data._id);
          newData[index] = res.data;
          setData(newData);
        }
        loadingFalse();
      } catch (error) {
        console.log(error);
        loadingFalse();
      }
    }
  };

  console.log(data);

  return (
    <div>
      <CheckDialog
        open={checkDialogOpen}
        handleClose={handleCheckDialogClose}
        rowData={rowData}
        data={data}
        setData={setData}
      />
      <ReportFilter
        loadingTrue={loadingTrue}
        loadingFalse={loadingFalse}
        activityDetail={activityDetail}
        setData={setData}
        data={data}
      />
      <div
        style={{
          textAlign: 'center',
          padding: 15,
          margin: '10px auto',
          width: '100%',
        }}
      >
        <Typography>อัพเดทข้อมูล จาก CSV</Typography>
        <CSVReader
          inputStyle={{
            padding: 10,
            display: 'block',
            margin: '15px auto',
            border: '1px solid #ccc',
            borderRadius: 5,
            width: 300,
          }}
          onFileLoaded={handleForce}
          parserOptions={papaparseOptions}
        />
      </div>
      <Dialog open={printDialog} onClose={handlePrintDialogClose} width="md">
        <div
          style={{
            margin: 40,
          }}
        >
          <AddressPrint
            ref={printRef}
            data={printData}
            senderAddress={activityDetail.senderAddress}
          />
        </div>
        <ReactToPrint
          trigger={() => (
            <div
              style={{
                margin: '5px auto',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Button
                variant="contained"
                color="secondary"
                onClick={() => updatePrintedState()}
              >
                พิมพ์
              </Button>
            </div>
          )}
          content={() => printRef.current}
        />
      </Dialog>
      <MaterialTable
        loading={loading}
        columns={columnTitle}
        data={data}
        title=""
        actions={
          activityDetail.state === 'actual_date'
            ? [
                {
                  icon: 'check',
                  tooltip: 'Check in and Check out',
                  onClick: (event, rowData) => {
                    setRowData(rowData);
                    setCheckDialogOpen(true);
                  },
                },
              ]
            : []
        }
        // editable={
        //   activityDetail.state !== 'end_activity' && {
        //     onRowUpdate: (newData, oldData) =>
        //       new Promise(async (resolve, reject) => {
        //         if (newData === oldData) {
        //           resolve();
        //           return;
        //         } else {
        //           const createData = newData;
        //           delete createData.announcement;
        //           try {
        //             setLoading(true);
        //             const res = await post(
        //               `/api/partners/edituseractivity/${newData._id}`,
        //               createData
        //             );
        //             if (res.status === 200) {
        //               const updatedData = data;
        //               const index = data.findIndex(
        //                 (item) => item._id === res.data._id
        //               );

        //               updatedData[index] = res.data;

        //               setData(updatedData);
        //             }
        //             setLoading(false);
        //             resolve();
        //           } catch (error) {
        //             setLoading(false);
        //             console.log(error);
        //             resolve();
        //           }
        //         }
        //       }),
        //   }
        // }
        options={{
          pageSize: 50,
          pageSizeOptions: [50],
          paginationType: 'stepped',
          search: true,
          filtering: true,
          exportButton: true,
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
        style={{
          boxShadow: 'none',
        }}
      />
    </div>
  );
};

export default UserReport;
