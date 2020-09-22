import React from 'react';
import styled from 'styled-components';

import Typing from 'react-typing-animation';

const StyledBackground = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  background: ${props => props.theme.colors.blue};
  overflow: hidden;
`

const StyledText = styled.div`
  width: 600px;
  margin: 10%;

  & > * {
    margin-bottom: 50px;
  }
`

const StyledTextLineWhite = styled.span`
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.baskerville};
  font-weight: bold;
  font-size: 85px;
`

const StyledTextLineBlack = styled.span`
  color: ${props => props.theme.colors.black};
  font-family: ${props => props.theme.fonts.baskerville};
  font-weight: bold;
  font-size: 85px;
`

const HomePage = () => {
  setTimeout(function() {
      window.location='/about'
  }, 4000);

  return (
    <StyledBackground>
      <StyledText>
        <Typing speed={80}>
          <StyledTextLineWhite>We dream.</StyledTextLineWhite><br />
          <StyledTextLineWhite>We code.</StyledTextLineWhite><br />
          <StyledTextLineBlack>We spärck.</StyledTextLineBlack>
        </Typing>
      </StyledText>
    </StyledBackground>
  )
}

export default HomePage;
