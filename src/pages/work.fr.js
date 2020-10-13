import React from 'react';
import styled from 'styled-components';

import SEO from "../components/seo";

import PortfolioCard from '../components/PortfolioCard';

import rubstixGif from '../../static/images/sparck-rubstix.gif';

const StyledWorkPage = styled.div`
  display: flex;
  flex-direction: column;
  margin: 150px 100px 0 100px;

  @media (min-device-width : 320px) and (max-device-width : 667px) {
    display: block;
    margin: 150px 0 100px 0;
  }
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
      title: "Développement Front-End",
      text: "HTML, CSS"
    },
    {
      title: "Développement Back-End",
      text: "Php"
    },
  ]

  const rubstixDescription = [
    {
      title: "Design UI/UX / Design Web",
      text: "Figma"
    },
    {
      title: "Prototype Mobile",
      text: ""
    },
  ]

  const newcomerworkDescription = [
    {
      title: "Framework",
      text: "Ruby on Rails"
    },
    {
      title: "Développement Front-End",
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
      <StyledWorkPage>
        <PortfolioCard
          reverse={false}
          photo="/images/sparck-ctstudio.jpg"
          link="https://ctstudio.ca/"
          websiteName="ct.studio.ca"
          description={ctstudioDescription} />

        <PortfolioCard
          reverse={true}
          photo={rubstixGif}
          link=""
          websiteName="coming soon"
          description={rubstixDescription} />

        <PortfolioCard
          reverse={false}
          photo="/images/sparck-newcomerwork.jpg"
          link="https://newcomerwerk.herokuapp.com/"
          websiteName="newcomerwork.com"
          description={newcomerworkDescription} />
      </StyledWorkPage>
    </>
  );
}

export default WorkPage;
