import React from 'react';
import styled from 'styled-components';

import SEO from "../components/seo";

const StyledText = styled.div`
  width: 500px;
  margin: 260px auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  & h1 {
    font-size: 80px;
    font-family: ${props => props.theme.fonts.baskerville};
    color: ${props => props.theme.colors.blue};
    margin: 12px;
  }

  & p {
    margin: 6px;
  }

  @media (min-device-width : 320px) and (max-device-width : 667px) {
    width: 300px;
    margin: 150px auto;
  }
`

const Styled404Error = styled.p`
  color: ${props => props.theme.colors.white};
  text-align: center;
  position: relative;
  bottom: 100px;

  @media (min-device-width : 320px) and (max-device-width : 667px) {
    width: 200px;
    margin: 0 auto;
  }
`

const NotFoundPage = () => (
  <div>
    <SEO title="404: Not found" />
    <StyledText>
      <h1>Oops!</h1>
      <p>There is nothing here.</p>
      <p>Il n'y a rien ici.</p>
    </StyledText>

    <Styled404Error>404 error - 404 error - 404 error - 404 error - 404 error</Styled404Error>
  </div>
)

export default NotFoundPage;
