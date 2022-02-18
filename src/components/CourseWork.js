import React from 'react';

import { DiPython } from 'react-icons/di';
import { GrPersonalComputer } from 'react-icons/gr';
import { Section, SectionDivider, SectionText, SectionTitle, BlogCard, CardInfo, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, Button } from '../styles/GlobalComponents';
import { courses } from '../constants/constants';

const CourseWork = () =>  (
  <Section nopadding id="tech">
    <br /><br /><br /><br /><br /><br />
    <SectionDivider />
    <br />
    <SectionTitle>CourseWork</SectionTitle>
    <SectionText>
      I am a first-year student at <Button onClick={() => window.location = 'https://www.uwo.ca/'}>Western University</Button>.
    </SectionText>
    <GridContainer>
      {courses.map(({ id, title, num, description, tags, visit }) => (
        <BlogCard key={id} onClick={() => window.location = visit}>  
          <TitleContent>
              <br />
              <GrPersonalComputer size={"5rem"}/>
            <HeaderThree title>{title}</HeaderThree>
            <Hr />
            <TitleContent>{num}</TitleContent>
          </TitleContent>
          <br />
          <CardInfo>{description}</CardInfo>
          <div>
            <TagList>
              {tags.map((tag) => (
                <Tag>{tag}</Tag>
              ))}
            </TagList>
          </div>
          {/*
          <UtilityList>
            <ExternalLinks href={visit}>Code</ExternalLinks>
            <ExternalLinks href={source}>Source</ExternalLinks>
          </UtilityList>
          */}
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default CourseWork;
