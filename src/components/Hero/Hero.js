import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, DownArrow } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello, I'm Sundara Ram
      </SectionTitle>
      <SectionText>
      I am a web application developer building out immersive and beautiful applications and I find happiness in being a better me today than the me yesterday.
      </SectionText>
      {/* <Button alt>
        Scroll Down
      </Button> */}
      <DownArrow src="/images/down-arrow.svg">
      </DownArrow>
    </LeftSection>
  </Section>
);

export default Hero;