import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 1200px;
  margin: 140px auto;

  @media (min-device-width : 768px) and (max-device-width : 1024px) {
    width: 700px;
  }

  @media only screen and (min-device-width : 320px) and (max-device-width : 667px) {
    width: 320px;
    margin: 100px auto;
  }
`

const Container = ({children}) => {
  return (
    <StyledContainer>{children}</StyledContainer>
  )
}

export default Container;
