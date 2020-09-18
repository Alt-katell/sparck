/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
// import { useStaticQuery, graphql } from 'gatsby';

import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

import { usePageContext } from '../context/pageContext';

import Theme from './Theme';
import Navbar from '../components/navigation/Navbar';
import SideNavbar from './navigation/SideNavbar';

const GlobalStyle = createGlobalStyle`
  html {
    margin: 0;
    height: 100%;
  }

  body {
    background: ${props => props.theme.colors.grey};
    margin: 0;
    font-family: ${props => props.theme.fonts.roboto};
    height: 100%;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.black};
  }
`

const Container = styled.div`
  margin: 120px 60px 0 60px;
`

const StyledLine1 = styled.div`
  width: 1px;
  height: 100%;
  border-left: 1px solid ${props => props.theme.colors.white};
  position: fixed;
  top: 0;
  left: 25%;
  z-index: -1;
`

const StyledLine2 = styled.div`
  width: 1px;
  height: 100%;
  border-left: 1px solid ${props => props.color == "black" ? props.theme.colors.black : props.theme.colors.white};
  position: fixed;
  top: 0;
  right: 25%;
  z-index: -1;
`

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  const path = usePageContext();

  return (
    <>
      <Theme>
        <GlobalStyle/>

        <Navbar />
        {path.slug.includes("team") ? null : <StyledLine1 />}
        {path.slug.includes("team") ? <StyledLine2 color="black"/> : <StyledLine2 />}

        {path.slug.includes("contact") ? null : <SideNavbar />}

        <Container>
          <main>{children}</main>
        </Container>
      </Theme>
    </>
  )
}

export default Layout
