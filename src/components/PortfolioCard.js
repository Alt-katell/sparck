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
`

const StyledPhoto = styled.img`
  width: 550px;
  height: auto;
  position: absolute;
  top: 20px;
  left: ${props => props.reverse ? "null" : "20px"};
  right: ${props => props.reverse ? "20px" : "null"};
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
`

const PortfolioCard = ({reverse, photo, link, websiteName}) => {
  const {langKey: currentLang, slug} = usePageContext();

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
