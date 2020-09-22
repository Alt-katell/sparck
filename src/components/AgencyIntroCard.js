import React from 'react';
import styled from 'styled-components';

import { usePageContext } from '../context/pageContext';

const StyledAgencyIntroCard = styled.div`
  margin: 100px auto;
  width: 730px;
  position: relative;
`

const StyledSlogan = styled.h1`
  font-family: ${props => props.theme.fonts.baskerville};
  font-size: 75px;
  color: ${props => props.theme.colors.blue};
  font-weight: normal;
  position: absolute;
  top: -20px;
`

const StyledPhoto = styled.img`
  width: 270px;
  height: auto;
  position: absolute;
  right: 0;
  z-index: -1;
`

const StyledText = styled.p`
  width: 340px;
  text-align: justify;
  text-justify: inter-word;
  position: absolute;
  left: 200px;
  bottom: -425px;
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
      <StyledText>bla bla bla bla bla bla bla Lorem ipsum dolor sit amet, bla bla bla bla bla bla bla Lorem ipsum dolor sit amet, bla bla bla bla bla bla bla Lorem ipsum dolor sit amet, bla bla bla bla bla bla bla Lorem ipsum dolor sit amet</StyledText>
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
}
