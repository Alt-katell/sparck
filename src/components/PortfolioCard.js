import React from 'react';
import styled from 'styled-components';

import { usePageContext } from '../context/pageContext';

const StyledCard = styled.div`
  width: 720px;
  height: 450px;
  margin: 20px 40px 100px 40px;
  position: relative;
  align-self: ${props => props.reverse ? "flex-end" : "null"};
  @media (min-device-width : 768px) and (max-device-width : 1024px) {
    width: 550px;
    height: 335px;
  }
  @media (min-device-width : 320px) and (max-device-width : 667px) {
    width: 320px;
    height: 250px;
    margin: 20px auto 80px auto;
  }
`

const StyledPhoto = styled.img`
  width: 720px;
  height: auto;
  position: absolute;
  border: 5px solid ${props => props.theme.colors.white};
  left: ${props => props.reverse ? "null" : "20px"};
  right: ${props => props.reverse ? "20px" : "null"};
  @media (min-device-width : 768px) and (max-device-width : 1024px) {
    width: 450px;
  }
  @media (min-device-width : 320px) and (max-device-width : 667px) {
    width: 280px;
  }
`
const StyledA = styled.a`
  position: absolute;
  bottom: -10px;
  right: ${props => props.reverse ? "null" : "-60px"};
  left: ${props => props.reverse ? "-60px" : "null"};
  font-weight: bold;
  color: ${props => props.theme.colors.blue};
  font-size: 28px;
  &:hover {
    color: ${props => props.theme.colors.black};
  }
  @media (min-device-width : 320px) and (max-device-width : 667px) {
    right: ${props => props.reverse ? "null" : "20px"};
    left: ${props => props.reverse ? "20px" : "null"};
    bottom: 43px;
    font-size: 24px;
  }
`

const PortfolioCard = ({reverse, photo, link, websiteName}) => {
  const {langKey: currentLang} = usePageContext();

  let clientLink;
  if (link === "") {
    clientLink = <StyledA href={""} reverse={reverse}>Coming soon</StyledA>;
  } else {
    clientLink = (
      <StyledA
        href={link}
        reverse={reverse}
        target="_blank"
        rel="noopener noreferrer">
        {t.visit[currentLang]} {websiteName}
      </StyledA>
    );
  }

  return (
    <StyledCard reverse={reverse}>
      <StyledPhoto src={photo} alt={websiteName} reverse={reverse} />
      {clientLink}
    </StyledCard>
  )
}

export default PortfolioCard;

const t = {
  visit: {
    en: "Visit",
    fr: "Visiter"
  },
}
