import React from 'react';

import { Section, SectionDivider, SectionTitle,BlogCard, CardInfo, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, Img } from '../styles/GlobalComponents';
import { projects } from '../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(({ image, title, description, tags, visit }) => (
        <BlogCard onClick={() => window.location = visit}>
          <Img src={image} />
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <br />
            <TagList>
              { tags.map((tag) => (
                <Tag>{tag}</Tag>
              ))}
            </TagList>
          </div>
        </BlogCard>  
      ))}
    </GridContainer>
  </Section>
);

export default Projects;