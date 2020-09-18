import React from 'react';
import styled from 'styled-components';

const StyledRectangle = styled.div`
  width: 660px;
  height: 360px;
  background: ${props => props.theme.colors.white};
  margin: 50px auto;
  padding: 25px 30px;
  display: flex;
  flex-direction: ${props => props.reverse ? "row-reverse" : null};
`

const StyledPhoto = styled.img`
  width: 245px;
  height: auto;
  margin-right: ${props => props.reverse ? null : "45px"};
  margin-left: ${props => props.reverse ? "45px" : null};
`

const StyledText = styled.div`

`

const StyledName = styled.h2`
  font-family: ${props => props.theme.fonts.baskerville};
  font-size: 55px;
  color: ${props => props.theme.colors.blue};
  margin: 25px ${props => props.reverse ? "-60px" : "0"} 0 ${props => props.reverse ? "0" : "-60px"};
  text-align: ${props => props.reverse ? "right" : null};
`

const StyledRole = styled.div`
  display: flex;

  & p {
    margin: 0 9px;
    font-size: 20px;
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
`

const TeamMemberCard = ({reverse, photo, name, role1, role2, description1, description2, description3, portfolio}) => {
  return (
    <StyledRectangle reverse={reverse}>
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
        <a href={portfolio}>See her portfolio</a>
      </StyledText>
    </StyledRectangle>
  )
}

export default TeamMemberCard;
