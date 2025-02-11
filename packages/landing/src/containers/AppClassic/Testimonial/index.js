import React, { Fragment } from 'react';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Button from 'common/components/Button';
import Container from 'common/components/UI/Container';
import Rating from 'common/components/Rating';
import GlideCarousel from 'common/components/GlideCarousel';
import GlideSlide from 'common/components/GlideCarousel/glideSlide';
import { SectionHeader } from '../appClassic.style';
import SectionWrapper, { CarouselWrapper } from './testimonial.style';

import { testimonial } from 'common/data/AppClassic';
import { Fade } from 'react-awesome-reveal';

const Testimonial = () => {
  const { slogan, title, reviews } = testimonial;

  const glideOptions = {
    type: 'carousel',
    gap: 0,
    autoplay: 5000,
    perView: 2,
    animationDuration: 700,
    breakpoints: {
      991: {
        perView: 1,
      },
    },
  };

  return (
    <SectionWrapper id="testimonial">
      <Container>
        <SectionHeader>
          <Fade direction='up' triggerOnce>
            <Heading content={title} />
          </Fade>
        </SectionHeader>

        <CarouselWrapper>
          <Fade direction='up' triggerOnce delay={100}>
            <GlideCarousel
              options={glideOptions}
              nextButton={
                <Button
                  icon={<i className="flaticon-next" />}
                  aria-label="Next"
                  variant="fab"
                />
              }
              prevButton={
                <Button
                  icon={<i className="flaticon-left-arrow" />}
                  aria-label="Prev"
                  variant="fab"
                />
              }
            >
              <Fragment>
                {reviews.map((item) => (
                  <GlideSlide key={`testimonial--key${item.id}`}>
                    <div className="review-card">
                      <Heading as="h3" content={item.title} />
                      <Text content={item.description} />
                      <div className="card-footer">
                        <div className="image">
                          <img src={item.avatar} alt="Client Image" />
                        </div>
                        <div className="reviewer-info">
                          <div className="content">
                            <Heading as="h4" content={item.name} />
                            <Text content={item.designation} />
                          </div>
                          <Rating rating={item.review} />
                        </div>
                      </div>
                    </div>
                  </GlideSlide>
                ))}
              </Fragment>
            </GlideCarousel>
          </Fade>
        </CarouselWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default Testimonial;
