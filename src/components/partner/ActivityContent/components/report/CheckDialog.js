import React from 'react';
import { Dialog, Typography, Button } from '@material-ui/core';
import { get, post } from '../../../../../utils/request';
import { useDispatch } from 'react-redux';
import { setLoading } from '../../../../../../redux/actions/layoutActions';
import { useToasts } from 'react-toast-notifications';

const CheckDialog = ({ open, handleClose, rowData, data, setData }) => {
  const dispatch = useDispatch();
  const { addToast } = useToasts();

  const checkinActivity = async () => {
    try {
      dispatch(setLoading(true));
      const res = await get(`/api/partners/checkinactivity/${rowData._id}`);

      if (res.status === 200) {
        let newData = data;
        const index = data.findIndex((item) => item._id === res.data._id);
        console.log('index', index);
        newData[index] = res.data;
        setData(newData);
      }
      addToast('Checked in successfully', {
        appearance: 'success',
        autoDismiss: true,
      });
      dispatch(setLoading(false));
      handleClose();
    } catch (error) {
      console.log(error);
      addToast('Something when wrong', {
        appearance: 'success',
        autoDismiss: true,
      });
      dispatch(setLoading(false));
      handleClose();
    }
  };

  const checkoutActivity = async () => {
    try {
      dispatch(setLoading(true));
      const res = await post(`/api/partners/checkoutactivity/${rowData._id}`);

      if (res.status === 200) {
        let newData = data;
        const index = data.findIndex((item) => item._id === res.data._id);
        console.log('index', index);
        newData[index] = res.data;
        setData(newData);
      }
      addToast('Checked out successfully', {
        appearance: 'success',
        autoDismiss: true,
      });
      dispatch(setLoading(false));
      handleClose();
    } catch (error) {
      console.log(error);
      addToast('Something when wrong', {
        appearance: 'success',
        autoDismiss: true,
      });
      dispatch(setLoading(false));
      handleClose();
    }
  };

  const userActivityStateCheck = () => {
    switch (rowData.state) {
      case 'waiting_payment':
        return (
          <Typography
            variant="h5"
            color="primary"
            style={{ textAlign: 'center' }}
          >
            รอการชำระ
          </Typography>
        );
      case 'upcoming':
        return (
          <Typography
            variant="h5"
            color="primary"
            style={{ textAlign: 'center' }}
          >
            ยังไม่ถึงวันกิจกรรม
          </Typography>
        );
      case 'actual_date':
        return (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography
              variant="h5"
              style={{ marginBottom: 20 }}
              color="primary"
            >
              ตรวจสอบข้อมูล
            </Typography>
            <div>
              <Typography variant="body1">
                ผู้สมัครหมายเลข {rowData.contest_no}
              </Typography>
              <Typography variant="body1">
                ขื่อ {rowData.user.first_name} {rowData.user.last_name}
              </Typography>
              <Typography variant="body1" style={{ marginBottom: 20 }}>
                หมายเลขบัตรประชาชน {rowData.idcard}
              </Typography>
            </div>
            <div style={{ display: 'flex' }}>
              <Button
                variant="contained"
                color="primary"
                style={{ width: 100, marginRight: 20 }}
                onClick={checkinActivity}
              >
                เช็คอิน
              </Button>
              <Button
                variant="outlined"
                color="primary"
                style={{ width: 100 }}
                onClick={handleClose}
              >
                ยกเลิก
              </Button>
            </div>
          </div>
        );
      case 'checked_in':
        return (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography
              variant="h5"
              style={{ marginBottom: 20 }}
              color="primary"
            >
              ตรวจสอบข้อมูล
            </Typography>
            <div>
              <Typography variant="body1">
                ผู้สมัครหมายเลข {rowData.contest_no}
              </Typography>
              <Typography variant="body1">
                ขื่อ {rowData.user.first_name} {rowData.user.last_name}
              </Typography>
              <Typography variant="body1" style={{ marginBottom: 20 }}>
                หมายเลขบัตรประชาชน {rowData.idcard}
              </Typography>
            </div>
            <div style={{ display: 'flex' }}>
              <Button
                variant="contained"
                color="primary"
                style={{ width: 100, marginRight: 20 }}
                onClick={checkoutActivity}
              >
                เช็คเอ้าท์
              </Button>
              <Button
                variant="outlined"
                color="primary"
                style={{ width: 100 }}
                onClick={handleClose}
              >
                ยกเลิก
              </Button>
            </div>
          </div>
        );
      default:
        return (
          <Typography
            variant="h5"
            color="primary"
            style={{ textAlign: 'center' }}
          >
            สถานะสิ้นสุดแล้ว
          </Typography>
        );
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} width="md" fullWidth>
      <div
        style={{
          margin: 40,
        }}
      >
        {userActivityStateCheck()}
      </div>
    </Dialog>
  );
};

export default CheckDialog;
