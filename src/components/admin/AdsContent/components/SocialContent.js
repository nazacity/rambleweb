import React, { useEffect, useState } from 'react';
import { deleteSocial, getSocial, postSocial } from 'utils/request';
import { useDispatch } from 'react-redux';
import { setLoading } from '../../../../../redux/actions/layoutActions';
import { useForm, Controller } from 'react-hook-form';
import {
  TextField,
  Button,
  IconButton,
  Typography,
  Tooltip,
} from '@material-ui/core';
import Link from 'next/link';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import DeleteDialog from './DeleteDialog';
import BlogDialog from './BlogDialog';
import CloudDoneIcon from '@material-ui/icons/CloudDone';
import CloudQueueIcon from '@material-ui/icons/CloudQueue';

const SocialContent = () => {
  const [open, setOpen] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false);
  const [data, setData] = useState({
    _id: '',
    blogs: [],
  });
  const [blogCategories, setBlogCategories] = useState([]);

  const handleBlogDialogClose = async () => {
    await fetchBlogCategories();
    setData({
      _id: '',
      blogs: [],
    });
    setBlogOpen(false);
  };

  const handleDeleteDialogClose = () => {
    setOpen(false);
  };

  //   const handleDelete = async () => {
  //     dispatch(setLoading(true));
  //     try {
  //       const res = await deleteSocial(`/api/employees/blogcategory/${data._id}`);

  //       if (res.status === 200) {
  //         const newBlogCategories = blogCategories.filter(
  //           (item) => item._id !== data._id
  //         );
  //         setBlogCategories(newBlogCategories);
  //       }
  //       dispatch(setLoading(false));
  //     } catch (error) {
  //       console.log(error);

  //       dispatch(setLoading(false));
  //     }
  //     handleDeleteDialogClose();
  //   };

  const handleState = async () => {
    dispatch(setLoading(true));
    try {
      const res = await postSocial(
        `/api/employees/changesocialcategorystate/${data._id}`,
        {
          state: data.state === 'active' ? 'deactive' : 'active',
        }
      );

      if (res.status === 200) {
        const index = blogCategories.findIndex((item) => item._id === data._id);
        let newBlogCategories = blogCategories;
        newBlogCategories[index] = res.data;

        setBlogCategories(newBlogCategories);
      }
      dispatch(setLoading(false));
    } catch (error) {
      console.log(error);

      dispatch(setLoading(false));
    }
    handleDeleteDialogClose();
  };

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    unregister,
    control,
    errors,
    reset,
  } = useForm({});

  const fetchBlogCategories = async () => {
    dispatch(setLoading(true));
    try {
      const res = await getSocial('/api/everyone/socialcategories');

      if (res.status === 200) {
        setBlogCategories(res.data);
      }
      dispatch(setLoading(false));
    } catch (error) {
      console.log(error);
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    fetchBlogCategories();
  }, []);

  const onSubmit = async (data) => {
    try {
      dispatch(setLoading(true));
      const res = await postSocial('/api/employees/createsocialcategory', data);

      if (res.status === 200) {
        setBlogCategories([...blogCategories, res.data]);
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
        {blogCategories.map((item) => {
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
              <div
                style={{
                  height: 200,
                  width: 300,
                  backgroundImage: `url('${item.picture_url}')`,
                  backgroundSize: 'cover',
                  borderRadius: 10,
                  overflow: 'hidden',

                  cursor: 'pointer',
                }}
                onClick={() => {
                  setData(item);
                  setBlogOpen(true);
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
                {/* <img
                src={item.picture_url}
                style={{ height: 200, width: 300, borderRadius: 10 }}
              /> */}
                <div style={{ position: 'absolute', bottom: 20, left: 20 }}>
                  <Typography variant="h6" style={{ color: '#fff' }}>
                    {item.title_th}
                  </Typography>
                  <Typography variant="h6" style={{ color: '#fff' }}>
                    {item.title_en}
                  </Typography>
                </div>
                {/* <IconButton
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
              </IconButton> */}
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
      </div>
      <div style={{ margin: 20 }}>
        <div style={{ margin: '10px 0' }}>
          <Controller
            as={TextField}
            name="picture_url"
            control={control}
            defaultValue=""
            label="social picture url"
            variant="outlined"
            rules={{
              required: 'กรุณาใส่ picture url',
            }}
            error={errors.picture_url && true}
            helperText={errors.picture_url?.message}
            // disabled={loading}
            style={{ width: 300 }}
          />
        </div>
        <div style={{ margin: '10px 0' }}>
          <Controller
            as={TextField}
            name="title_th"
            control={control}
            defaultValue=""
            label="ชื่อประเภทภาษาไทย"
            variant="outlined"
            rules={{
              required: 'กรุณาใส่ชื่อประเภทภาษาไทย',
            }}
            error={errors.title_th && true}
            helperText={errors.title_th?.message}
            // disabled={loading}
            style={{ width: 300 }}
          />
        </div>
        <div style={{ margin: '10px 0' }}>
          <Controller
            as={TextField}
            name="title_en"
            control={control}
            defaultValue=""
            label="ชื่อประเภทภาษาอังกฤษ"
            variant="outlined"
            rules={{
              required: 'กรุณาใส่ชื่อประเภทภาษาอังกฤษ',
            }}
            error={errors.title_en && true}
            helperText={errors.title_en?.message}
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
        handleDelete={handleState}
        title={'ต้องการเปลี่ยนสถานะ Social Category นี้ใช่หรือไม่'}
      />
      {/* <BlogDialog
        open={blogOpen}
        handleClose={handleBlogDialogClose}
        blog={data}
      /> */}
    </div>
  );
};

export default SocialContent;
