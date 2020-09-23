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
import SideNavbar from './navigation/SideNavbar';
import QuoteCard from './QuoteCard';
import ContactForm from './ContactForm';
import LetsTalk from './LetsTalk';

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
  border-left: 1px solid ${props => props.color === "black" ? props.theme.colors.black : props.theme.colors.white};
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

  const [contactFormHovered, setContactFormHovered] = useState(false);
  const hoveringHandler = () => {
    setContactFormHovered(true)
  };
  const notHoveringHandler = () => {
    setContactFormHovered(false)
  };

  let line1;
  if (path.slug.includes("team") || path.slug.includes("contact")) {
    line1 = null;
  } else {
    line1 = <StyledLine1 />;
  }

  let line2;
  if (path.slug.includes("team")) {
    line2 = <StyledLine2 color="black"/>;
  } else if (path.slug.includes("contact")) {
    line2 = null
  } else {
    line2 = <StyledLine2 />;
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
        {line1}
        {line2}

        {sidebar}

        <Container>
          <main>{children}</main>
        </Container>

        {path.slug.includes("about") ? <QuoteCard /> : null}
        {path.slug.includes("about") ? <ContactForm about={true} inside={hoveringHandler} outside={notHoveringHandler} /> : null}
        {path.slug.includes("about") ? <LetsTalk out={contactFormHovered} about={true} /> : null}
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
