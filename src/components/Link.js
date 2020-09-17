import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

import { usePageContext } from '../context/pageContext';

const Link = ({link, ...rest}) => {
  const {langKey: currentLang} = usePageContext();

  if (currentLang === "en") {
    return <GatsbyLink {...rest} to={link} />
  } else {
    return <GatsbyLink {...rest} to={`/${currentLang}${link}`} />
  }
}

export default Link;
