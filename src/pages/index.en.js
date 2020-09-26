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
  position: relative;
`

const StyledText = styled.div`
  width: 600px;
  margin-left: 10%;
  position: absolute;
  top: calc((100vh - 330px) /2);

  @media (min-device-width : 320px) and (max-device-width : 667px) {
    top: calc((100vh - 195px) /2);
  }
`

const StyledTextLineWhite = styled.span`
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.baskerville};
  font-weight: bold;
  font-size: 85px;
  line-height: 1.3;

  @media (min-device-width : 320px) and (max-device-width : 667px) {
    font-size: 50px;
  }
`

const StyledTextLineBlack = styled.span`
  color: ${props => props.theme.colors.black};
  font-family: ${props => props.theme.fonts.baskerville};
  font-weight: bold;
  font-size: 85px;
  line-height: 1.3;

  & span {
    font-family: ${props => props.theme.fonts.overpass};
    line-height: 1.3;
  }

  @media only screen and (min-device-width : 320px) and (max-device-width : 667px) {
    font-size: 50px;
  }
`

const HomePage = () => {
  // setTimeout(function() {
  //     window.location='/about'
  // }, 5000);

  return (
    <StyledBackground>
      <StyledText>
        <Typing speed={90}>
          <StyledTextLineWhite>We dream.</StyledTextLineWhite><br />
          <StyledTextLineWhite>We code.</StyledTextLineWhite><br />
          <StyledTextLineBlack>We <span>spärck</span>.</StyledTextLineBlack>
        </Typing>
      </StyledText>
    </StyledBackground>
  )
}

export default HomePage;
