import React from 'react';
import styled from 'styled-components';

import { usePageContext } from '../context/pageContext';

const StyledAgencyIntroCardBig = styled.div`
  width: 100%;
  margin: 0 auto;
  height: calc(100vh - 150px);
  display: flex;
  align-content: center;
  justify-content: center;
  padding-top: 150px;

  @media (min-device-width : 320px) and (max-device-width : 667px) {
    display: none;
  }
`

const StyledAgencyIntroCardSmall = styled.div`
  display: none;

  @media (min-device-width : 320px) and (max-device-width : 667px) {
    display: flex;
    flex-direction: column;
    align-content: center;
    padding-top: 150px;
  }
`

const StyledPhotoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  height: 100%;


  & img {
    max-width: 800px;
    max-height: 90%;
    margin-left: -85%;

    @media (min-device-width : 768px) and (max-device-width : 1024px) {
      max-height: 70%;
      margin-left: -35%;
      align-self: center;
    }

    @media (min-device-width : 320px) and (max-device-width : 667px) {
      margin: -18% auto -10% auto;
      max-width: 80%;
    }
  }
`

const StyledText = styled.div`
  flex-basis: 50%;
  z-index: 2;

  @media (min-device-width : 768px) and (max-device-width : 1024px) {
    align-self: center;
  }

  @media (min-device-width : 320px) and (max-device-width : 667px) {
    display: flex;
    flex-direction: column;
    align-content: space-between;
  }

  & h1 {
  font-family: ${props => props.theme.fonts.baskerville};
  font-size: 80px;
  color: ${props => props.theme.colors.blue};
  font-weight: normal;
  margin-left: 12%;
  margin-bottom: 0;

    @media (min-device-width : 768px) and (max-device-width : 1024px) {
      font-size: 52px;
      margin-left: 15%;
    }

    @media (min-device-width : 320px) and (max-device-width : 667px) {
      font-size: 38px;
      text-align: center;
      margin: 0;
    }
  }

  & p {
  font-size: 20px;
  margin: 10px 15% 0 40%;

    @media (min-device-width : 768px) and (max-device-width : 1024px) {
      margin: 10px 15% 0 30%;
    }

    @media (min-device-width : 320px) and (max-device-width : 667px) {
      text-align: center;
      margin: 0;
      padding: 0 10%;
    }
  }
`

const AgencyIntroCard = () => {
  const {langKey: currentLang} = usePageContext();

  return (
    <>
      <StyledAgencyIntroCardBig data-sal="slide-up" data-sal-delay="100" data-sal-easing="ease" data-sal-duration="1000">
        <StyledText>
          <h1>
            {t.sloganFirst[currentLang]}<br />
            {t.sloganSecond[currentLang]}<br />
            {t.sloganThird[currentLang]}.
          </h1>
          <p>{t.text[currentLang]}</p>
        </StyledText>
        <StyledPhotoContainer>
          <img src="/images/sparck-pink-balloun.jpg" alt="By Florian Klauer" />
        </StyledPhotoContainer>
      </StyledAgencyIntroCardBig>

      <StyledAgencyIntroCardSmall data-sal="slide-up" data-sal-delay="100" data-sal-easing="ease" data-sal-duration="1000">
        <StyledText>
          <h1>
            {t.sloganFirst[currentLang]}<br />
            {t.sloganSecond[currentLang]}<br />
            {t.sloganThird[currentLang]}.
          </h1>
        </StyledText>
        <StyledPhotoContainer>
          <img src="/images/sparck-pink-balloun.jpg" alt="By Florian Klauer" />
        </StyledPhotoContainer>
        <StyledText>
          <p>{t.text[currentLang]}</p>
        </StyledText>
      </StyledAgencyIntroCardSmall>
    </>
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
