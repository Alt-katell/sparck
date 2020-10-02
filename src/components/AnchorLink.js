import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { AnchorLink as GatsbyAnchorLink } from 'gatsby-plugin-anchor-links';

import { usePageContext } from '../context/pageContext';

const AnchorLink = ({link, ...rest}) => {
  const {langKey: currentLang} = usePageContext();

  if (currentLang === "en") {
    return <GatsbyAnchorLink {...rest} to={link} />
  } else {
    return <GatsbyAnchorLink {...rest} to={`/${currentLang}${link}`} />
  }
}

export default AnchorLink;
