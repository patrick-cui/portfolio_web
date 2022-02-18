import React from 'react';

import { DiFirebase, DiReact } from 'react-icons/di';
import { GoGraph } from 'react-icons/go';
import { Section, SectionDivider, SectionText, SectionTitle, List, ListContainer, ListItem, ListParagraph, ListTitle } from '../styles/GlobalComponents';

const Technologies = () =>  (
  <Section nopadding id="tech">
    <br /><br /><br /><br /><br /><br />
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I can use technologies.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="5rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
          Exprience with <br />
          React.js and TailWindCSS
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiReact size="5rem" />
        <ListContainer>
          <ListTitle>Mobile</ListTitle>
          <ListParagraph>
          Exprience with <br />
          React Native
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <GoGraph size="3.5rem" />
        <ListContainer>
          <ListTitle>Data Visualization</ListTitle>
          <ListParagraph>
          Exprience with <br />
          Pandas, Numpy and Matplotlib
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
