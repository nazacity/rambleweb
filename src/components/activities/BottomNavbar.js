import React, { useEffect, useState } from 'react';

// Next
import { useRouter } from 'next/router';
import Link from 'Link';

// Redux
import { useSelector, useDispatch } from 'react-redux';

// MUI
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    width: '100%',
    bottom: 0,
    boxShadow: '0px -5px 5px 0px rgba(0,0,0,0.2)',
  },
  bottomnavroot: {
    padding: '6px 0px 8px',
    color: '#fff',
  },
  bottomnavbox: {
    backgroundColor: '#fff',
  },
  userlogo: {
    width: '30px',
    height: '30px',
  },
  badge: {
    backgroundColor: 'red',
  },
}));

const BottomNavbar = () => {
  const classes = useStyles();
  const action = useDispatch();
  const [value, setValue] = useState(0);
  const user = useSelector((state) => state.line.user);
  const handleChange = (event, activeIndex) => {
    setValue(0);
  };

  const route = useRouter();

  const menuOptions = [
    {
      name: 'ActivitiesBoard',
      link: '/activities',
      selectedIndex: 0,
      icon: <HomeIcon />,
    },
  ];

  useEffect(() => {
    menuOptions.forEach((menu) => {
      switch (route.pathname) {
        case `${menu.link}`:
          if (value !== menu.selectedIndex) {
            setValue(menu.selectedIndex);
          }
          break;
        default:
          break;
      }
    });
  }, []);

  return (
    <div className={classes.root} style={{ zIndex: 2, width: '100vw' }}>
      <BottomNavigation
        value={value}
        onChange={handleChange}
        className={classes.bottomnavbox}
      >
        {/* {menuOptions.map((menu) => (
          <BottomNavigationAction
            component={Link}
            href={menu.link}
            key={menu.name}
            label={menu.name}
            value={menu.selectedIndex}
            icon={menu.icon}
            classes={{
              root: classes.bottomnavroot,
              selected: classes.selected,
            }}
          />
        ))} */}
        <BottomNavigationAction
          label={user.display_name}
          value={0}
          icon={
            <Avatar
              alt="line logo"
              src={user.user_picture_url}
              className={classes.userlogo}
            />
          }
          classes={{
            root: classes.bottomnavroot,
            selected: classes.selected,
          }}
        />
      </BottomNavigation>
    </div>
  );
};

export default BottomNavbar;
