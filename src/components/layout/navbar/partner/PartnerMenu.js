import React from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { signOut } from '../../../../../redux/actions/userActions';
import { setLoading } from '../../../../../redux/actions/layoutActions';
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    zIndex: 100,
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

export default function MenuListComposition({
  anchorRef,
  open,
  handleClose,
  handleListKeyDown,
}) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const route = useRouter();

  const handleSignOut = () => {
    dispatch(setLoading(true));

    setTimeout(() => {
      dispatch(signOut());
      route.push('/partner/signin');
    }, 200);
  };

  return (
    <div className={classes.root}>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleSignOut}>Logout</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}
