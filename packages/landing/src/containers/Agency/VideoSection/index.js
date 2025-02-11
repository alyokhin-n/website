import React from 'react';
import PropTypes from 'prop-types';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Button from 'common/components/Button';
import NextImage from 'common/components/NextImage';
import Container from 'common/components/UI/Container';
import VideoSectionWrapper from './videoSection.style';
import PreviewImage from 'common/assets/image/agency/preview-image.jpg';
import VideoDialog from 'common/components/Dialog/videoDialog';

const VideoSection = ({
  sectionHeader,
  sectionTitle,
  buttonStyle,
  sectionSubTitle,
}) => {

  return (
    <VideoSectionWrapper id="videoSection">
      <Container>
        <Box {...sectionHeader}>
          <Text content="HOW WE WORK" {...sectionSubTitle} />
          <Heading content="Take a look how we enjoy work" {...sectionTitle} />
        </Box>
        <Box className="figure">
          <NextImage src={PreviewImage} alt="Video Preview Image" />
          <Box className="fig__caption">
            <VideoDialog
              label={
                <Button
                  {...buttonStyle}
                  icon={<i className="flaticon-youtube" />}
                  aria-label="Play Video"
                />
              }
              content={
                <div style={{ margin: 'auto' }}>
                  <iframe width="850" height="505" src="https://www.youtube.com/embed/hW98BFnVCm8" title="Cartsy - Super Fast WooCommerce Theme" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
              }
            />
          </Box>
        </Box>
      </Container>
    </VideoSectionWrapper>
  );
};

// VideoSection style props
VideoSection.propTypes = {
  sectionHeader: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  memberName: PropTypes.object,
  designation: PropTypes.object,
};

// VideoSection default style
VideoSection.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: ['40px', '56px'],
  },
  // sub section default style
  sectionSubTitle: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#FF6004',
    mb: '10px',
  },
  // section title default style
  sectionTitle: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
  },
  // button default design
  buttonStyle: {
    variant: 'textButton',
    p: 0,
    color: '#ec4444',
    fontSize: '71px',
  },
};

export default VideoSection;
