import React from 'react';
import styled from 'styled-components';

import PortfolioCard from '../components/PortfolioCard';

const StyledWorkPage = styled.div`
  display: flex;
  flex-direction: column;
`

const WorkPage = () => {
  return (
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
  );
}

export default WorkPage;
