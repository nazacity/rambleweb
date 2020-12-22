import React, { useState, useEffect, Fragment } from 'react';
import {
  Toolbar,
  useScrollTrigger,
  Icon,
  IconButton,
  Avatar,
  makeStyles,
  Tabs,
  Tab,
  Button,
  Badge,
  Typography,
} from '@material-ui/core';
import { loadCSS } from 'fg-loadcss';
import MenuIcon from '@material-ui/icons/Menu';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import UserMenu from './PartnerMenu';
import { Notifications, Settings } from '@material-ui/icons';
import { setPartnerMenuIndex } from '../../../../redux/actions/navigationActions';
import { setTh, setEn } from '../../../../redux/actions/layoutActions';
import { LocalizationContext } from '../../../../pages/_app';

const useStyles = makeStyles((theme) => ({
  tabStyle: {
    minWidth: 120,
    '&.MuiTab-textColorPrimary': {
      color: '#493e2f',
      '&.Mui-selected': {
        color: '#e5614c',
      },
    },
    padding: 0,
  },
  menuList: {
    color: '#493e2f',
    fontSize: 10,
    padding: 5,
    marginRight: 5,
    '&:hover': {
      color: '#e5614c',
    },
  },
  nested: {
    paddingLeft: theme.spacing(10),
  },
}));

const ElevateAppBar = (props) => {
  const { t } = React.useContext(LocalizationContext);
  const { window } = props;
  const classes = useStyles();
  const user = useSelector((state) => state.user);
  const partnerMenuIndex = useSelector(
    (state) => state.navigation.partnerMenuIndex
  );
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const handleChange = (event, newValue) => {
    dispatch(setPartnerMenuIndex(newValue));
  };

  if (!user._id) {
    return <div />;
  }

  return (
    <Fragment>
      <Toolbar>
        <div style={{ width: 100, color: 'black' }}>logo</div>
        <div
          style={{
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'flex-start',
          }}
        >
          <Tabs
            value={partnerMenuIndex}
            onChange={handleChange}
            textColor="primary"
            TabIndicatorProps={{ style: { backgroundColor: '#e5614c' } }}
            className={classes.tabsStyle}
          >
            <Tab label="กิจกรรม" className={classes.tabStyle} value={0} />
            <Tab label="รายงาน" className={classes.tabStyle} value={1} />
            <Tab label="ระบบโฆษณา CS" className={classes.tabStyle} value={2} />
          </Tabs>
        </div>
        <div
          style={{
            width: '30vw',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
        >
          <IconButton
            onClick={() => {
              dispatch(setTh());
            }}
          >
            <Settings />
          </IconButton>
          <IconButton
            onClick={() => {
              dispatch(setEn());
            }}
          >
            <Badge badgeContent={4} color="error">
              <Notifications />
            </Badge>
          </IconButton>

          <div
            style={{
              height: 40,
              border: '1px solid black',
              margin: 'auto 10px',
            }}
          />
          <Button
            ref={anchorRef}
            onClick={handleToggle}
            style={{ borderRadius: 0 }}
          >
            <Avatar alt="Travis Howard" src={user.picture_url} />
            <div>
              <Typography
                variant="h6"
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  color: 'black',
                  marginLeft: 5,
                }}
              >
                {user.display_name}
              </Typography>
              <Typography
                variant="body2"
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  color: 'black',
                  marginLeft: 5,
                }}
              >
                {user.permission}
              </Typography>
            </div>
          </Button>
        </div>
      </Toolbar>
      <UserMenu
        open={open}
        handleClose={handleClose}
        anchorRef={anchorRef}
        handleListKeyDown={handleListKeyDown}
      />
    </Fragment>
  );
};

export default ElevateAppBar;
