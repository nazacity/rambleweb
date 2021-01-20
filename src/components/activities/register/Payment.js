import { Typography } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { post } from 'utils/request';

const Payment = ({ userActivity, activity }) => {
  //   const [qrcode, setQrcode] = useState('');

  //   const getQrcode = async () => {
  //     let amount;
  //     if (userActivity.address._id !== '5ff6600d20ed83388ab4ccbd') {
  //       amount = +userActivity.activity.course.price + 80;
  //       const res = await post(`/api/users/requestpayment/${userActivity._id}`, {
  //         amount: amount,
  //         activity_title: activity.title,
  //         mailfee: true,
  //       });

  //       if (res) {
  //         setQrcode(res.data.qrImage);
  //       }
  //     } else {
  //       amount = +userActivity.activity.course.price;
  //       const res = await post(`/api/users/requestpayment/${userActivity._id}`, {
  //         amount: amount,
  //         activity_title: activity.title,
  //         mailfee: false,
  //       });

  //       if (res) {
  //         setQrcode(res.data.qrImage);
  //       }
  //     }
  //   };

  //   useEffect(() => {
  //     getQrcode();
  //   }, [userActivity]);
  return (
    <div>
      {/* {qrcode && (
        <img
          src={'data:image/png;base64,' + qrcode}
          style={{ width: 200, height: 200 }}
        />
      )} */}
      <Typography>ดำเนินการชำระเงินได้ที่แอพ Ramble</Typography>
    </div>
  );
};

export default Payment;
