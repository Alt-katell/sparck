import React from 'react';
import styled from 'styled-components';
import Link from '../Link';


const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors.black};
  font-size: 16px;
  font-weight: 300;
  line-height: 19px;

  &.active {
    font-weight: bold;
  }
`

const NavigationItem = ({link, children}) => {
  return (
    <li>
      <StyledLink
        link={link}
        activeClassName="active">
        {children}
      </StyledLink>
    </li>
  )
}

export default NavigationItem;
