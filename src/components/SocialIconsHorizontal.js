import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBehance } from '@fortawesome/free-brands-svg-icons';

const StyledSocialIcons = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;

  @media (min-device-width : 768px) and (max-device-width : 1024px) {
    bottom: 280px;
  }
`

const SocialIconsHorizontal = () => {
  return (
      <StyledSocialIcons>
        <FontAwesomeIcon icon={faInstagram} style={{marginRight: "16px"}} />
        <FontAwesomeIcon icon={faLinkedin} style={{marginRight: "16px"}} />
        <FontAwesomeIcon icon={faBehance} />
      </StyledSocialIcons>
  );
}

export default SocialIconsHorizontal;
