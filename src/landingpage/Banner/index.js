import React, { Fragment } from 'react';
import Fade from 'react-reveal/Fade';
import { Icon } from 'react-icons-kit';
import { playCircle } from 'react-icons-kit/fa/playCircle';
import { openModal, closeModal } from '@redq/reuse-modal';
import Button from 'common/components/Button';
import BannerWrapper, {
  ButtonGroup,
  VideoWrapper,
  BannerWrapper1,
  BannerWrapper2,
} from './banner.style';

import bannerImg from '../../../public/assets/screen/mockup1.png';
import activity1 from '../../../public/assets/screen/activity1.png';
import activity2 from '../../../public/assets/screen/activity2.png';
import activity3 from '../../../public/assets/screen/activity3.png';
import videoBanner1 from 'common/assets/image/appModern/video-1.png';
import videoBanner2 from 'common/assets/image/appModern/video-2.png';
import { LocalizationContext } from '../../../pages/_app';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { Grid, Hidden, Typography } from '@material-ui/core';
// close button for modal
const CloseModalButton = () => (
  <Button
    className="modalCloseBtn"
    variant="fab"
    onClick={() => closeModal()}
    icon={<i className="flaticon-plus-symbol" />}
  />
);

const ModalContent = () => (
  <VideoWrapper>
    <iframe
      title="Video"
      src="https://www.youtube.com/embed/8ME-QAlW6Ww"
      frameBorder="0"
    />
  </VideoWrapper>
);

