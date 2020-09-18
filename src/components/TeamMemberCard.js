import React from 'react';
import styled from 'styled-components';

const StyledRectangle = styled.div`

`

const StyledPhoto = styled.img`
  width: 245px;
  height: auto;
`

const StyledText = styled.div`

`

const StyledName = styled.h2`

`

const StyledRole = styled.h3`

`

const StyledDot = styled.div`

`

const StyledDescription = styled.p`

`

const StyledPortfolioLink = styled.a`

`

const TeamMemberCard = ({photo, name, role1, role2, description, portfolio}) => {
  return (
    <StyledRectangle>
      <StyledPhoto src={photo} alt={name} />
      <StyledText>
        <StyledName>{name}</StyledName>
        <StyledRole>
          <p>{role1}</p>
          <StyledDot /><StyledDot />
          <p>{role2}</p>
        </StyledRole>
        <StyledDescription>{description}</StyledDescription>
        <StyledPortfolioLink>{portfolio}</StyledPortfolioLink>
      </StyledText>
    </StyledRectangle>
  )
}

export default TeamMemberCard;
