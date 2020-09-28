import React from 'react';
import styled from 'styled-components';

const StyledLine = styled.div`
  width: 1px;
  height: 100%;
  border-left: 1px solid ${props => props.color === "black" ? props.theme.colors.black : props.theme.colors.white};
  position: fixed;
  top: 0;
  right: ${props => props.position === "right" ? "25%" : null};
  left: ${props => props.position === "left" ? "25%" : null};
  z-index: -1;
  opacity: 0.7;

  @media (min-device-width : 320px) and (max-device-width : 667px) {
    display: none;
  }
`

const Line = ({color, position}) => {
  return (
    <StyledLine color={color} position={position} />
  )
}

export default Line;
