import React, { useState } from 'react';
import Link from 'next/link';
import { Icon } from 'react-icons-kit';
import { checkmarkCircled } from 'react-icons-kit/ionicons/checkmarkCircled';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Button from 'common/components/Button';
import Container from 'common/components/UI/Container';
import { SectionHeader } from '../appClassic.style';
import SectionWrapper, {
  ButtonGroup,
  PricingArea,
  InnerWrapper,
  PricingCard,
} from './pricingPolicy.style';

import crown from 'common/assets/image/appClassic/crown.svg';

import { download } from 'common/data/AppClassic';
import DownloadButtons from "../../../common/components/DownloadButtons";

const PricingPolicy = () => {
  const {  title, athlete, coach } = download;
  const [state, setState] = useState({
    active: 'athlete',
    choosedApp: athlete,
  });

  const handleApp = (app) => {
    if (app === 'coach') {
      setState({
        ...state,
        active: 'coach',
        choosedApp: coach,
      });
    } else {
      setState({
        ...state,
        active: 'athlete',
        choosedApp: athlete,
      });
    }
  };

  return (
    <SectionWrapper id="pricing">
      <Container>
        <SectionHeader>
          <Heading  content={title} />
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

        <PricingArea>
          <InnerWrapper>
            <PricingCard key={`${state.active}-card--key${state.choosedApp.id}`}>
              <div className="card-header">
                <Heading as="h3" content={state.choosedApp.title} />
                <Text content={state.choosedApp.description} />
              </div>
              <div className="card-body">
                <ul className="feature-list">
                  {state.choosedApp.features.map((item) => (
                      <li key={`${state.active}-feature--key${item.id}`}>
                        <Icon icon={checkmarkCircled} /> {item.text}
                      </li>
                  ))}
                </ul>
              </div>
              <div className="card-footer">
                <strong>
                  <span>Get FREE on:</span>
                </strong>
               <DownloadButtons/>
              </div>
            </PricingCard>

          </InnerWrapper>
        </PricingArea>
      </Container>
    </SectionWrapper>
  );
};

export default PricingPolicy;
