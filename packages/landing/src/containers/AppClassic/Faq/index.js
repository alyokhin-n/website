import React, {Fragment, useState} from 'react';
import { Icon } from 'react-icons-kit';
import { plusCircled } from 'react-icons-kit/ionicons/plusCircled';
import { minusCircled } from 'react-icons-kit/ionicons/minusCircled';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Container from 'common/components/UI/Container';
import {
  Accordion,
  AccordionItem,
  AccordionTitle,
  AccordionBody,
  IconWrapper,
  OpenIcon,
  CloseIcon,
} from 'common/components/Accordion';
import { SectionHeader } from '../appClassic.style';
import FaqSection, {ButtonGroup} from './faq.style';

import { faq } from 'common/data/AppClassic';
import NextImage from "../../../common/components/NextImage";

const Faq = () => {
  const { slogan, title, faqs } = faq;
  const [state, setState] = useState({
    active: 'athlete',
    choosedApp: faqs.athlete,
  });

  const handleApp = (app) => {
    if (app === 'coach') {
      setState({
        ...state,
        active: 'coach',
        choosedApp: faqs.coach,
      });
    } else {
      setState({
        ...state,
        active: 'athlete',
        choosedApp: faqs.athlete,
      });
    }
  };
  return (
    <FaqSection id="faq">
      <Container>
        <SectionHeader>
          <Heading as="h5" content={slogan} />
          <Heading content={title} />
        </SectionHeader>
        <ButtonGroup>
          <button
              className={state.active === 'athlete' ? 'active' : ''}
              type="button"
              onClick={() => handleApp('athlete')}
          >
            Athlete
          </button>
          <button
              className={state.active === 'coach' ? 'active' : ''}
              type="button"
              onClick={() => handleApp('coach')}
          >
            Coach
          </button>
        </ButtonGroup>
        <Accordion>
          <Fragment>
            {state.choosedApp.map((item) => (
              <AccordionItem key={`accordion-key--${item.id}`}>
                <Fragment>
                  <AccordionTitle>
                    <Fragment>
                      <Heading as="h3" content={item.question} />
                      <IconWrapper className="icon-wrapper">
                        <OpenIcon>
                          <Icon icon={minusCircled} size={18} />
                        </OpenIcon>
                        <CloseIcon>
                          <Icon icon={plusCircled} size={18} />
                        </CloseIcon>
                      </IconWrapper>
                    </Fragment>
                  </AccordionTitle>
                  <AccordionBody>
                    {item.answer &&  <Text content={item.answer} />}
                    {item.gif && <NextImage src={item.gif} alt={"Orienteering gif"}/>}
                    {item.videoUrl &&  <iframe
                        src={item.videoUrl}
                        title="AR Orienteering"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen>
                    </iframe>}
                  </AccordionBody>
                </Fragment>
              </AccordionItem>
            ))}
          </Fragment>
        </Accordion>
      </Container>
    </FaqSection>
  );
};

export default Faq;
