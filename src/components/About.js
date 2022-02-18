import React from 'react';

import { Section, SectionDivider, SectionText, SectionTitle } from '../styles/GlobalComponents';

const About = () => {
  return (
    <Section nopadding id='about'>
      <br /><br /><br /><br /><br /><br />
      <SectionDivider />
      <br />
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        I write code.  
      </SectionText>
    </Section>
  );
};

export default About;
