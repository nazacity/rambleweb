import React, { useState } from 'react';
import { Dialog, Typography, Button, TextField } from '@material-ui/core';
import { get, post } from '../../../../../utils/request';
import { useDispatch } from 'react-redux';
import { setLoading } from '../../../../../../redux/actions/layoutActions';
import { useToasts } from 'react-toast-notifications';

const StatusDialog = ({ open, handleClose, rowData, data, setData }) => {
  const dispatch = useDispatch();
  const { addToast } = useToasts();

  const [amount, setAmount] = useState('');
  const handleChange = (event) => {
    setError('');
    setAmount(event.target.value);
  };
  const [error, setError] = useState('');

  const approvePayment = async () => {
    if (!amount) {
      setError('กรุณาใส่ยอดเงิน');
    } else {
      try {
        dispatch(setLoading(true));
        const res = await post(`/api/employees/confirmpayment`, {
          userActivityId: rowData._id,
          amount: amount,
        });

        if (res.status === 200) {
          let newData = data;
          const index = data.findIndex((item) => item._id === res.data._id);
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
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} width="md" fullWidth>
      <div
        style={{
          margin: 40,
        }}
      >
        <div style={{ marginBottom: 40 }}>
          <Typography variant="h5" style={{ textAlign: 'center' }}>
            กรุณาตรวจสอบการชำระ
          </Typography>
        </div>
        <div style={{ marginBottom: 40 }}>
          <TextField
            label="ยอดเงิน"
            onChange={handleChange}
            variant="outlined"
            style={{ width: '100%' }}
            value={amount}
            error={error ? true : false}
            helperText={error}
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            variant="contained"
            color="primary"
            style={{ marginRight: 20 }}
            onClick={approvePayment}
          >
            อนุมัติการชำระ
          </Button>
          <Button variant="outlined" color="primary" onClick={handleClose}>
            ยกเลิก
          </Button>
        </div>
      </div>
    </Dialog>
  );
};

export default StatusDialog;
