import React from 'react';
import styled from 'styled-components';

import { usePageContext } from '../context/pageContext';

const StyledRectangle = styled.div`
  width: 800px;
  background: ${props => props.theme.colors.white};
  margin: 130px auto;
  padding: 25px 25px;
  display: flex;
  flex-direction: ${props => props.reverse ? "row-reverse" : null};

  &:last-of-type {
    margin-bottom: 100px;
  }

  @media (min-device-width : 768px) and (max-device-width : 1024px) {
    margin: 100px -10px;
    width: 650px;
  }

  @media (min-device-width : 320px) and (max-device-width : 667px) {
    width: 270px;
    flex-direction: column;
    align-items: center;

    &:last-of-type {
      margin-bottom: 100px;
    }
  }
`

// this is to correct bug of safari, img stretching when in flexbox
const StyledPhotoContainer = styled.div`
  display: flex;
  align-items: flex-start;
`

const StyledPhoto = styled.img`
  width: 295px;
  height: auto;
  margin-right: ${props => props.reverse ? null : "45px"};
  margin-left: ${props => props.reverse ? "45px" : null};
  display: flex;
  align-items: flex-start;

  @media (min-device-width : 768px) and (max-device-width : 1024px) {
    width: 250px;
  }

  @media (min-device-width : 320px) and (max-device-width : 667px) {
    width: 200px;
    margin: 0;
  }
`

const StyledText = styled.div`

`

const StyledName = styled.h2`
  font-family: ${props => props.theme.fonts.baskerville};
  font-size: 48px;
  color: ${props => props.theme.colors.blue};
  margin: 62px ${props => props.reverse ? "-60px" : "0"} 5px ${props => props.reverse ? "0" : "-60px"};
  text-align: ${props => props.reverse ? "right" : null};

  @media (min-device-width : 768px) and (max-device-width : 1024px) {
    margin-top: 0;
    font-size: 38px;
  }

  @media (min-device-width : 320px) and (max-device-width : 667px) {
    margin: 0;
    text-align: center;
    margin-top: -325px;
    margin-bottom: 305px;
    font-size: 25px;
  }
`

const StyledRole = styled.div`
  display: flex;
  align-items: center;

  & p {
    margin: 0;
    font-size: 22px;
  }

  @media (min-device-width : 768px) and (max-device-width : 1024px) {
    flex-direction: column;
    align-items: center;

    & p {
      font-size: 24px;
    }
  }

  @media (min-device-width : 320px) and (max-device-width : 667px) {
    flex-direction: column;
    align-items: center;

    & p {
      font-size: 17px;
    }
  }
`

const StyledDots = styled.div`
  display: flex;
  margin: 0 4px;

  & div {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: ${props => props.theme.colors.black};
    margin: 0 2px;
  }

  @media (min-device-width : 768px) and (max-device-width : 1024px) {
    margin: 4px 0;
  }

  @media (min-device-width : 320px) and (max-device-width : 667px) {
    margin: 8px 0;
  }
`

const StyledDescription = styled.p`
  text-align: justify;
  text-justify: inter-word;
  margin: 6px 0;

  &:first-of-type {
    margin-top: 18px;
  }
  &:last-of-type {
    margin-bottom: 18px;
  }

  @media (min-device-width : 768px) and (max-device-width : 1024px) {
    text-align: left;
  }

  @media (min-device-width : 320px) and (max-device-width : 667px) {
    text-align: left;
  }
`

const StyledPortfolio = styled.a`
  color: #686B72;

  &:hover {
    font-weight: bold;
  }
`

const TeamMemberCard = ({reverse, id, photo, name, role1, role2, description1, description2, description3, portfolio}) => {
  const {langKey: currentLang} = usePageContext();

  return (
    <StyledRectangle id={id} reverse={reverse}>
      <StyledPhotoContainer>
        <StyledPhoto src={photo} alt={name} reverse={reverse} />
      </StyledPhotoContainer>
      <StyledText>
        <StyledName reverse={reverse}>{name}</StyledName>
        <StyledRole>
          <p>{role1}</p>
          <StyledDots>
            <div />
            <div />
          </StyledDots>
          <p>{role2}</p>
        </StyledRole>
        <StyledDescription>{description1}</StyledDescription>
        <StyledDescription>{description2}</StyledDescription>
        <StyledDescription>{description3}</StyledDescription>
        <StyledPortfolio
          href={portfolio}
          target="_blank"
          rel="noopener noreferrer">
          {currentLang === "en" ? "See her portfolio" : "Voir son portfolio"}
        </StyledPortfolio>
      </StyledText>
    </StyledRectangle>
  )
}

export default TeamMemberCard;
