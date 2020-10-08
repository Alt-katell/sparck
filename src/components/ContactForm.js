import React, {useState} from 'react';
import styled from 'styled-components';

import { usePageContext } from '../context/pageContext';

import LetsTalk from './LetsTalk';

const StyledContactForm = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const StyledEmpty = styled.div`
  width: 10%;

  @media (min-device-width : 320px) and (max-device-width : 667px) {
    display: none;
  }
`

const StyledText = styled.div`
  margin-right: ${props => props.out ? "-6%" : "null"};
  margin-left: -6%;

  @media (min-device-width : 768px) and (max-device-width : 1024px) {
    margin-left: 2%;
  }

  @media (min-device-width : 320px) and (max-device-width : 667px) {
    margin: 0 auto;
  }
`

const StyledLetsTalk = styled.p`
  display: none;

  @media (min-device-width : 320px) and (max-device-width : 667px) {
    display: block;
    text-align: center;
    margin-top: 100px;
    font-family: ${props => props.theme.fonts.baskerville};
    font-weight: bold;
    font-size: 50px;
    color: ${props => props.theme.colors.blue};
  }
`

const StyledEmailText = styled.p`
  margin: ${props => props.about ? "180px" : "150px"} auto 50px auto;
  width: 350px;
  text-align: center;

  & a {
    font-family: ${props => props.theme.fonts.baskerville};
    color: ${props => props.theme.colors.blue};
    font-size: 18px;
    font-weight: bold;
    display: inline-block;
    margin: 10px 0;

    &:hover{
      text-decoration: underline;
    }
  }

  @media (min-device-width : 320px) and (max-device-width : 667px) {
    margin-top: 0;
    width: 320px;
    text-align: center;
  }
`

const StyledForm = styled.form`
  max-width: 550px;
  margin: 0 auto 100px auto;

  @media (min-device-width : 320px) and (max-device-width : 667px) {
    width: 320px;
    margin: 0 auto 70px auto;
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
  border-radius: 0;
  -webkit-border-radius: 0;
  -webkit-appearance: none;
`

const StyledTextarea = styled.textarea`
  border: none;
  margin-bottom: 9px;
  font-family: ${props => props.theme.fonts.roboto};
  font-weight: 300;
  font-size: 12px;
  border-radius: 0;
  -webkit-border-radius: 0;
  -webkit-appearance: none;
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

const ContactForm = ({about}) => {
  const {langKey: currentLang} = usePageContext();

  const [contactFormHovered, setContactFormHovered] = useState(false);

  const hoveringHandler = () => {
    setContactFormHovered(true)
  };

  const notHoveringHandler = () => {
    setContactFormHovered(false)
  };

  return (
    <StyledContactForm>
      <StyledEmpty></StyledEmpty>
      <StyledText out={contactFormHovered}>
        <StyledLetsTalk>Let's Talk</StyledLetsTalk>
        <StyledEmailText>
          {t.tellUs[currentLang]}<br/>
          <a href="mailto:hello@sparck.ca" target="_blank" rel="noopener noreferrer">hello@sparck.ca</a><br/>
          {t.orUseForm[currentLang]}
        </StyledEmailText>
        <StyledForm
          autoComplete="off"
          onMouseEnter={hoveringHandler}
          onMouseLeave={notHoveringHandler}
          inside={hoveringHandler}
          outside={notHoveringHandler}
          about={about}
          name="contact"
          method="POST"
          data-netlify="true"
          action="/thank-you" >
          <input type="hidden" name="form-name" value="contact" />

          <StyledNameGroup>
            <StyledItem>
              <StyledLabel>{t.firstName[currentLang]}</StyledLabel>
              <StyledInput type="text" name="firstName" />
              <StyledUnderline />
            </StyledItem>

            <StyledItem>
              <StyledLabel>{t.lastName[currentLang]}</StyledLabel>
              <StyledInput type="text" name="lastName" />
              <StyledUnderline />
            </StyledItem>
          </StyledNameGroup>


          <StyledItem>
            <StyledLabel>{t.email[currentLang]}</StyledLabel>
            <StyledInput type="email" name="email" />
            <StyledUnderline />
          </StyledItem>

          <StyledItem>
            <StyledLabel>{t.message[currentLang]}</StyledLabel>
            <StyledTextarea name="message" rows="7"/>
            <StyledUnderline />
          </StyledItem>

          <StyledSendButton type="submit">{t.send[currentLang]}</StyledSendButton>

        </StyledForm>
      </StyledText>

      <LetsTalk out={contactFormHovered} />
    </StyledContactForm>
  );
}

export default ContactForm;

const t = {
  tellUs: {
    en: "Tell us what you have in mind at",
    fr: "Parlez-nous de votre idée à"
  },
  orUseForm: {
    en: "or use the form below.",
    fr: "ou remplissez le formulaire ci-dessous."
  },
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
