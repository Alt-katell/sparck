import React from 'react';
import styled from 'styled-components';

import { usePageContext } from '../context/pageContext';

import Container from './UI/Container';

// 215px = height of navbar + margin top of container

const StyledAgencyIntroCard = styled.div`
  margin: 150px auto;
  width: 730px;
  height: 500px;
  position: relative;

  @media (min-device-width : 320px) and (max-device-width : 667px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 270px;
    margin: 50px auto;
  }
`

const StyledSlogan = styled.h1`
  font-family: ${props => props.theme.fonts.baskerville};
  font-size: 75px;
  color: ${props => props.theme.colors.blue};
  font-weight: normal;
  position: absolute;
  top: -30px;
  z-index: 2;

  @media (min-device-width : 320px) and (max-device-width : 667px) {
    position: static;
    font-size: 38px;
    text-align: center;
    margin: 0 auto -65px auto;
  }
`

const StyledPhoto = styled.img`
  width: 340px;
  height: auto;
  position: absolute;
  right: 0;

  @media (min-device-width : 768px) and (max-device-width : 1024px) {
    right: 60px;
  }

  @media (min-device-width : 320px) and (max-device-width : 667px) {
    position: static;
    width: 270px;
  }
`

const StyledText = styled.p`
  width: 340px;
  text-align: justify;
  position: absolute;
  left: 200px;
  bottom: 105px;
  z-index: 2;

  @media (min-device-width : 768px) and (max-device-width : 1024px) {
    bottom: 105px;
  }

  @media (min-device-width : 320px) and (max-device-width : 667px) {
    position: static;
    text-align: center;
    width: 270px;
    margin-top: -30px;
  }
`

const AgencyIntroCard = () => {
  const {langKey: currentLang} = usePageContext();

  return (
    <StyledAgencyIntroCard>
      <StyledSlogan>
        {t.sloganFirst[currentLang]}<br />
        {t.sloganSecond[currentLang]}<br />
        {t.sloganThird[currentLang]}.
      </StyledSlogan>
      <StyledPhoto src="/images/pink-balloun.jpg" alt="Picture by Florian Klauer" />
      <StyledText>{t.text[currentLang]}</StyledText>
    </StyledAgencyIntroCard>
  )
}

export default AgencyIntroCard;

const t = {
  sloganFirst: {
    en: "We are a",
    fr: "Nous sommes"
  },
  sloganSecond: {
    en: "collaborative",
    fr: "une agence web"
  },
  sloganThird: {
    en: "web agency",
    fr: "collaborative"
  },
  text: {
    en: "spärck is an innovative web agency that places humans at the center of the digital experience. We connect talents to make the world wide web a better and more beautiful place.",
    fr: "spärck est une agence web innovante qui place l'humain au centre de l'expérience numérique. Nous connectons les talents pour faire de la toile un lieu plus inspirant et plus beau."
  },
}
