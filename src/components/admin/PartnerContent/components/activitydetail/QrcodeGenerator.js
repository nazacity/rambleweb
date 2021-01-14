import React, { useState, useRef } from 'react';
import QRCode from 'qrcode.react';
import {
  Dialog,
  Typography,
  IconButton,
  DialogContent,
} from '@material-ui/core';
import ReactToPrint from 'react-to-print';
import QrcodePrint from '../report/QrcodePrint';
import PrintIcon from '@material-ui/icons/Print';

const QrcodeGenerator = ({ open, handleClose, activityDetail }) => {
  const [item, setItem] = useState({ _id: '', picture_url: '' });
  const printRef = useRef();
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="md"
      fullWidth
      scroll="body"
    >
      <DialogContent style={{ overflow: 'hidden' }}>
        <div>
          <Typography style={{ textAlign: 'center' }} variant="h4">
            Check In Qr Code
          </Typography>
          <div style={{ height: 300, width: 300, margin: '0 auto 60px' }}>
            <QRCode
              value={activityDetail._id}
              imageSettings={{
                src: activityDetail.activity_picture_url,
                height: 50,
                width: 50,
                excavate: true,
              }}
              size={300}
            />
            <ReactToPrint
              trigger={() => (
                <div
                  style={{
                    margin: '5px auto',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <IconButton
                    onClick={() => {
                      setItem({
                        title: 'Check In',
                        _id: activityDetail._id,
                        picture_url: activityDetail.activity_picture_url,
                      });
                    }}
                  >
                    <PrintIcon />
                  </IconButton>
                </div>
              )}
              content={() => printRef.current}
            />
          </div>
        </div>
        <div>
          <Typography style={{ textAlign: 'center' }} variant="h4">
            Check Out Or Code
          </Typography>
          {activityDetail.courses.map((item) => {
            return (
              <div key={item._id}>
                <Typography style={{ textAlign: 'center' }} variant="h6">
                  {item.title}
                </Typography>
                <div style={{ height: 300, width: 300, margin: '0 auto 60px' }}>
                  <QRCode
                    value={item._id}
                    imageSettings={{
                      src: item.course_picture_url,
                      height: 50,
                      width: 50,
                      excavate: true,
                    }}
                    size={300}
                  />
                  <ReactToPrint
                    trigger={() => (
                      <div
                        style={{
                          margin: '5px auto',
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                      >
                        <IconButton
                          onClick={() => {
                            setItem({
                              _id: item._id,
                              picture_url: item.course_picture_url,
                              title: `Check Out for ${item.title}`,
                            });
                          }}
                        >
                          <PrintIcon />
                        </IconButton>
                      </div>
                    )}
                    content={() => printRef.current}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div style={{ display: 'none' }}>
          <QrcodePrint ref={printRef} item={item} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QrcodeGenerator;
