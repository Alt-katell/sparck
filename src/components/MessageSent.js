import React from 'react';
import styled from 'styled-components';

import { usePageContext } from '../context/pageContext';

const StyledText = styled.div`
  width: 500px;
  margin: 260px auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  & h1 {
    font-size: 80px;
    font-family: ${props => props.theme.fonts.baskerville};
    color: ${props => props.theme.colors.blue};
    margin: 12px;

    @media (min-device-width : 320px) and (max-device-width : 667px) {
      text-align: center;
    }
  }

  & p {
    margin: 6px;
  }

  @media (min-device-width : 320px) and (max-device-width : 667px) {
    width: 300px;
    margin: 150px auto;
  }
`


const MessageSent = () => {
  const {langKey: currentLang} = usePageContext();

  return (
    <StyledText>
      <h1>{t.thankYou[currentLang]}</h1>
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
