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
  const ctstudioDescription = [
    {
      title: "CMS",
      text: "Wordpress"
    },
    {
      title: "E-commerce",
      text: "Woocommerce, Stripe, Paypal"
    },
    {
      title: "Front-End Development",
      text: "HTML, CSS"
    },
    {
      title: "Back-End Development",
      text: "Php"
    },
  ]

  const rubstixDescription = [
    {
      title: "UI/UX Design / Web Design",
      text: "Figma"
    },
    {
      title: "Mobile Prototype",
      text: ""
    },
  ]

  const newcomerworkDescription = [
    {
      title: "Framework",
      text: "Ruby on Rails"
    },
    {
      title: "Front-End Development",
      text: "HTML, CSS, JavaScript"
    },
    {
      title: "API",
      text: "Mapbox, Ajax"
    },
  ]

  return (
    <>
      <SEO title="Work" />
      <Container>
        <StyledWorkPage>
          <PortfolioCard
            reverse={false}
            photo="/images/sparck-ctstudio.jpg"
            link="https://ctstudio.ca/"
            websiteName="ct.studio.ca"
            description={ctstudioDescription} />

          <PortfolioCard
            reverse={true}
            photo="/images/sparck-rubstix.gif"
            link=""
            websiteName="comming soon"
            description={rubstixDescription} />

          <PortfolioCard
            reverse={false}
            photo="/images/sparck-newcomerwork.jpg"
            link="https://newcomerwerk.herokuapp.com/"
            websiteName="newcomerwork.com"
            description={newcomerworkDescription} />
        </StyledWorkPage>
      </Container>
    </>
  );
}

export default WorkPage;
