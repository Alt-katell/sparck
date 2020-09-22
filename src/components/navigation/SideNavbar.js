import React, { useState } from 'react';
import styled from 'styled-components';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBehance } from '@fortawesome/free-brands-svg-icons';

const StyledSideNavbar = styled.div`
  width: 60px;
  position: fixed;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  z-index: 3;
`

const StyledSocialIcons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 120px;
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
  z-index: 3;
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

const SideNavbar = () => {
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
            <AnchorLink to="/team#clemence">Clémence</AnchorLink>
            <AnchorLink to="/team#nour">Nour</AnchorLink>
          </StyledTeamMemberGroup>
          <StyledTeamMemberGroup>
            <AnchorLink to="/team#katell">Katell</AnchorLink>
            <AnchorLink to="/team#vicky">Vicky</AnchorLink>
          </StyledTeamMemberGroup>
        </StyledTeamMembers>
      </StyledTeamDrawerOpen>
    )
  }

  return (
    <StyledSideNavbar>
      <StyledSocialIcons>
        <FontAwesomeIcon icon={faInstagram} style={{marginBottom: "16px"}} />
        <FontAwesomeIcon icon={faLinkedin} style={{marginBottom: "16px"}} />
        <FontAwesomeIcon icon={faBehance} />
      </StyledSocialIcons>
      <StyledTeamBlock
        onMouseEnter={() => setTeamDrawerOpen(true)}
        onMouseLeave={() => setTeamDrawerOpen(false)}>
        <p style={{writingMode: "vertical-rl"}}>Team</p>
        <StyledLine />
        {teamDrawer}
      </StyledTeamBlock>
    </StyledSideNavbar>
  )
}

export default SideNavbar;
