import React, { useState, useRef } from 'react';
import Fade from 'react-reveal/Fade';
import ScrollSpyMenu from 'common/components/ScrollSpyMenu';
import Scrollspy from 'react-scrollspy';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Icon } from 'react-icons-kit';
import { menu } from 'react-icons-kit/feather/menu';
import { x } from 'react-icons-kit/feather/x';
// import { search } from 'react-icons-kit/feather/search';
import Logo from 'common/components/UIElements/Logo';
import Button from 'common/components/Button';
import Container from 'common/components/UI/Container';
import useOnClickOutside from 'common/hooks/useOnClickOutside';
import NavbarWrapper, { MenuArea, MobileMenu, Search } from './navbar.style';
import LogoImage from '../../../public/assets/logo/ramblewhite.png';
import LogoImageAlt from 'assets/logo/ramble.png';
import { useScrollTrigger, IconButton } from '@material-ui/core';

import { navbar } from 'common/data/AppModern';
import { useSelector, useDispatch } from 'react-redux';
import { setTh, setEn } from '../../../redux/actions/layoutActions';
import { LocalizationContext } from '../../../pages/_app';

const Navbar = (props) => {
  const { t } = React.useContext(LocalizationContext);
  const { window } = props;
  const lang = useSelector((state) => state.layout.lang);
  const dispatch = useDispatch();
  const { navMenu_th, navMenu_en } = navbar;
  const [state, setState] = useState({
    search: '',
    searchToggle: false,
    mobileMenu: false,
  });
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  const searchRef = useRef(null);
  useOnClickOutside(searchRef, () =>
    setState({ ...state, searchToggle: false })
  );

  const toggleHandler = (type) => {
    if (type === 'search') {
      setState({
        ...state,
        search: '',
        searchToggle: !state.searchToggle,
        mobileMenu: false,
      });
    }

    if (type === 'menu') {
      setState({
        ...state,
        mobileMenu: !state.mobileMenu,
      });
    }
  };

  const scrollItems = [];

  navMenu_th.forEach((item) => {
    scrollItems.push(item.path.slice(1));
  });

  const handleRemoveMenu = () => {
    setState({
      ...state,
      mobileMenu: false,
    });
  };

  return (
    <NavbarWrapper className="navbar">
      <Container>
        <Logo
          href="/appmodern"
          logoSrc={LogoImage}
          title="App Modern"
          className="main-logo"
        />
        <Logo
          href="/appmodern"
          logoSrc={LogoImageAlt}
          title="App Modern"
          className="logo-alt"
        />
        {/* end of logo */}

        <MenuArea>
          <ScrollSpyMenu
            className="menu"
            menuItems={lang === 'th' ? navMenu_th : lang === 'en' && navMenu_en}
            offset={-84}
          />
          {/* end of main menu */}

          {/* end of search */}
          <div style={{ margin: 'auto 20px' }}>
            <IconButton
              size="small"
              style={
                trigger
                  ? {
                      border: lang === 'th' ? '2px solid #000' : undefined,
                      fontSize: 14,
                      width: 40,
                      height: 40,
                      color: '#000',
                      marginRight: 30,
                    }
                  : {
                      border: lang === 'th' ? '2px solid #fff' : undefined,
                      fontSize: 14,
                      width: 40,
                      height: 40,
                      color: '#fff',
                      marginRight: 30,
                    }
              }
              onClick={() => {
                dispatch(setTh());
              }}
            >
              TH
            </IconButton>
            <IconButton
              size="small"
              style={
                trigger
                  ? {
                      border: lang === 'en' ? '2px solid #000' : undefined,
                      fontSize: 14,
                      width: 40,
                      height: 40,
                      color: '#000',
                    }
                  : {
                      border: lang === 'en' ? '2px solid #fff' : undefined,
                      fontSize: 14,
                      width: 40,
                      height: 40,
                      color: '#fff',
                    }
              }
              onClick={() => {
                dispatch(setEn());
              }}
            >
              EN
            </IconButton>
          </div>

          <AnchorLink href="#getstarted" offset={84}>
            <Button className="trail" title={t('banner.getstarted')} />
          </AnchorLink>

          <Button
            className="menubar"
            icon={
              state.mobileMenu ? (
                <Icon className="bar" icon={x} />
              ) : (
                <Fade>
                  <Icon className="close" icon={menu} />
                </Fade>
              )
            }
            color="#0F2137"
            variant="textButton"
            onClick={() => toggleHandler('menu')}
          />
        </MenuArea>
      </Container>

      {/* start mobile menu */}
      <MobileMenu className={`mobile-menu ${state.mobileMenu ? 'active' : ''}`}>
        <Container>
          <Scrollspy
            className="menu"
            items={scrollItems}
            offset={-84}
            currentClassName="active"
          >
            {lang === 'th'
              ? navMenu_th.map((menu, index) => (
                  <li key={`menu_key${index}`}>
                    <AnchorLink
                      href={menu.path}
                      offset={menu.offset}
                      onClick={handleRemoveMenu}
                    >
                      {menu.label}
                    </AnchorLink>
                  </li>
                ))
              : lang === 'en' &&
                navMenu_en.map((menu, index) => (
                  <li key={`menu_key${index}`}>
                    <AnchorLink
                      href={menu.path}
                      offset={menu.offset}
                      onClick={handleRemoveMenu}
                    >
                      {menu.label}
                    </AnchorLink>
                  </li>
                ))}
          </Scrollspy>
          <Button title="Try for Free" />
        </Container>
      </MobileMenu>
      {/* end of mobile menu */}
    </NavbarWrapper>
  );
};

export default Navbar;
