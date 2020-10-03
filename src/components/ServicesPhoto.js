import React from 'react';
import styled from 'styled-components';

import { usePageContext } from '../context/pageContext';

const StyledServicesPhoto = styled.div`
  margin: 30px auto;
  width: 400px;
  position: relative;
  z-index: 2;

  @media (min-device-width : 320px) and (max-device-width : 667px) {
    width: 250px;
  }
`

const StyledText = styled.p`
  font-family: ${props => props.theme.fonts.baskerville};
  font-weight: bold;
  font-size: 75px;
  transform: rotate(-90deg);
  color: ${props => props.theme.colors.blue};
  margin: 0;
  white-space: nowrap;
  position: absolute;
  top: 195px;
  right: 233px;
  z-index: 1;

  @media (min-device-width : 320px) and (max-device-width : 667px) {
    right: 112px;
    top: 145px;
    font-size: 60px;
  }
`

const StyledPhoto = styled.img`
  width: 400px;
  height: auto;
  display: block;
  right: -15px;
  position: absolute;
  z-index: 2;

  @media (min-device-width : 320px) and (max-device-width : 667px) {
    width: 250px;
    right: -15px;
  }
`

const ServicesPhoto = () => {
  const {langKey: currentLang} = usePageContext();

  return (
     <StyledServicesPhoto data-sal="slide-up" data-sal-delay="100" data-sal-easing="ease" data-sal-duration="1000">
       <StyledPhoto src="/images/sparck-clouds.jpg" alt="Clouds" />
       <StyledText>{t.weCode[currentLang]}</StyledText>
     </StyledServicesPhoto>
  );
}

export default ServicesPhoto;

const t = {
  weCode: {
    en: "We code",
    fr: "On code"
  },
}
