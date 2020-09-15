import React from 'react';
import styled from 'styled-components'

import logo from './sparck_logo.png';
import NavigationItem from './NavigationItem';

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 50px 0;
`

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  margin: 0 20px;
  padding: 0;
`

const StyledLogo = styled.img`
  height: 25px;
  width: auto;
`

const Navbar = () => {
  return (
    <header>
      <StyledNav>
        <StyledUl>
          <NavigationItem link="/">About</NavigationItem>
          <NavigationItem link="">Services</NavigationItem>
          <NavigationItem link="">Work</NavigationItem>
        </StyledUl>
        <StyledLogo src={logo} alt="Spärck Logo"/>
        <StyledUl>
          <NavigationItem link="">Contact</NavigationItem>
          <NavigationItem link="">FR</NavigationItem>
        </StyledUl>
      </StyledNav>
    </header>
  )
}

export default Navbar;
