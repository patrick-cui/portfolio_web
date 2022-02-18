import Link from 'next/link';
import React from 'react';

import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import { Container, Span, Div1, Div2, Div3, NavLink, SocialIcons } from '../styles/GlobalComponents';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: 20 }}>
          <Span>Hao Qi Cui</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Tecnologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#course">
          <NavLink>Coursework</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="http://github.com/patrick-cui" target="_blank">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/hao-qi-cui-9280b421b/" target="_blank">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="mailto: haoqi.cui@gmail.com" target="_blank">
        <AiFillMail size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
