import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledLi = styled.li`
  @media (max-width: 1024px) {
    margin-bottom: 32px;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 16px;
  font-weight: 300;
  line-height: 19px;

  &.active {
    font-weight: bold;
  }
`

const NavigationItem = ({link, children, clicked}) => {
  return (
    <StyledLi>
      <StyledLink
        to={link}
        activeClassName="active"
        onClick={clicked}>
        {children}
      </StyledLink>
    </StyledLi>
  )
}

export default NavigationItem;
