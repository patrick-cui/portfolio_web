import React from 'react';

import { LeftSection, Section, SectionText, SectionTitle } from '../styles/GlobalComponents';
import Button from '../styles/GlobalComponents/Button';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        my portfolio
      </SectionTitle>
      <SectionText>
        I write code.
      </SectionText>
      <Button onClick={() => window.location = 'mailto:haoqi.cui@gmail.com'}>Contact me</Button>
    </LeftSection>
  </Section> 
);

export default Hero;