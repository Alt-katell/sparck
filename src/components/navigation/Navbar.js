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
  z-index: 6;

  @media (min-device-width : 320px) and (max-device-width : 667px) {
    display: none;
  }
`

const StyledNavigationGroup = styled.div`
  display: flex;
  margin: 0 55px;
  padding: 0;

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

const StyledLogo = styled.img`
  height: 40px;
  width: auto;
`

const Navbar = () => {
  const {langKey: currentLang, slug} = usePageContext();


  let aboutActive;
  if (slug.includes("about")) {
    aboutActive = "yes";
  }

  return (
    <header>
      <StyledNav>
        <StyledNavigationGroup>
          <NavigationItem link="/about" isactive={aboutActive}>{t.about[currentLang]}</NavigationItem>
          <NavigationItem link="/services">{t.services[currentLang]}</NavigationItem>
        </StyledNavigationGroup>
        <Link to="/"><StyledLogo src={logo} alt="Spärck Logo"/></Link>
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
