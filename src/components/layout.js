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
  }

  body {
    background: ${props => props.theme.colors.grey};
    margin: 0;
    font-family: ${props => props.theme.fonts.roboto};
  }
`

const Container = styled.div`
  margin: 0 60px;
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

        {path.slug.includes("contact") ? null : <SideNavbar />}

        <Container>
          <main>{children}</main>
        </Container>
      </Theme>
    </>
  )
}

export default Layout