const Banner = () => {
  const { t } = React.useContext(LocalizationContext);
  // modal handler
  const handleVideoModal = () => {
    openModal({
      config: {
        className: 'video-modal',
        disableDragging: true,
        default: {
          width: 'auto',
          height: 'auto',
          x: 0,
          y: 0,
        },
      },
      component: ModalContent,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: true,
    });
  };
  return (
    <Fragment>
      <Hidden smDown>
        <BannerWrapper id="home">
          <BannerWrapper1>
            <BannerWrapper2>
              <Grid container spacing={2}>
                <Grid item xs={2}></Grid>
                <Grid item xs={4}>
                  <Fade up delay={100}>
                    <Typography
                      variant="h1"
                      style={{
                        fontSize: 46,
                        lineHeight: 1.2,
                        fontWeight: 700,
                        color: '#fff',
                        marginBottom: 24,
                      }}
                    >
                      {t('banner.headingtitle')}
                    </Typography>
                  </Fade>
                  <Fade up delay={200}>
                    <Typography
                      variant="body1"
                      style={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontSize: 16,
                      }}
                    >
                      {t('banner.description')}
                    </Typography>
                  </Fade>
                  <Fade up delay={300}>
                    <ButtonGroup>
                      <AnchorLink href="#getstarted" offset={84}>
                        <Button
                          className="primary"
                          title={t('banner.getstarted')}
                        />
                      </AnchorLink>
                      <Button
                        className="text"
                        variant="textButton"
                        icon={<Icon icon={playCircle} />}
                        iconPosition="left"
                        title={t('banner.watchvideo')}
                        onClick={handleVideoModal}
                      />
                    </ButtonGroup>
                  </Fade>
                  <Fade up delay={300}>
                    <div style={{ display: 'flex', marginTop: 60 }}>
                      <img
                        src={videoBanner1}
                        onClick={handleVideoModal}
                        alt="Microsoft"
                        style={{
                          marginRight: 10,
                          objectFit: 'cover',
                          cursor: 'pointer',
                          height: '100%',
                          borderRadius: 5,
                        }}
                      />
                      <img
                        src={videoBanner2}
                        onClick={handleVideoModal}
                        alt="Microsoft"
                        style={{
                          objectFit: 'cover',
                          cursor: 'pointer',
                          height: '100%',
                          borderRadius: 5,
                        }}
                      />
                    </div>
                  </Fade>
                </Grid>
                <Grid item xs={5} style={{ position: 'relative' }}>
                  <Fade up delay={100}>
                    <img
                      src={bannerImg}
                      alt="Banner"
                      style={{ width: '60vw' }}
                    />
                  </Fade>
                  <Fade up delay={300}>
                    <img
                      src={activity1}
                      alt="activities"
                      style={{
                        width: '15vw',
                        position: 'absolute',
                        top: '10vw',
                        left: '5vw',
                      }}
                    />
                  </Fade>
                  <Fade up delay={200}>
                    <img
                      src={activity2}
                      alt="activities"
                      style={{
                        width: '15vw',
                        position: 'absolute',
                        top: '10vw',
                        left: '18vw',
                      }}
                    />
                  </Fade>
                  <Fade up delay={340}>
                    <img
                      src={activity3}
                      alt="activities"
                      style={{
                        width: '15vw',
                        position: 'absolute',
                        top: '5vw',
                        left: '12vw',
                      }}
                    />
                  </Fade>
                </Grid>
              </Grid>
            </BannerWrapper2>
          </BannerWrapper1>
        </BannerWrapper>
      </Hidden>
      <Hidden mdUp>
        <BannerWrapper id="home">
          <BannerWrapper1>
            <BannerWrapper2>
              <Grid
                container
                spacing={2}
                direction="row"
                alignItems="center"
                justify="center"
              >
                <Grid item xs={10} style={{ position: 'relative' }}>
                  <Fade up delay={100}>
                    <img
                      src={bannerImg}
                      alt="Banner"
                      style={{ width: '100vw', marginLeft: '5vw' }}
                    />
                  </Fade>
                  <Fade up delay={300}>
                    <img
                      src={activity1}
                      alt="activities"
                      style={{
                        width: '30vw',
                        position: 'absolute',
                        top: '10vw',
                        left: '13vw',
                      }}
                    />
                  </Fade>
                  <Fade up delay={200}>
                    <img
                      src={activity2}
                      alt="activities"
                      style={{
                        width: '30vw',
                        position: 'absolute',
                        top: '25vw',
                        left: '30vw',
                      }}
                    />
                  </Fade>
                  <Fade up delay={340}>
                    <img
                      src={activity3}
                      alt="activities"
                      style={{
                        width: '30vw',
                        position: 'absolute',
                        top: '5vw',
                        left: '42vw',
                      }}
                    />
                  </Fade>
                </Grid>
              </Grid>
              <Grid
                container
                spacing={2}
                direction="row"
                alignItems="center"
                justify="center"
              >
                <Grid item xs={10} sm={8}>
                  <Fade up delay={100}>
                    <Typography
                      variant="h1"
                      style={{
                        fontSize: 30,
                        lineHeight: 1.2,
                        fontWeight: 700,
                        color: '#fff',
                        marginBottom: 24,
                        textAlign: 'center',
                      }}
                    >
                      {t('banner.headingtitle')}
                    </Typography>
                  </Fade>
                  <Fade up delay={200}>
                    <Typography
                      variant="body1"
                      style={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontSize: 18,
                        textAlign: 'center',
                      }}
                    >
                      {t('banner.description')}
                    </Typography>
                  </Fade>
                  <Fade up delay={300}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <ButtonGroup>
                        <Button
                          className="primary"
                          title={t('banner.getstarted')}
                        />
                        <Button
                          className="text"
                          variant="textButton"
                          icon={<Icon icon={playCircle} />}
                          iconPosition="left"
                          title={t('banner.watchvideo')}
                        />
                      </ButtonGroup>
                    </div>
                  </Fade>
                  <Fade up delay={300}>
                    <div
                      style={{
                        margin: '60px auto',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                      }}
                    >
                      <img
                        src={videoBanner1}
                        onClick={handleVideoModal}
                        alt="Microsoft"
                        style={{
                          marginBottom: 10,
                          objectFit: 'cover',
                          cursor: 'pointer',
                          height: '100%',
                          borderRadius: 5,
                        }}
                      />
                      <img
                        src={videoBanner2}
                        onClick={handleVideoModal}
                        alt="Microsoft"
                        style={{
                          objectFit: 'cover',
                          cursor: 'pointer',
                          height: '100%',
                          borderRadius: 5,
                        }}
                      />
                    </div>
                  </Fade>
                </Grid>
              </Grid>
            </BannerWrapper2>
          </BannerWrapper1>
        </BannerWrapper>
      </Hidden>
    </Fragment>
  );
};

export default Banner;
