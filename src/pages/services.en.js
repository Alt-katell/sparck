import React from 'react';
import styled from 'styled-components';

import ServicesPhoto from '../components/ServicesPhoto';
import ServicesText1 from '../components/ServicesText1';

const StyledServicePage = styled.div`
  display: flex;
  flex-direction: column;
`

const ServicePage = () => {
  return (
    <StyledServicePage>
      <ServicesPhoto />
      <ServicesText1 />
    </StyledServicePage>
  );
}

export default ServicePage;
