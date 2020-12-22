import React, { useEffect, useState } from 'react';
import { get } from '../../../src/utils/request';
import { setLoading } from '../../../redux/actions/layoutActions';
import { useDispatch } from 'react-redux';
import MaterialTable from 'material-table';
import { Avatar, IconButton, Button, Typography } from '@material-ui/core';
import Filter from './components/Filter';

const index = () => {
  const [partners, setPartners] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const dispatch = useDispatch();

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
          }${filter.gender && '&gender=' + filter.gender}${
            filter.min_age && '&min_age=' + filter.min_age
          }${filter.max_age && '&max_age=' + filter.max_age}`
        );
      } else {
        res = await get(
          `/api/employees/getusers?skip=${
            page === 0 ? 15 * page : 15 * page + page
          }&limit=16`
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
        onChangePage={onChangePage}
      />
    </div>
  );
};

export default index;
