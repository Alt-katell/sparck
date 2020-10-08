import React from 'react';
import styled from 'styled-components';

import { usePageContext } from '../context/pageContext';

const StyledBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${props => props.theme.colors.blue};
  overflow: hidden;
  display: flex;
  flex-direction: column;

  @media (min-device-width : 768px) and (max-device-width : 1024px) {
    height: 600px;
  }

  @media (min-device-width : 320px) and (max-device-width : 667px) {
    height: 400px;
    padding: 50px 0;
    margin: 200px 0 0 0;
  }
`

const StyledText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto auto;

  @media (min-device-width : 320px) and (max-device-width : 667px) {
    width: 250px;
  }
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

    @media (min-device-width : 320px) and (max-device-width : 667px) {
      top: -42px;
    }
  }

  &:last-of-type {
    bottom: -43px;
    right: -14px;
    transform: rotate(180deg);

    @media (min-device-width : 320px) and (max-device-width : 667px) {
      right: 77px;
    }
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
  const {langKey: currentLang} = usePageContext();

  return (
    <StyledBackground margin={currentLang}>
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
