import React, { Fragment } from 'react';
import Text from 'common/components/Text';
import Image from 'common/components/Image';
import Heading from 'common/components/Heading';
import Container from 'common/components/UI/Container';
import FeatureBlock from 'common/components/FeatureBlock';
import GlideCarousel from 'common/components/GlideCarousel';
import GlideSlide from 'common/components/GlideCarousel/glideSlide';
import SectionWrapper, { CarouseWrapper, TextWrapper } from './appSlider.style';

import { appSlider } from 'common/data/AppModern';
import { useSelector } from 'react-redux';

const AppSlider = () => {
  const {
    title_th,
    description_th,
    title_en,
    description_en,
    features,
    carousel,
  } = appSlider;

  const lang = useSelector((state) => state.layout.lang);

  const glideOptions = {
    type: 'carousel',
    gap: 0,
    autoplay: 5000,
    perView: 1,
    animationDuration: 700,
  };

  return (
    <SectionWrapper>
      <Container>
        <CarouseWrapper>
          <GlideCarousel
            bullets={true}
            controls={false}
            numberOfBullets={3}
            options={glideOptions}
            carouselSelector="appFeatureSlider"
          >
            <Fragment>
              {carousel.map((item) => (
                <GlideSlide key={`feature-side--key${item.id}`}>
                  <Image src={item.image} alt={item.title} />
                </GlideSlide>
              ))}
            </Fragment>
          </GlideCarousel>
        </CarouseWrapper>
        <TextWrapper>
          <Heading
            content={lang === 'th' ? title_th : lang === 'en' && title_en}
          />
          <Text
            content={
              lang === 'th' ? description_th : lang === 'en' && description_en
            }
          />
          {features.map((item) => (
            <FeatureBlock
              key={`app-feature--key${item.id}`}
              iconPosition="left"
              icon={
                <img
                  src={item.icon}
                  alt={lang === 'th' ? title_th : lang === 'en' && title_en}
                  style={{ width: 80, height: 80 }}
                />
              }
              title={
                <Heading
                  as="h3"
                  content={
                    lang === 'th'
                      ? item.title_th
                      : lang === 'en' && item.title_en
                  }
                />
              }
              description={
                <Text
                  content={
                    lang === 'th'
                      ? item.description_th
                      : lang === 'en' && item.description_en
                  }
                />
              }
            />
          ))}
        </TextWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default AppSlider;
