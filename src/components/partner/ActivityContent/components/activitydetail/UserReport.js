import React, { useEffect, useState, useRef } from 'react';
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
import ReactToPrint, { PrintContextConsumer } from 'react-to-print';
import PrintIcon from '@material-ui/icons/Print';
import ReportFilter from '../report/ReportFilter';
import CSVReader from 'react-csv-reader';

const UserReport = ({ activityDetail, loadingTrue, loadingFalse }) => {
  const [data, setData] = useState([]);
  const [printDialog, setPrintDialog] = useState(false);
  const [printData, setPrintData] = useState({});
  const [sizeLookup, setSizeLookup] = useState({});

  const convertSizeLookup = () => {
    let data = {};
    activityDetail.size.map((item) => {
      data = { ...data, [item.size]: item.size };
    });

    setSizeLookup(data);
  };

  useEffect(() => {
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
      field: 'activity.course.title',
      render: (rowData) => (
        <div>
          <Typography>{rowData.activity.course.title}</Typography>
        </div>
      ),
      editable: 'never',
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
          <Typography>
            {rowData.address.address === 'At event'
              ? 'รับที่งาน'
              : rowData.address.address}
          </Typography>
          <Typography>{rowData.address.province}</Typography>
          <Typography>{rowData.address.zip}</Typography>
          <Typography>
            {rowData.address.address === 'At event'
              ? rowData.user.phone_number
              : rowData.address.phone_number}
          </Typography>
        </div>
      ),
      editable: 'never',
      filtering: false,
      export: false,
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

  return (
    <div>
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
