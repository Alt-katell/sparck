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
  padding: 30px 0 10px 0;
  position: fixed;
  top: 0;
  width: 100%;
  background: ${props => props.theme.colors.grey};
`

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  margin: 0 45px;
  padding: 0;
  width: 50%;
  z-index: 4;

  & > * {
    margin: 0 15px;
  }

  &:first-of-type {
    flex-basis: 30%;
  }

  &:last-of-type {
    justify-content: flex-end;
    flex-basis: 20%;
  }
`

const StyledLogo = styled.img`
  height: 40px;
  width: auto;
  z-index: 4;
`

const StyledWhiteNavbarPortion = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 80px;
  min-width: 850px;
  background: ${props => props.theme.colors.white};
  z-index: 2;
`

const StyledLine1 = styled.div`
  width: 1px;
  height: 80px;
  border-left: 1px solid ${props => props.theme.colors.white};
  position: fixed;
  top: 0;
  left: 25%;
`

const StyledLine2 = styled.div`
  width: 1px;
  height: 80px;
  border-left: 1px solid ${props => props.color == "black" ? props.theme.colors.black : props.theme.colors.white};
  position: fixed;
  top: 0;
  right: 25%;
  z-index: 3
`

const Navbar = () => {
  const {langKey: currentLang, slug} = usePageContext();

  return (
    <header>
      <StyledNav>
        {slug.includes("team") ? <StyledWhiteNavbarPortion /> : null}
        {slug.includes("team") ? null : <StyledLine1 />}
        {slug.includes("team") ? <StyledLine2 color="black"/> : <StyledLine2 />}
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
