import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { usePageContext } from '../../context/pageContext';

import logo from './sparck_logo.png';
import NavigationItem from './NavigationItem';
import LanguageSwitch from '../LanguageSwitch';
import Backdrop from './Backdrop';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const StyledSideDrawer = styled.div`
  position: fixed;
  width: 300px;
  max-width: 85%;
  height: 100%;
  right: 0;
  top: 0;
  z-index: 6;
  background: ${props => props.theme.colors.white};
  padding: 32px;
  box-sizing: border-box;
  transition: transform 0.3s ease-out;
  transform: ${props => props.show ? "translateX(0)" : "translateX(100%)"};
  display: flex;
  flex-direction: column;

  @media (min-width: 668px) {
    display: none;
  }
`

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 30px 10px 0 10px;
  align-items: center;

  @media (min-width: 668px) {
    display: none;
  }
`

const StyledBurgerIcon = styled(FontAwesomeIcon)`
  color: ${props => props.theme.colors.green};
  font-size: 32px;
`

const StyledNavigationGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 0;

  & > * {
    margin-left: 0;
  }

  & a:last-of-type {
    margin-top: 40px;
    margin-bottom: 40px;
  }
`

const StyledLogo = styled.img`
  width: 128px;
  height: auto;
`

const SideDrawer = (props) => {
  const {langKey: currentLang, slug} = usePageContext();

  let aboutActive;
  if (slug.includes("about")) {
    aboutActive = "yes";
  }

  return (
    <div>
      <Backdrop show={props.open ? true : false} clicked={props.closed} />
      <StyledHeader>
        <Link to="/"><StyledLogo src={logo} alt="Spärck Logo" /></Link>
        <StyledBurgerIcon icon={faBars} onClick={props.drawerToggleClicked}/>
        <StyledSideDrawer show={props.open} onClick={props.closed}>
          <FontAwesomeIcon
            icon={faTimes}
            style={{alignSelf: "flex-end", fontSize: "32px"}}
            onClick={props.closed}/>
          <nav>
            <StyledNavigationGroup>
              <NavigationItem link="/about" isactive={aboutActive}>{t.about[currentLang]}</NavigationItem>
              <NavigationItem link="/services">{t.services[currentLang]}</NavigationItem>
              <NavigationItem link="/work">{t.work[currentLang]}</NavigationItem>
              <NavigationItem link="/team">{t.team[currentLang]}</NavigationItem>
              <NavigationItem link="/contact">{t.contact[currentLang]}</NavigationItem>
            </StyledNavigationGroup>
            <div>
              <a href="https://www.instagram.com/sparck.agency/"><FontAwesomeIcon icon={faInstagram} style={{marginRight: "32px", fontSize: "24px"}} /></a>
              <a href="https://www.linkedin.com/company/sparckagency/"><FontAwesomeIcon icon={faLinkedinIn} style={{marginRight: "32px", fontSize: "24px"}} /></a>
            </div>
            <LanguageSwitch />
          </nav>
        </StyledSideDrawer>
      </StyledHeader>
    </div>
  )
}

export default SideDrawer;

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
  team: {
    en: "Team",
    fr: "Équipe"
  },
  contact: {
    en: "Contact",
    fr: "Contact"
  }
}
