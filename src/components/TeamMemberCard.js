import React from 'react';
import styled from 'styled-components';

const StyledRectangle = styled.div`
  width: 800px;
  background: ${props => props.theme.colors.white};
  margin: 130px auto;
  padding: 25px 25px;
  display: flex;
  flex-direction: ${props => props.reverse ? "row-reverse" : null};

  &:last-of-type {
    margin-bottom: 50px;
  }

  @media (min-device-width : 768px) and (max-device-width : 1024px) {
    margin: 100px -10px;
  }

  @media (min-device-width : 320px) and (max-device-width : 667px) {
    width: 270px;
    height: 660px;
    flex-direction: column;
    align-items: center;

    &:last-of-type {
      margin-bottom: 100px;
    }
  }
`

const StyledPhoto = styled.img`
  width: 295px;
  height: auto;
  margin-right: ${props => props.reverse ? null : "45px"};
  margin-left: ${props => props.reverse ? "45px" : null};

  @media (min-device-width : 320px) and (max-device-width : 667px) {
    width: 200px;
    height: auto;
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

  & p {
    margin: 0;
    font-size: 22px;
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
  margin-top: 8px;

  & div {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: ${props => props.theme.colors.black};
    margin: 0 2px;
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
  return (
    <StyledRectangle id={id} reverse={reverse}>
      <StyledPhoto src={photo} alt={name} reverse={reverse} />
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
        <StyledPortfolio href={portfolio}>See her portfolio</StyledPortfolio>
      </StyledText>
    </StyledRectangle>
  )
}

export default TeamMemberCard;
