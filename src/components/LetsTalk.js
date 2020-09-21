import React from 'react';
import styled from 'styled-components';

const StyledText = styled.p`
  margin: 0;
  font-family: ${props => props.theme.fonts.baskerville};
  font-weight: bold;
  font-size: 55px;
  text-transform: uppercase;
  transform: rotate(-90deg);
  color: ${props => props.theme.colors.blue};
  position: fixed;
  bottom: calc((100vh - 92px) / 2);
  right: ${props => props.out ? "-120px" : "-180px"};
  z-index: 4;
`

const LetsTalk = ({out}) => {
  return (
    <StyledText out={out}>Let's talk</StyledText>
  );
}

export default LetsTalk;
