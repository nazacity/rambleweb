import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { useSelector } from 'react-redux';
import RambleRegister from './RambleRegister';
import ActivityRegister from './ActivityRegister';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function RegisterDialog({
  open,
  handleClose,
  userActivity,
  setUserActivity,
}) {
  const classes = useStyles();
  const user = useSelector((state) => state.line.user);
  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              {user.type === 'line' && 'สมัครRamble'}
              {user.type === 'ramble' && `สมัครกิจกรรม`}
            </Typography>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        {user.type === 'line' && <RambleRegister />}
        {user.type === 'ramble' && (
          <ActivityRegister
            handleClose={handleClose}
            userActivity={userActivity}
            setUserActivity={setUserActivity}
          />
        )}
      </Dialog>
    </div>
  );
}
