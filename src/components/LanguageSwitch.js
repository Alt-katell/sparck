import React from 'react';
import styled from 'styled-components';

import { usePageContext } from '../context/pageContext';

import { navigateToPageByLanguage } from '../utils/navigateToPageByLanguage';

const StyledLangSwitch = styled.p`
  font-size: 16px;
  font-weight: 300;
  margin: 0 21px 0 0;
  z-index: 4;

  @media (min-device-width : 768px) and (max-device-width : 1024px) {
    margin: 0 30px 0 0;
  }

  @media (min-device-width : 320px) and (max-device-width : 667px) {
    position: fixed;
    margin-top: 100px;
    font-size: 26px;
  }

  :hover {
    cursor: pointer;
  }
`

const LanguageSwitch = () => {
  const {langKey: currentLang, slug} = usePageContext();

  const languageChangerHandler = (event) => {
    navigateToPageByLanguage(currentLang, event.target.innerHTML.toLowerCase(), slug)
  }

  return (
    <StyledLangSwitch onClick={languageChangerHandler}>{currentLang === "en" ? "FR" : "EN"}</StyledLangSwitch>
  )
}

export default LanguageSwitch;
