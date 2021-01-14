import React, { useState, useEffect, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Button,
  FormHelperText,
  Hidden,
} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import axios from 'axios';
import { api } from '../../src/api/api';
import Cookies from 'js-cookie';
import Router, { useRouter } from 'next/router';
import { useToasts } from 'react-toast-notifications';
import { useForm, Controller } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { userStateHandle } from '../../redux/actions/userActions';
import { setLoading } from '../../redux/actions/layoutActions';
import { everyPost } from '../../src/utils/request';
import { LocalizationContext } from '../_app';
import RegisterSuccessedDialog from '../../src/components/partner/Register/RegisterSuccessedDialog';

const register = () => {
  const { t } = React.useContext(LocalizationContext);
  const { addToast } = useToasts();
  const route = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const { control, handleSubmit, errors } = useForm();
  const [successedDialogOpen, setSuccessedDialogOpen] = useState(false);

  const handleSuccessedDialogClose = () => {
    setSuccessedDialogOpen();
    route.push('/');
  };

  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(setLoading(false));
    }, [800]);
  }, []);

  const onSubmit = async (data) => {
    dispatch(setLoading(true));
    try {
      const res = await everyPost('/api/everyone/partnerregister', data);

      dispatch(setLoading(false));
      setSuccessedDialogOpen(true);
    } catch (error) {
      console.log(error);
      dispatch(setLoading(false));
    }
  };

  return (
    <Fragment>
      <Hidden smDown>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 3fr',
            height: '100vh',
          }}
        >
          <div
            style={{
              padding: 20,
              borderRight: '1px solid black',
              boxShadow: '5px 0px 10px 0px rgba(0,0,0,0.27)',
            }}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <Controller
                as={TextField}
                name="first_name"
                control={control}
                defaultValue=""
                label={t('partnerregister.first_name')}
                variant="outlined"
                rules={{
                  required: t('partnerregister.first_name_error'),
                }}
                error={errors.first_name && true}
                helperText={errors.first_name?.message}
                // disabled={loading}
                style={{ width: '100%', marginBottom: 20 }}
              />
              <Controller
                as={TextField}
                name="last_name"
                control={control}
                defaultValue=""
                label={t('partnerregister.last_name')}
                variant="outlined"
                rules={{
                  required: t('partnerregister.last_name_error'),
                }}
                error={errors.last_name && true}
                helperText={errors.last_name?.message}
                // disabled={loading}
                style={{ width: '100%', marginBottom: 20 }}
              />
              <Controller
                as={TextField}
                name="company_name"
                control={control}
                defaultValue=""
                label={t('partnerregister.company_name')}
                variant="outlined"
                rules={{
                  required: t('partnerregister.company_name_error'),
                }}
                error={errors.company_name && true}
                helperText={errors.company_name?.message}
                // disabled={loading}
                style={{ width: '100%', marginBottom: 20 }}
              />
              <Controller
                as={TextField}
                name="phone_number"
                control={control}
                defaultValue=""
                label={t('partnerregister.phone')}
                variant="outlined"
                rules={{
                  required: t('partnerregister.phone_error'),
                }}
                error={errors.company_name && true}
                helperText={errors.company_name?.message}
                // disabled={loading}
                style={{ width: '100%', marginBottom: 20 }}
              />
              <Controller
                as={TextField}
                name="line_id"
                control={control}
                defaultValue=""
                label={t('partnerregister.line_id')}
                variant="outlined"
                rules={{
                  required: t('partnerregister.line_id_error'),
                }}
                error={errors.company_name && true}
                helperText={errors.company_name?.message}
                // disabled={loading}
                style={{ width: '100%', marginBottom: 20 }}
              />
              <Button
                variant="contained"
                color="primary"
                style={{ width: '100%' }}
                type="submit"
              >
                {t('partnerregister.send_info')}
              </Button>
            </form>
          </div>
          <div
            style={{
              backgroundImage:
                'linear-gradient(   139deg,rgb(100, 43, 115) 0%,rgb(198, 66, 110) 100%)',
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              justifyContent: 'center',
              paddingTop: 100,
              paddingBottom: 100,
            }}
          >
            <img
              src={require('../../public/assets/logo/ramblewhite.png')}
              style={{ width: '50vw', margin: 50 }}
            />
          </div>
        </div>
      </Hidden>
      <Hidden mdUp>
        <div
          style={{
            padding: 20,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img
            src={require('../../public/assets/logo/ramble.png')}
            style={{ width: '70vw', margin: 50 }}
          />
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              as={TextField}
              name="first_name"
              control={control}
              defaultValue=""
              label={t('partnerregister.first_name')}
              variant="outlined"
              rules={{
                required: t('partnerregister.first_name_error'),
              }}
              error={errors.first_name && true}
              helperText={errors.first_name?.message}
              // disabled={loading}
              style={{ width: '100%', marginBottom: 20 }}
            />
            <Controller
              as={TextField}
              name="last_name"
              control={control}
              defaultValue=""
              label={t('partnerregister.last_name')}
              variant="outlined"
              rules={{
                required: t('partnerregister.last_name_error'),
              }}
              error={errors.last_name && true}
              helperText={errors.last_name?.message}
              // disabled={loading}
              style={{ width: '100%', marginBottom: 20 }}
            />
            <Controller
              as={TextField}
              name="company_name"
              control={control}
              defaultValue=""
              label={t('partnerregister.company_name')}
              variant="outlined"
              rules={{
                required: t('partnerregister.company_name_error'),
              }}
              error={errors.company_name && true}
              helperText={errors.company_name?.message}
              // disabled={loading}
              style={{ width: '100%', marginBottom: 20 }}
            />
            <Controller
              as={TextField}
              name="phone_number"
              control={control}
              defaultValue=""
              label={t('partnerregister.phone')}
              variant="outlined"
              rules={{
                required: t('partnerregister.phone_error'),
              }}
              error={errors.company_name && true}
              helperText={errors.company_name?.message}
              // disabled={loading}
              style={{ width: '100%', marginBottom: 20 }}
            />
            <Controller
              as={TextField}
              name="line_id"
              control={control}
              defaultValue=""
              label={t('partnerregister.line_id')}
              variant="outlined"
              rules={{
                required: t('partnerregister.line_id_error'),
              }}
              error={errors.company_name && true}
              helperText={errors.company_name?.message}
              // disabled={loading}
              style={{ width: '100%', marginBottom: 20 }}
            />
            <Button
              variant="contained"
              color="primary"
              style={{ width: '100%' }}
              type="submit"
            >
              {t('partnerregister.send_info')}
            </Button>
          </form>
        </div>
      </Hidden>
      <RegisterSuccessedDialog
        open={successedDialogOpen}
        handleClose={handleSuccessedDialogClose}
      />
    </Fragment>
  );
};

export default register;
