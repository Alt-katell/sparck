/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from 'react';
import { PageContextProvider } from './src/context/pageContext';

export const wrapPageElement = ({ element, props: { pageContext} }) => {
  return <PageContextProvider value={pageContext}>{element}</PageContextProvider>
};
