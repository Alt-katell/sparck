import React from 'react';
import styled from 'styled-components';

import { usePageContext } from '../context/pageContext';

const StyledLetsTalk = styled.p`
  display: none;

  @media (min-device-width : 320px) and (max-device-width : 667px) {
    display: block;
    text-align: center;
    margin-top: ${props => props.about ? "100px" : "0"};
    font-family: ${props => props.theme.fonts.baskerville};
    font-weight: bold;
    font-size: 50px;
    color: ${props => props.theme.colors.blue};
  }
`

const StyledForm = styled.form`
  width: 350px;
  margin: ${props => props.about ? "100px" : "0"} auto 30px auto;

  @media (min-device-width : 768px) and (max-device-width : 1024px) {
    margin: ${props => props.about ? "100px" : "300px"} auto 30px auto;
  }

  @media (min-device-width : 320px) and (max-device-width : 667px) {
    margin: 0 auto 50px auto;
  }
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

const ContactForm = ({inside, outside, about}) => {
  const {langKey: currentLang} = usePageContext();

  return (
    <div>
      <StyledLetsTalk about={about}>Let's Talk</StyledLetsTalk>
      <StyledForm
        autoComplete="off"
        onMouseEnter={inside}
        onMouseLeave={outside}
        about={about}>

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

        <StyledSendButton type="submit">{t.send[currentLang]}</StyledSendButton>

      </StyledForm>
    </div>
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
  },
  send: {
    en: "Send",
    fr: "Envoyer"
  },
}
