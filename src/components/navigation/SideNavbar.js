import React, { useState } from 'react';
import styled from 'styled-components';
import AnchorLink from '../AnchorLink';

import { usePageContext } from '../../context/pageContext';

import LanguageSwitch from '../LanguageSwitch';
import Link from '../Link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const StyledSideNavbar = styled.div`
  width: 60px;
  position: ${props => props.position === "fixed" ? "fixed" : "absolute"};
  bottom: ${props => props.position === "fixed" ? "0" : null};
  top: ${props => props.position === "fixed" ? null : "194px"};
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;

  @media (min-device-width : 320px) and (max-device-width : 667px) {
    display: none;
  }
`

const StyledSocialIcons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;

  & a:hover {
    color: ${props => props.theme.colors.blue};
  }
`

const StyledTeamBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledLine = styled.div`
  height: 38px;
  width: 1px;
  border-left: 2px solid ${props => props.theme.colors.black};
  margin: 10px 0;
`

const StyledRectangle = styled.div`
  width: 60px;
  height: 120px;
  background: ${props => props.theme.colors[props.color]};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const StyledDot = styled.div`
  height: 7px;
  width: 7px;
  border-radius: 50%;
  background: ${props => props.theme.colors[props.color]};
`

const StyledTeamDrawerOpen = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-right: 250px;
  z-index: 10;
`

const StyledTeamMembers = styled.div`
  display: flex;
  background: ${props => props.theme.colors.white};
  height: 120px;
`

const StyledTeamMemberGroup = styled.div`
  margin: 0 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > * {
    text-transform: uppercase;
    margin: 6px 0;
  }
`

const SideNavbar = ({position}) => {
  const {langKey: currentLang} = usePageContext();

  const [teamDrawerOpen, setTeamDrawerOpen] = useState(false);

  let teamDrawer = (
    <StyledRectangle color="white">
      <StyledDot color="blue" style={{marginBottom: "6px"}} />
      <StyledDot color="blue" />
    </StyledRectangle>
  )

  if (teamDrawerOpen) {
   teamDrawer = (
      <StyledTeamDrawerOpen>
        <StyledRectangle color="blue">
          <StyledDot color="white" style={{marginBottom: "6px"}} />
          <StyledDot color="white" />
        </StyledRectangle>
        <StyledTeamMembers>
          <StyledTeamMemberGroup>
            <AnchorLink link="/team#clemence">Clemence</AnchorLink>
            <AnchorLink link="/team#nour">Nour</AnchorLink>
          </StyledTeamMemberGroup>
          <StyledTeamMemberGroup>
            <AnchorLink link="/team#katell">Katell</AnchorLink>
            <AnchorLink link="/team#vicky">Vicky</AnchorLink>
          </StyledTeamMemberGroup>
        </StyledTeamMembers>
      </StyledTeamDrawerOpen>
    )
  }

  return (
    <StyledSideNavbar position={position} >
      <LanguageSwitch />
      <StyledSocialIcons>
        <a
          href="https://www.instagram.com/sparck.agency/"
          target="_blank"
          rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} style={{marginBottom: "16px"}} />
        </a>
        <a
          href="https://www.linkedin.com/company/sparckagency/"
          target="_blank"
          rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
      </StyledSocialIcons>
      <StyledTeamBlock
        onMouseEnter={() => setTeamDrawerOpen(true)}
        onMouseLeave={() => setTeamDrawerOpen(false)}>
        <Link link="/team" style={{writingMode: "vertical-rl"}}>{t.team[currentLang]}</Link>
        <StyledLine />
        {teamDrawer}
      </StyledTeamBlock>
    </StyledSideNavbar>
  )
}

export default SideNavbar;

const t = {
  team: {
    en: "Team",
    fr: "Équipe"
  },
}
