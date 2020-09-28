import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { usePageContext } from '../../context/pageContext';

import logo from './sparck_logo.png';
import NavigationItem from './NavigationItem';

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0 0 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 4;

  @media (min-device-width : 320px) and (max-device-width : 667px) {
    display: none;
  }
`

const StyledNavigationGroup = styled.div`
  display: flex;
  margin: 0 55px;
  padding: 0;
  z-index: 4;

  &:first-of-type {
    flex-basis: 30%;
  }

  &:last-of-type {
    justify-content: flex-end;
    flex-basis: 30%;
  }

  @media (min-device-width : 768px) and (max-device-width : 1024px) {
    margin: 0 10px;
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

const Navbar = () => {
  const {langKey: currentLang, slug} = usePageContext();


  let aboutActive;
  if (slug.includes("about")) {
    aboutActive = true;
  }

  return (
    <header>
      <StyledNav>
        {slug.includes("team") ? <StyledWhiteNavbarPortion /> : null}
        <StyledNavigationGroup>
          <NavigationItem link="/about" isactive={aboutActive}>{t.about[currentLang]}</NavigationItem>
          <NavigationItem link="/services">{t.services[currentLang]}</NavigationItem>
        </StyledNavigationGroup>
        <StyledLink to="/"><StyledLogo src={logo} alt="Spärck Logo"/></StyledLink>
        <StyledNavigationGroup>
          <NavigationItem link="/work">{t.work[currentLang]}</NavigationItem>
          <NavigationItem link="/contact">{t.contact[currentLang]}</NavigationItem>
        </StyledNavigationGroup>
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
