import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const StyledSocialIcons = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  font-size: 24px;

  & a:hover {
    color: ${props => props.theme.colors.blue};
  }

  @media (min-device-width : 768px) and (max-device-width : 1024px) {
    bottom: 270px;
  }

  @media (min-device-width : 320px) and (max-device-width : 667px) {
    display: none;
  }
`

const SocialIconsHorizontal = () => {
  return (
      <StyledSocialIcons>
        <a
          href="https://www.instagram.com/sparck.agency/"
          target="_blank"
          rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} style={{marginRight: "16px"}} />
        </a>
        <a
          href="https://www.linkedin.com/company/sparckagency/"
          target="_blank"
          rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedinIn} style={{marginRight: "16px"}} />
        </a>
      </StyledSocialIcons>
  );
}

export default SocialIconsHorizontal;
