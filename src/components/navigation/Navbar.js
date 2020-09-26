import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { usePageContext } from '../../context/pageContext';

import logo from './sparck_logo.png';
import NavigationItem from './NavigationItem';
import LanguageSwitch from '../LanguageSwitch';


const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0 0 0;
  position: fixed;
  top: 0;
  width: 100%;
  background: ${props => props.theme.colors.grey};
  z-index: 4;

  @media (min-device-width : 320px) and (max-device-width : 667px) {
    display: none;
  }
`

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  margin: 0 45px;
  padding: 0;
  width: 50%;
  z-index: 4;

  @media (min-device-width : 768px) and (max-device-width : 1024px) {
    margin: 0 10px;
  }

  & > * {
    margin: 0 15px;

    @media (min-device-width : 768px) and (max-device-width : 1024px) {
      margin: 0 7px;
    }
  }

  &:first-of-type {
    flex-basis: 30%;
  }

  &:last-of-type {
    justify-content: flex-end;
    flex-basis: 20%;
  }
`

const StyledLink = styled(Link)`
  z-index: 4;
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
  height: 74px;
  min-width: 850px;
  background: ${props => props.theme.colors.white};
  z-index: 2;

  @media (min-device-width : 320px) and (max-device-width : 667px) {
    display: none;
  }
`

const StyledLine1 = styled.div`
  width: 1px;
  height: 74px;
  border-left: 1px solid ${props => props.theme.colors.white};
  position: fixed;
  top: 0;
  left: 25%;
  opacity: 0.7;

  @media (min-device-width : 320px) and (max-device-width : 667px) {
    display: none;
  }
`

const StyledLine2 = styled.div`
  width: 1px;
  height: 74px;
  border-left: 1px solid ${props => props.color === "black" ? props.theme.colors.black : props.theme.colors.white};
  position: fixed;
  top: 0;
  right: 25%;
  z-index: 3;
  opacity: 0.7;

  @media (min-device-width : 320px) and (max-device-width : 667px) {
    display: none;
  }
`

const Navbar = () => {
  const {langKey: currentLang, slug} = usePageContext();


  let aboutActive;
  if (slug.includes("about")) {
    aboutActive = true;
  }

  let line1;
  if (slug.includes("team") || slug.includes("contact")) {
    line1 = null;
  } else {
    line1 = <StyledLine1 />;
  }

  let line2;
  if (slug.includes("team")) {
    line2 = <StyledLine2 color="black"/>;
  } else if (slug.includes("contact")) {
    line2 = null
  } else {
    line2 = <StyledLine2 />;
  }

  return (
    <header>
      <StyledNav>
        {slug.includes("team") ? <StyledWhiteNavbarPortion /> : null}
        {line1}
        {line2}
        <StyledUl>
          <NavigationItem link="/about" isActive={aboutActive}>{t.about[currentLang]}</NavigationItem>
          <NavigationItem link="/services">{t.services[currentLang]}</NavigationItem>
          <NavigationItem link="/work">{t.work[currentLang]}</NavigationItem>
        </StyledUl>
        <StyledLink to="/"><StyledLogo src={logo} alt="Spärck Logo"/></StyledLink>
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
