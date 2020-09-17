/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { createGlobalStyle } from 'styled-components';

import { usePageContext } from '../context/pageContext';

import Theme from './Theme';
import Navbar from '../components/navigation/Navbar';

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

const Layout = ({ children }) => {
  const { langKey } = usePageContext();

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Theme>
        <GlobalStyle/>
        <Navbar />
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </Theme>
    </>
  )
}

export default Layout
