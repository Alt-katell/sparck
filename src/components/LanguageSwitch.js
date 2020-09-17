import React from 'react';
import styled from 'styled-components';

import { usePageContext } from '../context/pageContext';

import { navigateToPageByLanguage } from '../utils/navigateToPageByLanguage';

const StyledLi = styled.li`
  font-size: 16px;
  font-weight: 300;
  line-height: 19px;

  :hover {
    cursor: pointer;
  }
`

const LanguageSwitch = () => {
  const { langKey: currentLang, slug } = usePageContext()
  console.log(currentLang, slug)

  const languageChangerHandler = (event) => {
    navigateToPageByLanguage(currentLang, event.target.innerHTML.toLowerCase(), slug)
  }

  return (
    <StyledLi onClick={languageChangerHandler}>FR</StyledLi>
  )
}

export default LanguageSwitch;
