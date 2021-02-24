import React, { useState } from 'react';
import {
  TextField,
  Button,
  IconButton,
  Typography,
  Tooltip,
} from '@material-ui/core';
import CloudDoneIcon from '@material-ui/icons/CloudDone';
import CloudQueueIcon from '@material-ui/icons/CloudQueue';
import moment from 'moment';
import 'moment/locale/th';
moment.locale('th');
import DeleteDialog from './DeleteDialog';
import { useDispatch } from 'react-redux';
import { setLoading } from '../../../../../redux/actions/layoutActions';
import { postSocial } from 'utils/request';

const BlogContainer = ({ contents, setContents, setContent }) => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({
    _id: '',
  });
  const dispatch = useDispatch();

  const handleDeleteDialogClose = () => {
    setData({
      _id: '',
    });
    setOpen(false);
  };

  const handleState = async () => {
    dispatch(setLoading(true));
    try {
      const res = await postSocial(
        `/api/employees/changeblogstate/${data._id}`,
        {
          state: data.state === 'active' ? 'deactive' : 'active',
        }
      );

      if (res.status === 200) {
        const index = contents.findIndex((item) => item._id === data._id);
        let newContents = contents;
        newContents[index] = res.data;

        setContents(newContents);
      }
      dispatch(setLoading(false));
    } catch (error) {
      console.log(error);

      dispatch(setLoading(false));
    }
    handleDeleteDialogClose();
  };

  return (
    <div style={{ margin: 20 }}>
      {contents.map((item) => {
        return (
          <div
            key={item._id}
            style={{
              height: 200,
              width: 300,
              position: 'relative',
            }}
          >
            <div
              style={{
                height: 200,
                width: 300,
                backgroundImage: `url('${item.picture_url}')`,
                backgroundSize: 'cover',
                borderRadius: 10,
                overflow: 'hidden',
                marginBottom: 10,
                cursor: 'pointer',
              }}
              onClick={() => {
                setContent(item);
              }}
            >
              <div
                style={{
                  height: 200,
                  width: 300,
                  background:
                    'linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.3) 50%,rgba(0,0,0,1) 100%)',
                }}
              />

              <div style={{ position: 'absolute', bottom: 20, left: 20 }}>
                <Typography variant="body2" style={{ color: '#fff' }}>
                  {item.description}
                </Typography>
                <Typography variant="body1" style={{ color: '#fff' }}>
                  {moment(item.createdAt).format('DD MMMM yyyy')}
                </Typography>
              </div>
            </div>
            <Tooltip
              title={
                item.state === 'active'
                  ? 'เปลี่ยนสถานะเป็น deactive'
                  : item.state === 'deactive' && 'เปลี่ยนสถานะเป็น active'
              }
            >
              <IconButton
                style={{
                  position: 'absolute',
                  bottom: 10,
                  right: 10,
                  color: '#fff',
                }}
                onClick={() => {
                  setData(item);
                  setOpen(true);
                }}
              >
                {item.state === 'active' && <CloudDoneIcon />}
                {item.state === 'deactive' && <CloudQueueIcon />}
              </IconButton>
            </Tooltip>
          </div>
        );
      })}
      <DeleteDialog
        open={open}
        handleClose={handleDeleteDialogClose}
        handleDelete={handleState}
        title={'ต้องการเปลี่ยนสถานะ Blog นี้ใช่หรือไม่'}
      />
    </div>
  );
};

export default BlogContainer;
