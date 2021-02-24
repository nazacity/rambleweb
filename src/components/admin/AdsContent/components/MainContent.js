import React, { useEffect, useState } from 'react';
import { Delete, get, post } from 'utils/request';
import { useDispatch } from 'react-redux';
import { setLoading } from '../../../../../redux/actions/layoutActions';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, IconButton } from '@material-ui/core';
import Link from 'next/link';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import DeleteDialog from './DeleteDialog';

const MainContent = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({
    _id: '',
  });

  const handleDeleteDialogClose = () => {
    setOpen(false);
  };

  const handleDelete = async () => {
    dispatch(setLoading(true));
    try {
      const res = await Delete(`/api/employees/mainadvertize/${data._id}`);

      if (res.status === 200) {
        const newMainAdvertizes = mainAdvertizes.filter(
          (item) => item._id !== data._id
        );
        setMainAdvertizes(newMainAdvertizes);
      }
      dispatch(setLoading(false));
    } catch (error) {
      console.log(error);

      dispatch(setLoading(false));
    }
    handleDeleteDialogClose();
  };

  const [mainAdvertizes, setMainAdvertizes] = useState([]);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    unregister,
    control,
    errors,
    reset,
  } = useForm({});

  const fetchMainAdvertizes = async () => {
    dispatch(setLoading(true));
    try {
      const res = await get('/api/everyone/mainadvertize');
      console.log(res);
      if (res.status === 200) {
        setMainAdvertizes(res.data);
      }
      dispatch(setLoading(false));
    } catch (error) {
      console.log(error);
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    fetchMainAdvertizes();
  }, []);

  const onSubmit = async (data) => {
    try {
      dispatch(setLoading(true));
      const res = await post('/api/employees/mainadvertize', data);
      console.log(res);
      if (res.status === 200) {
        setMainAdvertizes([...mainAdvertizes, res.data]);
        reset();
      }
      dispatch(setLoading(false));
    } catch (error) {
      console.log(error);
      dispatch(setLoading(false));
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: 20,
      }}
    >
      <div>
        {mainAdvertizes.map((item) => {
          return (
            <div
              key={item._id}
              style={{
                height: 200,
                width: 300,
                position: 'relative',
                marginBottom: 10,
              }}
            >
              <a href={item.uri} target="_blank">
                <div
                  style={{
                    height: 200,
                    width: 300,
                    backgroundImage: `url('${item.advertize_picture_url}')`,
                    backgroundSize: 'cover',
                    borderRadius: 10,
                    overflow: 'hidden',
                    cursor: 'pointer',
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
                </div>
              </a>
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
                <DeleteOutlineIcon />
              </IconButton>
            </div>
          );
        })}
      </div>
      <div style={{ margin: 20 }}>
        <div style={{ margin: '10px 0' }}>
          <Controller
            as={TextField}
            name="advertize_picture_url"
            control={control}
            defaultValue=""
            label="advertize picture url"
            variant="outlined"
            rules={{
              required: 'กรุณาใส่ picture url',
            }}
            error={errors.advertize_picture_url && true}
            helperText={errors.advertize_picture_url?.message}
            // disabled={loading}
            style={{ width: 300 }}
          />
        </div>
        <div style={{ margin: '10px 0' }}>
          <Controller
            as={TextField}
            name="uri"
            control={control}
            defaultValue=""
            label="Link web size"
            variant="outlined"
            rules={{
              required: 'กรุณาใส่ Link Web Size',
            }}
            error={errors.uri && true}
            helperText={errors.uri?.message}
            // disabled={loading}
            style={{ width: 300 }}
          />
        </div>
        <div>
          <Button
            onClick={handleSubmit(onSubmit)}
            variant="contained"
            color="primary"
            style={{
              width: 100,
              alignSelf: 'center',
            }}
          >
            สร้าง
          </Button>
        </div>
      </div>
      <DeleteDialog
        open={open}
        handleClose={handleDeleteDialogClose}
        handleDelete={handleDelete}
        title={'ต้องการลบ Main Content นี้ใช่หรือไม่'}
      />
    </div>
  );
};

export default MainContent;
