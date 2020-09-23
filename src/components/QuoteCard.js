import React from 'react';
import styled from 'styled-components';

const StyledBackground = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 428px 0 0 0;
  padding: 0;
  background: ${props => props.theme.colors.blue};
  overflow: hidden;
  display: flex;
  flex-direction: column;
`

const StyledText = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto auto;
`

const StyledQuoteGroup = styled.div`
  color: ${props => props.theme.colors.white};
  margin-bottom: 130px;
  position: relative;
`

const StyledQuoteSign = styled.p`
  font-family: ${props => props.theme.fonts.overpass};
  margin: 0;
  font-size: 50px;
  font-weight: bold;
  position: absolute;

  &:first-of-type {
    top: -35px;
    left: -13px;
  }

  &:last-of-type {
    bottom: -43px;
    right: -14px;
    transform: rotate(180deg);
  }
`

const StyledQuote = styled.p`
  font-size: 30px;
  margin: 0;
  & span {
    font-family: ${props => props.theme.fonts.overpass};
    font-weight: bold;
  }
`

const StyledLine = styled.div`
  width: 70px;
  border-top: 1px solid ${props => props.theme.colors.white};
`

const StyledAuthor = styled.p`
  color: ${props => props.theme.colors.white};
`

const AgencyIntroCard = () => {
  return (
    <StyledBackground>
      <StyledText>
        <StyledQuoteGroup>
          <StyledQuoteSign>“</StyledQuoteSign>
          <StyledQuote>
            Imagination is the <span>spär(c)k</span><br />
            that ignites the fire of creativity.
          </StyledQuote>
          <StyledQuoteSign>“</StyledQuoteSign>
        </StyledQuoteGroup>

        <StyledLine />
        <StyledAuthor>Richard L. Peterson</StyledAuthor>
      </StyledText>
    </StyledBackground>
  )
}

export default AgencyIntroCard;
