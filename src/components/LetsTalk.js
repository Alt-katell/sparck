import React from 'react';
import styled from 'styled-components';

const StyledText = styled.p`
  margin: 0;
  font-family: ${props => props.theme.fonts.baskerville};
  font-weight: bold;
  font-size: 75px;
  transform: rotate(-90deg);
  color: ${props => props.theme.colors.blue};
  position: ${props => props.about ? "absolute" : "fixed"};
  bottom: ${props => props.about ? "-1065px" : "calc((100vh - 165px) / 2)"};
  right: ${props => props.out ? "-120px" : "-175px"};
  z-index: 4;

  @media (min-device-width : 768px) and (max-device-width : 1024px) {
    bottom: ${props => props.about ? "-450px" : "calc(((100vh - 100px) / 2) + 20px)"};
  }

  @media (min-device-width : 320px) and (max-device-width : 667px) {
    display: none;
  }
`

const LetsTalk = ({out, about}) => {
  return (
    <StyledText out={out} about={about}>Let's Talk</StyledText>
  );
}

export default LetsTalk;
