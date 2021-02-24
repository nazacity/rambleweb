import React, { useState, useEffect } from 'react';

// MUI
import {
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Slide,
  Avatar,
  Button,
  TextField,
} from '@material-ui/core';
import { Close, Add } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { setLoading } from '../../../../../redux/actions/layoutActions';
import { useForm, Controller } from 'react-hook-form';
import { deleteSocial, getSocial, postSocial } from 'utils/request';
import BlogContainer from './BlogContainer';
import moment from 'moment';
import 'moment/locale/th';
moment.locale('th');

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({ open, handleClose, blog }) {
  const [state, setState] = useState(0);
  const [contents, setContents] = useState([]);
  const [content, setContent] = useState({});

  useEffect(() => {
    setContents(blog.blogs);
  }, [blog]);

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    unregister,
    control,
    errors,
    reset,
  } = useForm({});

  const stateContent = () => {
    switch (state) {
      case 0:
        return (
          <BlogContainer
            contents={contents}
            setContents={setContents}
            setContent={setContent}
          />
        );
    }
  };

  //   const getActivitiesById = async () => {
  //     if (profile._id) {
  //       loadingTrue();
  //       try {
  //         const res = await get(`/api/employees/getpartner/${profile._id}`);
  //         setActivities(res.activities);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     } else {
  //       return;
  //     }
  //     loadingFalse();
  //   };

  //   useEffect(() => {
  //     getActivitiesById();
  //   }, [profile]);

  const onSubmit = async (data) => {
    try {
      dispatch(setLoading(true));
      const res = await postSocial('/api/employees/createblog', {
        ...data,
        blog_category: blog._id,
      });

      if (res.status === 200) {
        setContents([...contents, res.data]);
        reset();
      }
      dispatch(setLoading(false));
    } catch (error) {
      console.log(error);
      dispatch(setLoading(false));
    }
  };

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={() => {
        setState(0);
        handleClose();
      }}
      TransitionComponent={Transition}
    >
      <AppBar style={{ position: 'relative' }}>
        <Toolbar>
          <Avatar src={blog.picture_url} />
          <Typography
            variant="h6"
            style={{
              marginLeft: 20,
              flex: 1,
            }}
          >
            {blog.title_th}
          </Typography>

          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <Close />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div style={{ margin: 20, display: 'flex' }}>
        <div style={{ flex: 1 }}>
          <div style={{ margin: '10px 0' }}>
            <Controller
              as={TextField}
              name="picture_url"
              control={control}
              defaultValue=""
              label="picture url"
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
              name="url"
              control={control}
              defaultValue=""
              label="url"
              variant="outlined"
              rules={{
                required: 'กรุณาใส่ url',
              }}
              error={errors.url && true}
              helperText={errors.url?.message}
              // disabled={loading}
              style={{ width: 300 }}
            />
          </div>
          <div style={{ margin: '10px 0' }}>
            <Controller
              as={TextField}
              name="description"
              control={control}
              defaultValue=""
              label="คำบรรยาย"
              variant="outlined"
              rules={{
                required: 'กรุณาใส่คำบรรยาย',
              }}
              error={errors.description && true}
              helperText={errors.description?.message}
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
        <div style={{ flex: 1 }}>
          {content._id && (
            <div>
              <a
                href={content.url}
                target="_blank"
                style={{ textDecoration: 'none', color: '#000' }}
              >
                <Typography variant="body1">{content.url}</Typography>
              </a>
              <Typography variant="body1">{content.description}</Typography>
              <Typography variant="body1">
                {moment(content.createdAt).format('DD MMMM yyyy')}
              </Typography>
            </div>
          )}
        </div>
      </div>
      {stateContent()}
    </Dialog>
  );
}
