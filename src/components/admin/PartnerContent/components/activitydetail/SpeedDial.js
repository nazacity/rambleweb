import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { SpeedDial, SpeedDialIcon, SpeedDialAction } from '@material-ui/lab';
import PrintIcon from '@material-ui/icons/Print';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AssessmentIcon from '@material-ui/icons/Assessment';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { AppBar, Icon, Hidden } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { loadCSS } from 'fg-loadcss';

const useStyles = makeStyles((theme) => ({
  root: {
    transform: 'translateZ(0px)',
    flexGrow: 1,
  },
  speedDial: {
    position: 'fixed',
    '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
      bottom: theme.spacing(5),
      right: theme.spacing(5),
    },
    '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
      top: theme.spacing(2),
      left: theme.spacing(2),
    },
  },
}));

export default function SpeedDials({
  setValue,
  setState,
  setQrcodeGeneratorModalOpen,
}) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const node = loadCSS(
      'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
      document.querySelector('#font-awesome-css')
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const actions = [
    {
      icon: <AssessmentIcon />,
      name: 'Report',
      onClick: () => {
        setValue(0);
        handleClose();
      },
    },
    {
      icon: <Icon className="fas fa-running" />,
      name: 'Activity Detail',
      onClick: () => {
        setValue(1);
        handleClose();
      },
    },
    {
      icon: <AccountCircleIcon />,
      name: 'User Management',
      onClick: () => {
        setValue(2);
        handleClose();
      },
    },
    {
      icon: <Icon className="fas fa-qrcode" />,
      name: 'Qrcode Generator',
      onClick: () => {
        setQrcodeGeneratorModalOpen(true);
        handleClose();
      },
    },
    // {
    //   icon: <PrintIcon />,
    //   name: 'Print Report',
    //   onClick: () => {
    //     setValue(3);
    //     handleClose();
    //   },
    // },
    {
      icon: <ArrowBackIcon />,
      name: 'Back',
      onClick: () => {
        setState(0);
        handleClose();
      },
    },
  ];

  const actions_mobile = [
    {
      icon: <AssessmentIcon />,
      name: 'Report',
      onClick: () => {
        setValue(0);
        handleClose();
      },
    },
    {
      icon: <Icon className="fas fa-running" />,
      name: 'Activity Detail',
      onClick: () => {
        setValue(1);
        handleClose();
      },
    },
    // {
    //   icon: <AccountCircleIcon />,
    //   name: 'User Management',
    //   onClick: () => {
    //     setValue(2);
    //     handleClose();
    //   },
    // },
    {
      icon: <Icon className="fas fa-qrcode" />,
      name: 'Qrcode Generator',
      onClick: () => {
        setQrcodeGeneratorModalOpen(true);
        handleClose();
      },
    },
    {
      icon: <ArrowBackIcon />,
      name: 'Back',
      onClick: () => {
        setState(0);
        handleClose();
      },
    },
  ];

  return (
    <div>
      <Hidden smDown>
        <SpeedDial
          ariaLabel="SpeedDial example"
          className={classes.speedDial}
          icon={<MenuIcon />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
          direction="left"
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={action.onClick}
            />
          ))}
        </SpeedDial>
      </Hidden>
      <Hidden mdUp>
        <SpeedDial
          ariaLabel="SpeedDial example"
          className={classes.speedDial}
          icon={<MenuIcon />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
          direction="left"
        >
          {actions_mobile.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={action.onClick}
            />
          ))}
        </SpeedDial>
      </Hidden>
    </div>
  );
}
