import React from 'react';
import styled from 'styled-components';

import { usePageContext } from '../context/pageContext';

const StyledText = styled.div`
  width: 500px;
  margin: 260px auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  & h2 {
    font-size: 80px;
    font-family: ${props => props.theme.fonts.baskerville};
    color: ${props => props.theme.colors.blue};
    margin: 12px;
  }

  & p {
    margin: 6px;
  }
`


const MessageSent = () => {
  const {langKey: currentLang} = usePageContext();

  return (
    <StyledText>
      <h2>{t.thankYou[currentLang]}</h2>
      <p>{t.firstLine[currentLang]}</p>
      <p>{t.secondLine[currentLang]}</p>
    </StyledText>
  );
}

export default MessageSent;

const t = {
  thankYou: {
    en: "Thank you",
    fr: "Merci"
  },
  firstLine: {
    en: "for your message.",
    fr: "pour votre message."
  },
  secondLine: {
    en: "Let's create magic together.",
    fr: "Créons de la magie ensemble."
  },
}
