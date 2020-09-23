import React from 'react';
import styled from 'styled-components';

import AgencyIntroCard from '../components/AgencyIntroCard';

const StyledAboutPage = styled.div`
  display: flex;
  flex-direction: column;
`

const AboutPage = () => {
  return (
    <StyledAboutPage>
      <AgencyIntroCard />
    </StyledAboutPage>
  )
}

export default AboutPage;
