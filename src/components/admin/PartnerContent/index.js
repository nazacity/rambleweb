import React, { useEffect, useState } from 'react';
import { get, post } from 'utils/request';
import { setLoading } from '../../../../redux/actions/layoutActions';
import { useDispatch } from 'react-redux';
import MaterialTable from 'material-table';
import { Avatar, IconButton, Button, Typography } from '@material-ui/core';
import Filter from './components/Filter';
import Profile from './components/Profile';
import usePopstate from 'react-usepopstate';
import { useToasts } from 'react-toast-notifications';

const index = () => {
  const [profileDialogOpen, setProfileDialogOpen] = useState(false);
  const [profile, setProfile] = useState({});
  const [partners, setPartners] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const dispatch = useDispatch();
  const { addToast } = useToasts();
  const [tableLoading, setTableLoading] = useState(false);

  const { isBackButtonClicked } = usePopstate({
    isPrompt: false,
    callback: () => {
      handleProfileDialogClose();
    },
  });

  const handleProfileDialogClose = () => {
    setProfile({});
    setProfileDialogOpen(false);
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
          `/api/employees/getpartners?display_name=${filter.display_name}`
        );
      } else {
        res = await get(
          `/api/employees/getpartners?skip=${
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
        <IconButton
          onClick={() => {
            setProfile(rowData);
            setProfileDialogOpen(true);
          }}
        >
          <Avatar src={rowData.picture_url} />
        </IconButton>
      ),
      editable: 'never',
    },
    {
      title: 'ชื่อ',
      field: 'display_name',
      editable: 'never',
    },
    {
      title: 'จำนวนกิจกรรม',
      field: 'activity',
      render: (rowData) => (
        <div style={{ marginLeft: 40 }}>{rowData.activities.length}</div>
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
        isLoading={tableLoading}
        editable={{
          onRowUpdate: (newData, oldData) =>
            new Promise(async (resolve) => {
              if (!oldData || newData === oldData) {
                resolve();
                return;
              }
              try {
                setTableLoading(true);
                const res = await post(
                  `/api/employees/editpartner/${newData._id}`,
                  { state: newData.state }
                );
                if (res.status === 200) {
                  addToast(newData.display_name + 'อัพเดทเรียบร้อย', {
                    appearance: 'success',
                    autoDismiss: true,
                  });
                  const index = partners.findIndex(
                    (item) => item._id === res.data._id
                  );
                  const newPartners = partners;
                  newPartners[index] = res.data;

                  setPartners(newPartners);
                  setTableLoading(false);
                }
                resolve();
              } catch (error) {
                console.log(error.message);
                addToast(newData.display_name + 'ไม่สามารถอัพเดทได้', {
                  appearance: 'error',
                  autoDismiss: true,
                });
                setTableLoading(false);
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
      <Profile
        open={profileDialogOpen}
        handleClose={handleProfileDialogClose}
        profile={profile}
        loadingTrue={loadingTrue}
        loadingFalse={loadingFalse}
      />
    </div>
  );
};

export default index;
