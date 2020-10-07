import React, {useState} from 'react';
import styled from 'styled-components';

import SEO from "../components/seo";

import ContactForm from '../components/ContactForm';
import SocialIconsHorizontal from '../components/SocialIconsHorizontal';
import Line from '../components/UI/Line';
import Container from '../components/UI/Container';

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
    <>
      <SEO title="Contact" />
      {contactFormHovered ? <StyledCurve src="/images/sparck-curved-line.png" position="right" /> : <Line position="left" />}
      {contactFormHovered ? <StyledCurve src="/images/sparck-curved-line.png" position="left" /> : <Line position="right" />}

      <ContactForm inside={hoveringHandler} outside={notHoveringHandler} />

      <SocialIconsHorizontal />
    </>
  );
}

export default ContactPage;
