import React, { useState } from 'react';
import Text from 'common/components/Text';
import Button from 'common/components/Button';
import Heading from 'common/components/Heading';
import Rating from 'common/components/Rating';
import Container from 'common/components/UI/Container';
import BannerWrapper, {
  BannerContent,
  RatingInfo,
  BannerImage,
  ButtonGroup,
} from './banner.style';

import appStore from 'common/assets/image/appClassic/appstore.png';
import googlePlay from 'common/assets/image/appClassic/googlePlay.png';
import { Fade } from 'react-awesome-reveal';

const Banner = () => {
  const [openModal, setModal] = useState(false);
  
  return (
    <BannerWrapper id="home">
      <Container>
        <BannerContent>
          <Fade direction='up' triggerOnce>
            <RatingInfo>
              <Rating rating={4} />
              4.9 of 5 By <img src={appStore?.src} alt="AppStore" />AppStore
            </RatingInfo>
          </Fade>

          {/* <Fade direction='up' triggerOnce delay={50}>
            <RatingInfo>
              <Rating rating={4} />
              4.9 of 5 By <img src={googlePlay?.src} alt="GooglePlay" />GooglePlay
            </RatingInfo>
          </Fade> */}
          <Fade direction='up' triggerOnce delay={100}>
            <Heading
              as="h1"
              content="Control Points are Augmented Reality Objects!"
            />
          </Fade>
          <Fade direction='up' triggerOnce delay={200}>
            <Text
              content="Explore the outdoors like never before with our AR Orienteering app. Navigate through checkpoints using augmented reality on your mobile device, enhancing your adventure with interactive, digital elements. Perfect for adventure enthusiasts and those looking to combine technology with nature."
            />
          </Fade>
          <Fade direction='up' triggerOnce delay={300}>
            <ButtonGroup>
            <a href="#pricing">
              <Button className="primary" title="Download" />
              </a>
            </ButtonGroup>
          </Fade>
        </BannerContent>
        <BannerImage>
          <Fade direction='up' triggerOnce delay={100}>
            {/*<NextImage src={bannerImg} alt="Banner" />*/}
            <iframe
                src="https://www.youtube.com/embed/0NaOYY6H4T0?rel=0"
                title="AR Orienteering"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen>
            </iframe>
          </Fade>
        </BannerImage>
      </Container>
    </BannerWrapper>
  );
};

export default Banner;
