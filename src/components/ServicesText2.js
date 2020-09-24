import React from 'react';
import styled from 'styled-components';

import { usePageContext } from '../context/pageContext';

const StyledServicesText = styled.div`
  margin: 0 auto 100px auto;
  width: 450px;

  @media (min-device-width : 768px) and (max-device-width : 1024px) {
    width: 350px;
  }

  @media (min-device-width : 320px) and (max-device-width : 667px) {
    width: 270px;
  }
`

const StyledSection = styled.div`
  margin-bottom: 45px;
`

const StyledTitle = styled.h3`
  font-family: ${props => props.theme.fonts.baskerville};
  color: ${props => props.theme.colors.blue};
  font-weight: normal;
  margin-bottom: 14px;
  text-align: center;
  font-size: 32px;

  @media (min-device-width : 320px) and (max-device-width : 667px) {
    font-size: 24px;
  }
`

const StyledItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & p {
    white-space: nowrap;
  }

  @media (min-device-width : 320px) and (max-device-width : 667px) {
    flex-wrap: wrap;
  }
`

const StyledDots = styled.div`
  display: flex;
  margin: 4px;

  & div {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: ${props => props.theme.colors.black};
    margin: 0 2px;
  }
`

const ServicesPhoto = () => {
  const {langKey: currentLang} = usePageContext();

  return (
    <StyledServicesText>
      <StyledSection>
        <StyledTitle>{t.webDevelopment.title[currentLang]}</StyledTitle>
        <StyledItems>
          <p>HTML</p>
          <StyledDots>
            <div />
            <div />
          </StyledDots>
          <p>CSS</p>
          <StyledDots>
            <div />
            <div />
          </StyledDots>
          <p>JavaScript</p>
          <StyledDots>
            <div />
            <div />
          </StyledDots>
          <p>React</p>
          <StyledDots>
            <div />
            <div />
          </StyledDots>
          <p>Ruby on Rails</p>
          <StyledDots>
            <div />
            <div />
          </StyledDots>
          <p>CMS</p>
        </StyledItems>
      </StyledSection>

      <StyledSection>
        <StyledTitle>{t.webDesign.title[currentLang]}</StyledTitle>
        <StyledItems>
          <p>UI</p>
          <StyledDots>
            <div />
            <div />
          </StyledDots>
          <p>UX</p>
          <StyledDots>
            <div />
            <div />
          </StyledDots>
          <p>Responsive</p>
        </StyledItems>
      </StyledSection>
    </StyledServicesText>
  );
}

export default ServicesPhoto;

const t = {
  webDevelopment: {
    title: {
      en: "Web Development",
      fr: "Développement Web"
    }
  },
  webDesign: {
    title: {
      en: "Web Design",
      fr: "Design Web"
    },
  }
}
