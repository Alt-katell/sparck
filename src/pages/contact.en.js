import React from 'react';
import styled from 'styled-components';

import LetsTalk from '../components/LetsTalk';
import ContactForm from '../components/ContactForm';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBehance } from '@fortawesome/free-brands-svg-icons';

const StyledLine1 = styled.div`
  width: 1px;
  height: 100%;
  border-left: 1px solid ${props => props.theme.colors.white};
  position: fixed;
  top: 0;
  left: 25%;
  z-index: 4;
`

const StyledLine2 = styled.div`
  width: 1px;
  height: 100%;
  border-left: 1px solid ${props =>props.theme.colors.white};
  position: fixed;
  top: 0;
  right: 25%;
  z-index: 4;
`

const StyledSocialIcons = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
`

const ContactPage = () => {
  return (
    <div>
      <StyledLine1 />
      <StyledLine2 />

      <LetsTalk />

      <ContactForm />

      <StyledSocialIcons>
        <FontAwesomeIcon icon={faInstagram} style={{marginRight: "16px"}} />
        <FontAwesomeIcon icon={faLinkedin} style={{marginRight: "16px"}} />
        <FontAwesomeIcon icon={faBehance} />
      </StyledSocialIcons>

    </div>
  );
}

export default ContactPage;
