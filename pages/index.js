import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { theme } from 'common/theme/appModern';
import { ResetCSS } from 'common/assets/css/style';
import Sticky from 'react-stickynode';
import Navbar from 'landingpage/Navbar';
import Banner from 'landingpage/Banner';
import AppSlider from 'landingpage/AppSlider';
import Features from 'landingpage/Features';
import DashboardFeatures from 'landingpage/Dashboard';
import ProductSlide from 'landingpage/ProductSlide';
import DesignedAndBuilt from 'landingpage/DesignedAndBuilt';
import PricingPolicy from 'landingpage/PricingPolicy';
import TeamPortfolio from 'landingpage/TeamPortfoilo';
import Testimonial from 'landingpage/Testimonial';
import GetStarted from 'landingpage/GetStarted';
import Footer from 'landingpage/Footer';
import GlobalStyle, {
  AppWrapper,
  ContentWrapper,
} from 'landingpage/appModern.style';
import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { setLoading } from '../redux/actions/layoutActions';

const AppModern = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoading(false));
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <>
        <Head>
          <title>Ramble Ruunner Sharing Community</title>
          <meta name="Description" content="React next landing page" />
          <meta name="theme-color" content="#2563FF" />
          <meta
            name="keywords"
            content="React, React js, Next, Next js, Super fast next js landing, Modren landing, Next js landing"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Heebo:300,400,500,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        {/* end of head */}

        <ResetCSS />
        <GlobalStyle />
        {/* end of global and reset style */}

        {/* start app classic landing */}
        <AppWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-active">
            <Navbar />
          </Sticky>
          <ContentWrapper>
            <Banner />
            <Features />
            <AppSlider />
            <DashboardFeatures />
            <ProductSlide />
            <Testimonial />
            <GetStarted />
            {/* <DesignedAndBuilt /> */}
            {/* <PricingPolicy /> */}
            {/* <TeamPortfolio /> */}
            {/* <Newsletter /> */}
          </ContentWrapper>
          <Footer />
        </AppWrapper>
        {/* end of app classic landing */}
      </>
    </ThemeProvider>
  );
};
export default AppModern;
