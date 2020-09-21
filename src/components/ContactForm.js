import React from 'react';
import styled from 'styled-components';

import { usePageContext } from '../context/pageContext';

const StyledForm = styled.form`
  width: 400px;
  margin: 100px auto;
`

const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledNameGroup = styled.div`
  display: flex;
  justify-content: space-between;

`

const StyledLabel = styled.label`

`

const StyledInput = styled.input`

`

const StyledUnderline = styled.div`

`

const StyledSendButton = styled.button`

`

const ContactForm = () => {
  const {langKey: currentLang} = usePageContext();

  return (
    <StyledForm autocomplete="off">

      <StyledNameGroup>
        <StyledItem>
          <StyledLabel htmlFor="firstName">{t.firstName[currentLang]}</StyledLabel>
          <StyledInput type="text" name="firstName" />
          <StyledUnderline />
        </StyledItem>

        <StyledItem>
          <StyledLabel htmlFor="lastName">{t.lastName[currentLang]}</StyledLabel>
          <StyledInput type="text" name="lastName" />
          <StyledUnderline />
        </StyledItem>
      </StyledNameGroup>


      <StyledItem>
        <StyledLabel htmlFor="email">{t.email[currentLang]}</StyledLabel>
        <StyledInput type="email" name="email" />
        <StyledUnderline />
      </StyledItem>

      <StyledItem>
        <StyledLabel htmlFor="message">{t.message[currentLang]}</StyledLabel>
        <StyledInput type="textarea" name="message" />
        <StyledUnderline />
      </StyledItem>

      <StyledSendButton>Send</StyledSendButton>

    </StyledForm>
  );
}

export default ContactForm;

const t = {
  firstName: {
    en: "First name",
    fr: "Prénom"
  },
  lastName: {
    en: "Last name",
    fr: "Nom"
  },
  email: {
    en: "Email",
    fr: "Courriel"
  },
  message: {
    en: "Message",
    fr: "Message"
  }
}
