import { Button, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import ModalImage from 'react-modal-image';
import { post } from 'utils/request';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const UserVaccine = ({ user, setUser, partners, setPartners }) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleApprove = async () => {
    try {
      setLoading(true);
      const res = await post(`/api/employees/updatevaccinestate/${user._id}`, {
        vaccine_confirm_piture_url:
          user.vefiry_vaccine.vaccine_confirm_piture_url,
        state: 'verified',
      });

      if (res.status === 200) {
        const newPartners = partners;
        const index = partners.findIndex((item) => item._id === res.data._id);
        newPartners[index] = res.data;
        setUser(res.data);
        setPartners(newPartners);
      }
      setLoading(false);
      handleClose();
    } catch (error) {
      console.log(error);
      setLoading(false);
      handleClose();
    }
  };

  const handleReject = async () => {
    try {
      setLoading(true);
      const res = await post(`/api/employees/updatevaccinestate/${user._id}`, {
        vaccine_confirm_piture_url:
          user.vefiry_vaccine.vaccine_confirm_piture_url,
        state: 'rejected',
      });

      if (res.status === 200) {
        const newPartners = partners;
        const index = partners.findIndex((item) => item._id === res.data._id);
        newPartners[index] = res.data;
        setUser(res.data);
        setPartners(newPartners);
      }
      setLoading(false);
      handleClose();
    } catch (error) {
      console.log(error);
      setLoading(false);
      handleClose();
    }
  };
  return (
    <div>
      <Typography>ยืนยันการฉีดวัคซีน</Typography>
      <div
        style={{
          width: 300,
          height: 200,
          overflow: 'hidden',
          marginBottom: 20,
        }}
      >
        {user.vefiry_vaccine.vaccine_confirm_piture_url ? (
          <ModalImage
            small={user.vefiry_vaccine.vaccine_confirm_piture_url}
            large={user.vefiry_vaccine.vaccine_confirm_piture_url}
          />
        ) : (
          <img
            src={
              'https://thaigifts.or.th/wp-content/uploads/2017/03/no-image.jpg?=0.5719645620710818'
            }
            style={{ width: 300, height: 200 }}
          />
        )}
      </div>
      {user.vefiry_vaccine.state === 'verifying' && (
        <div style={{ width: 300, flexDirection: 'column' }}>
          <Button
            variant="contained"
            color="primary"
            style={{ width: 300, marginBottom: 10 }}
            onClick={handleClickOpen}
          >
            อัพเดทสถานะ
          </Button>
        </div>
      )}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle id="alert-dialog-title">
          {'ยืนยันการยืนยันตัวตน'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            คุณได้ตรวจสอบข้อมูลแล้วใช่หรือไม่
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
            กรุณาเลือกสถานะที่ต้องการอัพเดท
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button disabled={loading} onClick={handleClose} color="primary">
            ยกเลิก
          </Button>
          <Button
            disabled={loading}
            onClick={handleReject}
            variant="outlined"
            color="primary"
          >
            ปฏิเสธ
          </Button>
          <Button
            disabled={loading}
            onClick={handleApprove}
            variant="contained"
            color="primary"
            autoFocus
          >
            อนุมัติ
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UserVaccine;
