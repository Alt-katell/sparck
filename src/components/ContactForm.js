import React from 'react';
import styled from 'styled-components';

import { usePageContext } from '../context/pageContext';

const StyledForm = styled.form`
  width: 350px;
  margin: 0 auto;
`

const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 28px;
`

const StyledNameGroup = styled.div`
  display: flex;
  justify-content: space-between;

  & > * {
    width: 40%;
  }
`

const StyledLabel = styled.label`
  margin-bottom: 7px;
`

const StyledInput = styled.input`
  border: none;
  height: 25px;
  margin-bottom: 9px;
  font-family: ${props => props.theme.fonts.roboto};
  font-weight: 300;
  font-size: 12px;
`

const StyledTextarea = styled.textarea`
  border: none;
  margin-bottom: 9px;
  font-family: ${props => props.theme.fonts.roboto};
  font-weight: 300;
  font-size: 12px;
`

const StyledUnderline = styled.div`
  width: 100%;
  border-bottom: 2px solid ${props => props.theme.colors.white};
`

const StyledSendButton = styled.button`
  width: 100%;
  height: 35px;
  background: ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.white};
  border: none;
  font-family: ${props => props.theme.fonts.roboto};
  font-weight: 300;
  cursor: pointer;

  &:hover {
    font-weight: 700;
  }
`

const ContactForm = ({inside, outside}) => {
  const {langKey: currentLang} = usePageContext();

  return (
    <StyledForm autoComplete="off" onMouseEnter={inside} onMouseLeave={outside}>

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
        <StyledTextarea name="message" rows="7"/>
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
