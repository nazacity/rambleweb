import React, { Fragment } from 'react';
import Fade from 'react-reveal/Fade';
import { Icon } from 'react-icons-kit';
import { mediaRecordOutline } from 'react-icons-kit/typicons/mediaRecordOutline';
import { plus } from 'react-icons-kit/typicons/plus';
import { starOutline } from 'react-icons-kit/typicons/starOutline';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Image from 'common/components/Image';
import Container from 'common/components/UI/Container';
import FeatureBlock from 'common/components/FeatureBlock';
import { SectionHeader } from '../appModern.style';
import SectionWrapper, { FeatureWrapper } from './features.style';

import { features } from 'common/data/AppModern';
import { useSelector } from 'react-redux';
import { Typography } from '@material-ui/core';
import { LocalizationContext } from '../../../pages/_app';

const Features = () => {
  const { items_th, items_en } = features;
  const lang = useSelector((state) => state.layout.lang);
  const { t } = React.useContext(LocalizationContext);

  return (
    <SectionWrapper id="features">
      <Container>
        <SectionHeader>
          <Fade up>
            <Heading as="h5" content={t('keyfeatures.keyfeatures')} />
            <Heading content={t('keyfeatures.title')} />
          </Fade>
        </SectionHeader>
        <FeatureWrapper>
          {lang === 'th' &&
            items_th.map((item) => (
              <Fade up delay={100 * item.id} key={`feature-key${item.id}`}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <FeatureBlock
                    style={{ '--color': `${item.color}` }}
                    icon={
                      <Fragment>
                        <Icon className="plus" icon={plus} />
                        <Icon className="circle" icon={mediaRecordOutline} />
                        <Image src={item.icon} alt={item.title} />
                        {/* <img
                          src={item.icon}
                          alt={item.title}
                          style={{ width: 300, height: 'auto' }}
                        /> */}
                        <Icon className="star" icon={starOutline} />
                      </Fragment>
                    }
                    iconPosition="left"
                  />
                  <Typography variant="h5" style={{ textAlign: 'center' }}>
                    {item.title}
                  </Typography>

                  <Typography variant="h6" style={{ textAlign: 'center' }}>
                    {item.subtitle}
                  </Typography>

                  <Typography variant="body1" style={{ textAlign: 'center' }}>
                    {item.description}
                  </Typography>
                </div>
              </Fade>
            ))}
          {lang === 'en' &&
            items_en.map((item) => (
              <Fade up delay={100 * item.id} key={`feature-key${item.id}`}>
                <FeatureBlock
                  style={{ '--color': `${item.color}` }}
                  icon={
                    <Fragment>
                      <Icon className="plus" icon={plus} />
                      <Icon className="circle" icon={mediaRecordOutline} />
                      <Image src={item.icon} alt={item.title} />
                      <Icon className="star" icon={starOutline} />
                    </Fragment>
                  }
                  iconPosition="left"
                  title={<Heading as="h3" content={item.title} />}
                  description={<Text content={item.description} />}
                />
              </Fade>
            ))}
        </FeatureWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default Features;
