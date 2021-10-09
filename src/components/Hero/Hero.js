import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello, I'm Sundara Ram
      </SectionTitle>
      <SectionText>
      I am a front-end web developer building out immersive and beautiful web applications and I find happiness in being a better me today than the me yesterday.
      </SectionText>
      <Button>
        Email
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;