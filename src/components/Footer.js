import React from 'react';
import { AiFillGithub, AiFillMail, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons, CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from '../styles/GlobalComponents';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
        <LinkTitle>EMAIL</LinkTitle>
        <LinkItem href='mailto:haoqi.cui@gmail.com'>haoqi.cui@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan></Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="http://github.com/patrick-cui" target="_blank">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/hao-qi-cui-9280b421b/" target="_blank">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="mailto: haoqi.cui@gmail.com" target="_blank">
            <AiFillMail size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
