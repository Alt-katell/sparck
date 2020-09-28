import React from 'react';
import styled from 'styled-components';

import Container from '../components/UI/Container';
import ServicesPhoto from '../components/ServicesPhoto';
import ServicesText1 from '../components/ServicesText1';
import ServicesText2 from '../components/ServicesText2';

const StyledServicePage = styled.div`
  display: flex;
  flex-direction: column;
`

const ServicePage = () => {
  return (
    <Container>
      <StyledServicePage>
        <ServicesPhoto />
        <ServicesText1 />
        <ServicesText2 />
      </StyledServicePage>
    </Container>
  );
}

export default ServicePage;
