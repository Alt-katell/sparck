import React from 'react';
import styled from 'styled-components';

import ContactPageContent from '../components/ContactPageContent';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBehance } from '@fortawesome/free-brands-svg-icons';

const StyledSocialIcons = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
`

const ContactPage = () => {
  return (
    <div>
      <ContactPageContent />

      <StyledSocialIcons>
        <FontAwesomeIcon icon={faInstagram} style={{marginRight: "16px"}} />
        <FontAwesomeIcon icon={faLinkedin} style={{marginRight: "16px"}} />
        <FontAwesomeIcon icon={faBehance} />
      </StyledSocialIcons>
    </div>
  );
}

export default ContactPage;
