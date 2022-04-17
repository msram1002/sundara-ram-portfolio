import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <SocialContainer>
        <Slogan>
          Everybody should learn how to code, because it teaches you how to think - Steve Jobs
        </Slogan>
      </SocialContainer>
      <LinkTitle>
        @ Sundara Ram Matta 2022
      </LinkTitle>
    </FooterWrapper>
  );
};

export default Footer;
