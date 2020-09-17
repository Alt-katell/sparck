import React from 'react';
import styled from 'styled-components';

import { usePageContext } from '../../context/pageContext';

import logo from './sparck_logo.png';
import NavigationItem from './NavigationItem';
import LanguageSwitch from '../LanguageSwitch';


const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 30px 0;
`

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  margin: 0 45px;
  padding: 0;
  height: 16px;
  width: 50%;

  & > * {
    margin: 0 15px;
  }

  &:last-of-type {
    justify-content: flex-end;
  }
`

const StyledLogo = styled.img`
  height: 40px;
  width: auto;
`

const Navbar = () => {
  const {langKey: currentLang} = usePageContext();

  return (
    <header>
      <StyledNav>
        <StyledUl>
          <NavigationItem link="/">{t.about[currentLang]}</NavigationItem>
          <NavigationItem link="/services">{t.services[currentLang]}</NavigationItem>
          <NavigationItem link="/work">{t.work[currentLang]}</NavigationItem>
        </StyledUl>
        <StyledLogo src={logo} alt="Spärck Logo"/>
        <StyledUl>
          <NavigationItem link="/contact">{t.contact[currentLang]}</NavigationItem>

        </StyledUl>
        <LanguageSwitch />
      </StyledNav>
    </header>
  )
}

export default Navbar;

const t = {
  about: {
    en: "About",
    fr: "À propos"
  },
  services: {
    en: "Services",
    fr: "Services"
  },
  work: {
    en: "Work",
    fr: "Portfolio"
  },
  contact: {
    en: "Contact",
    fr: "Contact"
  }
}
