import React from 'react';
import styled from 'styled-components';
import Link from '../Link';

const StyledLi = styled.li`
  @media (min-device-width : 320px) and (max-device-width : 667px) {
    margin-bottom: 16px;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors.black};
  font-size: 16px;
  font-weight: ${props => props.isactive ? "bold" : "300"};

  @media (min-device-width : 320px) and (max-device-width : 667px) {
    font-family: ${props => props.theme.fonts.baskerville};
    font-size: 26px;
  }

  &.active {
    font-weight: bold;
  }
`

const NavigationItem = ({link, children, isactive}) => {
  return (
    <StyledLi>
      <StyledLink
        link={link}
        isactive={isactive}
        activeClassName="active">
        {children}
      </StyledLink>
    </StyledLi>
  )
}

export default NavigationItem;
