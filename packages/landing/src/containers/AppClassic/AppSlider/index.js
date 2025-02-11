import React, { Fragment } from 'react';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import NextImage from 'common/components/NextImage';
import Container from 'common/components/UI/Container';
import FeatureBlock from 'common/components/FeatureBlock';
import GlideCarousel from 'common/components/GlideCarousel';
import GlideSlide from 'common/components/GlideCarousel/glideSlide';
import SectionWrapper, { CarouseWrapper, TextWrapper } from './appSlider.style';

import { appSlider } from 'common/data/AppClassic';

const AppSlider = () => {
  const { title, description, features, carousel } = appSlider;

  const glideOptions = {
    type: 'carousel',
    gap: 0,
    autoplay: 5000,
    perView: 1,
    animationDuration: 700,
  };

  return (
      <SectionWrapper id="features">
        <Container>
          <CarouseWrapper>
            <GlideCarousel
                bullets={true}
                controls={false}
                numberOfBullets={4}
                options={glideOptions}
                carouselSelector="appFeatureSlider"
            >
              <Fragment>
                {carousel.map((item) => (
                    <GlideSlide key={`feature-side--key${item.id}`}>
                      <NextImage src={item.image} alt={item.title} style={{ height: 'auto' }} />
                    </GlideSlide>
                ))}
              </Fragment>
            </GlideCarousel>
          </CarouseWrapper>
          <TextWrapper>
            <Heading content={title} />
            <Text content={description} />
            {features.map((item) => (
                <FeatureBlock
                    key={`app-feature--key${item.id}`}
                    iconPosition="left"
                    icon={<i className={item.icon}></i>}
                    image={<NextImage src={item.image} alt={item.title} style={{ "max-width": "80px","height": "auto" }} />}
                    title={<Heading as="h3" content={item.title} />}
                    description={<Text content={item.description} />}
                />
            ))}
          </TextWrapper>
        </Container>
      </SectionWrapper>
  );
};

export default AppSlider;
