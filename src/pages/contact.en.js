import React, { useState }  from 'react';
import styled from 'styled-components';

import LetsTalk from '../components/LetsTalk';
import ContactForm from '../components/ContactForm';
import SocialIconsHorizontal from '../components/SocialIconsHorizontal';
import Line from '../components/UI/Line';

const StyledCurve = styled.img`
  height: 100%;
  position: fixed;
  top: 0;
  right: ${props => props.position === "right" ? "25%" : null};
  left: ${props => props.position === "left" ? "25%" : null};
  z-index: -1;
  opacity: 0.7;

  @media (min-device-width : 320px) and (max-device-width : 667px) {
    display: none;
  }
`

const ContactPage = () => {
  const [contactFormHovered, setContactFormHovered] = useState(false);

  const hoveringHandler = () => {
    setContactFormHovered(true)
  };

  const notHoveringHandler = () => {
    setContactFormHovered(false)
  };

  return (
    <div>
      {contactFormHovered ? <StyledCurve src="/images/curve.png" position="right" /> : <Line position="left" />}
      {contactFormHovered ? <StyledCurve src="/images/curve.png" position="left" /> : <Line position="right" />}

      <LetsTalk out={contactFormHovered} />

      <ContactForm inside={hoveringHandler} outside={notHoveringHandler} />

      <SocialIconsHorizontal />
    </div>
  );
}

export default ContactPage;
