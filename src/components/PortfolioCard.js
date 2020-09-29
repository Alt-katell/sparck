import React from 'react';
import styled from 'styled-components';

import { usePageContext } from '../context/pageContext';

const StyledRectangle = styled.div`
  width: 650px;
  height: 400px;
  background: ${props => props.theme.colors.white};
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
  width: 550px;
  height: auto;
  position: absolute;
  top: 20px;
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
  bottom: 5px;
  right: ${props => props.reverse ? "null" : "-60px"};
  left: ${props => props.reverse ? "-60px" : "null"};
  font-weight: bold;
  color: ${props => props.theme.colors.blue};
  font-size: 28px;

  &:hover {
    color: ${props => props.theme.colors.black};
  }

  @media (min-device-width : 320px) and (max-device-width : 667px) {
    right: ${props => props.reverse ? "null" : "4px"};
    left: ${props => props.reverse ? "4px" : "null"};
    bottom: -12px;
    font-size: 24px;
  }
`

const PortfolioCard = ({reverse, photo, link, websiteName}) => {
  const {langKey: currentLang} = usePageContext();

  return (
    <StyledRectangle reverse={reverse}>
      <StyledPhoto src={photo} alt={websiteName} reverse={reverse} />
      <StyledA href={link} reverse={reverse}>{t.visit[currentLang]} {websiteName}</StyledA>
    </StyledRectangle>
  )
}

export default PortfolioCard;

const t = {
  visit: {
    en: "Visit",
    fr: "Visiter"
  },
}
