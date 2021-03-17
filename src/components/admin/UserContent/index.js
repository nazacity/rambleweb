import React, { useEffect, useState } from 'react';
import { get } from 'utils/request';
import { setLoading } from '../../../../redux/actions/layoutActions';
import { useDispatch } from 'react-redux';
import MaterialTable from 'material-table';
import { Avatar, IconButton, Button, Typography } from '@material-ui/core';
import Filter from './components/Filter';
import UserDialog from './components/UserDialog';

const index = () => {
  const [partners, setPartners] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const dispatch = useDispatch();
  const [user, setUser] = useState({});
  const [userDialog, setUserDialog] = useState(false);

  const handleUserDialogClose = () => {
    setUser({});
    setUserDialog(false);
  };

  const loadingTrue = () => {
    dispatch(setLoading(true));
  };

  const loadingFalse = () => {
    dispatch(setLoading(false));
  };

  const getPartners = async (page, filter) => {
    loadingTrue();
    try {
      let res;
      if (filter) {
        res = await get(
          `/api/employees/getusers?${
            filter.display_name && 'display_name=' + filter.display_name
          }${filter.first_name && '&first_name=' + filter.first_name}${
            filter.last_name && '&last_name=' + filter.last_name
          }${
            filter.gender &&
            filter.gender.value &&
            '&gender=' + filter.gender.value
          }${filter.min_age && '&min_age=' + filter.min_age}${
            filter.max_age && '&max_age=' + filter.max_age
          }${
            filter.identity &&
            filter.identity.value !== undefined &&
            '&identity_state=' + filter.identity.value
          }${
            filter.vaccine &&
            filter.vaccine.value &&
            '&vaccine_state=' + filter.vaccine.value
          }`
        );
      } else {
        res = await get(
          `/api/employees/getusers?skip=${
            page === 0 ? 30 * page : 30 * page + page
          }&limit=31`
        );
      }

      if (page === 0) {
        setPartners([...res]);
      } else {
        setPartners([...partners, ...res]);
      }
    } catch (error) {
      console.log(error);
    }
    setTimeout(() => {
      loadingFalse();
    }, 800);
  };

  useEffect(() => {
    getPartners(0);
  }, []);

  const onChangePage = (page) => {
    if (page > currentPage) {
      getPartners(page);
      setCurrentPage(page);
    }
  };

  const columnTitle = [
    {
      title: 'รูปภาพ',
      field: 'picture_url',
      render: (rowData) => (
        <IconButton>
          <Avatar src={rowData.user_picture_url} />
        </IconButton>
      ),
      editable: 'never',
    },
    {
      title: 'ชื่อ',
      field: 'first_name',
      editable: 'never',
    },
    {
      title: 'นามสกุล',
      field: 'last_name',
      editable: 'never',
    },
    {
      title: 'เพศ',
      field: 'gender',
      editable: 'never',
      lookup: {
        male: 'ชาย',
        female: 'หญิง',
      },
    },
    {
      title: 'เบอร์โทร์',
      field: 'phone_number',
      editable: 'never',
    },
    {
      title: 'จำนวนกิจกรรม',
      field: 'activity',
      render: (rowData) => (
        <div style={{ marginLeft: 40 }}>{rowData.user_activities.length}</div>
      ),
      editable: 'never',
    },
    {
      title: 'การยืนยันตัวตน',
      field: 'vefiry_information.state',
      lookup: {
        not_verify: 'ยังไม่ได้ยืนยัน',
        verifying: 'กำลังตรวจสอบ',
        verified: 'ยืนยันแล้ว',
        rejected: 'รอยืนยันอีกครั้ง',
      },
      editable: 'never',
    },
    {
      title: 'การยืนยันการฉีดวัคซีนโควิด',
      field: 'vefiry_vaccine.state',
      lookup: {
        not_verify: 'ยังไม่ได้ยืนยัน',
        verifying: 'กำลังตรวจสอบ',
        verified: 'ยืนยันแล้ว',
        rejected: 'รอยืนยันอีกครั้ง',
      },
      editable: 'never',
    },
    {
      title: 'สถานะ',
      field: 'state',
      lookup: {
        active: (
          <Button
            variant="contained"
            style={{
              boxShadow: 'none',
              backgroundColor: 'green',
              color: 'white',
              width: 100,
            }}
          >
            เปิดใช้งาน
          </Button>
        ),
        deactive: (
          <Button
            variant="contained"
            style={{
              boxShadow: 'none',
              backgroundColor: 'grey',
              color: 'white',
              width: 100,
            }}
          >
            ปิดใช้งาน
          </Button>
        ),
        banned: (
          <Button
            variant="contained"
            style={{
              boxShadow: 'none',
              backgroundColor: 'red',
              color: 'white',
              width: 100,
            }}
          >
            ห้ามใช้งาน
          </Button>
        ),
      },
    },
  ];

  return (
    <div>
      <Filter setPartners={setPartners} getPartners={getPartners} />
      <MaterialTable
        columns={columnTitle}
        data={partners}
        title=""
        options={{
          pageSize: 30,
          pageSizeOptions: [30],
          paginationType: 'stepped',
          search: true,
          filtering: true,
          rowStyle: (rowData) => {
            if (
              rowData.vefiry_information.state === 'verifying' ||
              rowData.vefiry_vaccine.state === 'verifying'
            ) {
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
        onChangePage={onChangePage}
        onRowClick={(event, rowData, togglePanel) => {
          setUser(rowData);
          setUserDialog(true);
        }}
      />
      {userDialog && (
        <UserDialog
          open={userDialog}
          handleClose={handleUserDialogClose}
          user={user}
          setUser={setUser}
          partners={partners}
          setPartners={setPartners}
        />
      )}
    </div>
  );
};

export default index;
