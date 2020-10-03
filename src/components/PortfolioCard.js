import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  width: 720px;
  height: 450px;
  margin: 20px 40px 250px 40px;
  position: relative;
  align-self: ${props => props.reverse ? "flex-end" : "null"};

  @media (min-device-width : 768px) and (max-device-width : 1024px) {
    width: 450px;
    height: 335px;
    margin: 20px 20px 200px 20px;
  }

  @media (min-device-width : 320px) and (max-device-width : 667px) {
    width: 320px;
    margin: 20px auto 50px auto;
  }
`

const StyledWhiteBackground = styled.div`
  display: none;

  @media (min-device-width : 320px) and (max-device-width : 667px) {
    display: ${props => props.reverse ? "none" : "block"};
    background: ${props => props.theme.colors.white};
    width: 100vw;
    height: 480px;
    position: absolute;
    top: -20px;
    left: -25vw;
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

const StyledDescription = styled.div`
  position: absolute;
  bottom: -140px;
  left: ${props => props.reverse ? "-35px" : "15px"};
  display: flex;

  @media (min-device-width : 768px) and (max-device-width : 1024px) {
    bottom: -90px;
    left: ${props => props.reverse ? "60px" : "15px"};
    flex-wrap: wrap;
  }

  @media (min-device-width : 320px) and (max-device-width : 667px) {
    flex-direction: column;
    left: 15px;
    top: 215px;
  }
`

const StyledGroup = styled.div`
  margin: 0 12px;

  & div {
    display: flex;
    align-items: center;
  }

  & h3 {
    font-size: 16px;
    white-space: nowrap;
    margin: 8px 0;
  }

  & p {
    white-space: nowrap;
    margin: 0 0 0 22px;
  }
`

const StyledDots = styled.div`
  display: flex;
  margin: 0 4px 0 0;
  height: 5px;


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


const StyledA = styled.a`
  position: absolute;
  bottom: -42px;
  right: ${props => props.reverse ? "null" : "-95px"};
  left: ${props => props.reverse ? "-95px" : "null"};
  writing-mode: vertical-rl;
  font-weight: bold;
  color: ${props => props.theme.colors.blue};
  font-size: 28px;

  &:hover {
    color: ${props => props.theme.colors.black};
  }

  @media (min-device-width : 768px) and (max-device-width : 1024px) {
    right: ${props => props.reverse ? "null" : "-80px"};
    left: ${props => props.reverse ? "-80px" : "null"};
    bottom: 35px;
  }

  @media (min-device-width : 320px) and (max-device-width : 667px) {
    right: ${props => props.reverse ? "null" : "20px"};
    left: ${props => props.reverse ? "20px" : "null"};
    top: 180px;
    font-size: 24px;
    writing-mode: horizontal-tb;
  }
`

const PortfolioCard = ({reverse, photo, link, websiteName, description}) => {
  let projectDescription = description.map((item, index) => {
    return (
      <StyledGroup key={index}>
        <div>
          <StyledDots>
            <div />
            <div />
          </StyledDots>
          <h3>{item.title}</h3>
        </div>
        <p>{item.text}</p>
      </StyledGroup>
    );
  })

  return (
    <StyledCard reverse={reverse}>
      <StyledWhiteBackground reverse={reverse} />
      <StyledPhoto src={photo} alt={websiteName} reverse={reverse} />
      <StyledDescription reverse={reverse}>
        {projectDescription}
      </StyledDescription>
      <StyledA
        href={link}
        reverse={reverse}
        target="_blank"
        rel="noopener noreferrer">
        {websiteName}
      </StyledA>
    </StyledCard>
  )
}

export default PortfolioCard;
