import React from 'react';
import styled from 'styled-components';

import SEO from "../components/seo";

import Container from '../components/UI/Container';
import PortfolioCard from '../components/PortfolioCard';

const StyledWorkPage = styled.div`
  display: flex;
  flex-direction: column;
`

const WorkPage = () => {
  return (
    <>
      <SEO title="Work" />
      <Container>
        <StyledWorkPage>
          <PortfolioCard
            reverse={false}
            photo="/images/client-website-1.png"
            link="www.google.com"
            websiteName="First Client" />

          <PortfolioCard
            reverse={true}
            photo="/images/client-website-2.png"
            link="www.google.com"
            websiteName="Second Client" />

          <PortfolioCard
            reverse={false}
            photo="/images/client-website-1.png"
            link="www.google.com"
            websiteName="Third Client" />

          <PortfolioCard
            reverse={true}
            photo="/images/client-website-2.png"
            link="www.google.com"
            websiteName="Fourth Client" />
        </StyledWorkPage>
      </Container>
    </>
  );
}

export default WorkPage;
