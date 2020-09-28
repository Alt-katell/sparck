/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from 'react';
// import { useStaticQuery, graphql } from 'gatsby';

import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

import { usePageContext } from '../context/pageContext';

import Theme from './Theme';
import Navbar from '../components/navigation/Navbar';
import SideDrawer from '../components/navigation/SideDrawer';
import SideNavbar from './navigation/SideNavbar';
import QuoteCard from './QuoteCard';
import ContactForm from './ContactForm';
import LetsTalk from './LetsTalk';
import Line from './UI/Line';

const GlobalStyle = createGlobalStyle`
  html {
    margin: 0;
    height: 100%;
  }

  body {
    background: ${props => props.theme.colors.grey};
    margin: 0;
    font-family: ${props => props.theme.fonts.roboto};
    font-weight: 300;
    height: 100%;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.black};
  }
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

  const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);
  const sideDrawerClosedHandler = () => {
    setSideDrawerIsVisible(false);
  };
  const sideDrawerToggleHandler = () => {
    setSideDrawerIsVisible(!sideDrawerIsVisible);
  };

  let lineLeft;
  if (path.slug.includes("team") || path.slug.includes("contact")) {
    lineLeft = null;
  } else {
    lineLeft = <Line position="left" />;
  }

  let lineRight;
  if (path.slug.includes("team")) {
    lineRight = <Line color="black" position="right" />;
  } else if (path.slug.includes("contact")) {
    lineRight = null
  } else {
    lineRight = <Line position="right" />;
  }

  let sidebar;
  if (path.slug.includes("about")) {
    sidebar = <SideNavbar position="sticky" />;
  } else if (path.slug.includes("contact")) {
    sidebar = null;
  } else {
    sidebar = <SideNavbar position="fixed" />
  }

  let content;
  if (path.slug.includes("about") || path.slug.includes("services") || path.slug.includes("work") || path.slug.includes( "contact") || path.slug.includes("team")) {
    content = (
      <div>
        <Navbar />
        <SideDrawer
          open={sideDrawerIsVisible}
          closed={sideDrawerClosedHandler}
          drawerToggleClicked={sideDrawerToggleHandler} />
        {lineLeft}
        {lineRight}

        {sidebar}

        <main>
          {children}
        </main>
      </div>
    );
  } else {
    content = [children]
  }

  return (
    <>
      <Theme>
        <GlobalStyle/>
        {content}
      </Theme>
    </>
  )
}

export default Layout
