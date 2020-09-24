import React from 'react';
import styled from 'styled-components';

import { usePageContext } from '../context/pageContext';

const StyledSericesPhoto = styled.p`
  margin: 0 auto;
  width: 280px;
  position: relative;

  @media (min-device-width : 320px) and (max-device-width : 667px) {
    width: 250px;
  }
`

const StyledText = styled.p`
  font-family: ${props => props.theme.fonts.baskerville};
  font-weight: bold;
  font-size: 75px;
  transform: rotate(-90deg);
  color: ${props => props.theme.colors.blue};
  margin: 0;
  white-space:nowrap;
  position: absolute;
  top: 162px;
  right: 110px;
  z-index: -1;

  @media (min-device-width : 320px) and (max-device-width : 667px) {
    right: 80px;
  }
`

const StyledPhoto = styled.img`
  width: 280px;
  height: auto;
  display: block;
  right: -15px;
  position: absolute;
  z-index: 1;

  @media (min-device-width : 320px) and (max-device-width : 667px) {
    width: 250px;
    right: -15px;
  }
`

const ServicesPhoto = () => {
  const {langKey: currentLang} = usePageContext();

  return (
    <StyledSericesPhoto>
      <StyledPhoto src="/images/pink-balloun.jpg" alt="Picture by Florian Klauer" />
      <StyledText>{t.weCode[currentLang]}</StyledText>
    </StyledSericesPhoto>
  );
}

export default ServicesPhoto;

const t = {
  weCode: {
    en: "We code",
    fr: "On code"
  },
}
