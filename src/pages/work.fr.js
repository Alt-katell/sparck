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
            photo="/images/sparck-ctstudio.jpg"
            link="https://ctstudio.ca/"
            websiteName="ct.studio" />

          <PortfolioCard
            reverse={true}
            photo="/images/sparck-rubstix.gif"
            link=""
            websiteName="Rubstix" />

          <PortfolioCard
            reverse={false}
            photo="/images/sparck-newcomerwork.jpg"
            link="https://newcomerwerk.herokuapp.com/"
            websiteName="NewComer Work" />
        </StyledWorkPage>
      </Container>
    </>
  );
}

export default WorkPage;
