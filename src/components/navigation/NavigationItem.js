import React from 'react';
import styled from 'styled-components';
import Link from '../Link';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors.black};
  font-size: 16px;
  font-weight: ${props => props.isactive === "yes" ? "bold" : "300"};
  margin: 0 15px;

  @media (min-device-width : 768px) and (max-device-width : 1024px) {
    margin: 0 7px;
  }

  @media (min-device-width : 320px) and (max-device-width : 667px) {
    font-family: ${props => props.theme.fonts.baskerville};
    font-size: 26px;
    margin-bottom: 16px;
  }

  &.active {
    font-weight: bold;
  }
`

const NavigationItem = ({link, children, isactive}) => {
  return (
    <StyledLink
      link={link}
      isactive={isactive}
      activeClassName="active">
      {children}
    </StyledLink>
  )
}

export default NavigationItem;
