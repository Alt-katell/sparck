import React from 'react';
import styled from 'styled-components';

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

const StyledWhiteRectangle = styled.div`
  width: 60px;
  height: 120px;
  background: ${props => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const StyledDot = styled.div`
  height: 7px;
  width: 7px;
  border-radius: 50%;
  background: ${props => props.theme.colors.blue};
`

const SideNavbar = () => {
  return (
    <StyledSideNavbar>
      <StyledSocialIcons>
        <FontAwesomeIcon icon={faInstagram} style={{marginBottom: "16px"}} />
        <FontAwesomeIcon icon={faLinkedin} style={{marginBottom: "16px"}} />
        <FontAwesomeIcon icon={faBehance} />
      </StyledSocialIcons>
      <StyledTeamBlock>
        <p style={{writingMode: "vertical-rl"}}>Team</p>
        <StyledLine />
        <StyledWhiteRectangle><StyledDot style={{marginBottom: "6px"}} /><StyledDot /></StyledWhiteRectangle>
      </StyledTeamBlock>
    </StyledSideNavbar>
  )
}

export default SideNavbar;
