import React from 'react';
import styled from 'styled-components';

import SEO from "../components/seo";

import AgencyIntroCard from '../components/AgencyIntroCard';
import QuoteCard from '../components/QuoteCard';
import ContactForm from '../components/ContactForm';

const StyledAboutPage = styled.div`
  display: flex;
  flex-direction: column;
`

const AboutPage = () => {
  return (
    <>
      <SEO title="À propos" />
      <StyledAboutPage>
        <AgencyIntroCard />
        <QuoteCard />
        <ContactForm about="true" />
      </StyledAboutPage>
    </>
  )
}

export default AboutPage;
