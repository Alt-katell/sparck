import React, { useState }  from 'react';
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

const StyledCurve1 = styled.img`
  height: 100%;
  position: fixed;
  top: 0;
  left: 25%;
  z-index: 4;
`

const StyledCurve2 = styled.img`
  height: 100%;
  position: fixed;
  top: 0;
  right: 25%;
  z-index: 4;
`

const StyledSocialIcons = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;

  @media (min-device-width : 768px) and (max-device-width : 1024px) {
    bottom: 280px;
  }
`

const ContactPage = () => {
  const [contactFormHovered, setContactFormHovered] = useState(false);

  const hoveringHandler = () => {
    setContactFormHovered(true)
  }

  const notHoveringHandler = () => {
    setContactFormHovered(false)
  }

  return (
    <div>
      {contactFormHovered ? <StyledCurve1 src="/images/curve.png" /> : <StyledLine1 />}
      {contactFormHovered ? <StyledCurve2 src="/images/curve.png" /> : <StyledLine2 />}

      <LetsTalk out={contactFormHovered} />

      <ContactForm inside={hoveringHandler} outside={notHoveringHandler} />

      <StyledSocialIcons>
        <FontAwesomeIcon icon={faInstagram} style={{marginRight: "16px"}} />
        <FontAwesomeIcon icon={faLinkedin} style={{marginRight: "16px"}} />
        <FontAwesomeIcon icon={faBehance} />
      </StyledSocialIcons>
    </div>
  );
}

export default ContactPage;
