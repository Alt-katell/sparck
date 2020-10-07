import React from 'react';
import styled from 'styled-components';

const StyledText = styled.p`
  margin: 0 ${props => props.out ? "0%" : "-6%"} 0 0;
  align-self: center;
  font-family: ${props => props.theme.fonts.baskerville};
  font-weight: bold;
  font-size: 75px;
  width: 10%;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  color: ${props => props.theme.colors.blue};
  z-index: 4;

  @media (min-device-width : 768px) and (max-device-width : 1024px) {
    margin: 0 ${props => props.out ? "7%" : "1%"} 0 0;
  }

  @media (min-device-width : 320px) and (max-device-width : 667px) {
    display: none;
  }
`

const LetsTalk = ({out}) => {
  return (
    <StyledText out={out}>Let's Talk</StyledText>
  );
}

export default LetsTalk;
