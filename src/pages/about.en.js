import React, {useState} from 'react';
import styled from 'styled-components';

import AgencyIntroCard from '../components/AgencyIntroCard';
import QuoteCard from '../components/QuoteCard';
import ContactForm from '../components/ContactForm';
import LetsTalk from '../components/LetsTalk';

const StyledAboutPage = styled.div`
  display: flex;
  flex-direction: column;
`

const AboutPage = () => {
  const [contactFormHovered, setContactFormHovered] = useState(false);

  const hoveringHandler = () => {
    setContactFormHovered(true)
  };

  const notHoveringHandler = () => {
    setContactFormHovered(false)
  };

  return (
    <StyledAboutPage>
      <AgencyIntroCard />
      <QuoteCard />
      <ContactForm about="true" inside={hoveringHandler} outside={notHoveringHandler} />
      <LetsTalk out={contactFormHovered} about="true" />
    </StyledAboutPage>
  )
}

export default AboutPage;
