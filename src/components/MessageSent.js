import React from 'react';
import styled from 'styled-components';

const StyledText = styled.div`
  width: 500px;
  margin: 180px auto 0 auto;

  @media (min-device-width : 320px) and (max-device-width : 667px) {
    width: 300px;
    margin: 150px auto;
  }
`

const StyledSubText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;

  & h1 {
    font-size: 80px;
    font-family: ${props => props.theme.fonts.baskerville};
    color: ${props => props.theme.colors.blue};
    margin: 12px;

    @media (min-device-width : 320px) and (max-device-width : 667px) {
      text-align: center;
    }
  }

  & p {
    margin: 6px;
  }

  @media (min-device-width : 320px) and (max-device-width : 667px) {
    width: 300px;
    margin: 150px auto;
  }
`


const MessageSent = () => {
  return (
    <StyledText>
      <StyledSubText>
        <h1>Thank you</h1>
        <p>for your message.</p>
        <p>Let's create magic together.</p>
      </StyledSubText>

      <StyledSubText>
        <h1>Merci</h1>
        <p>pour votre message.</p>
        <p>Créons la magie ensemble.</p>
      </StyledSubText>
    </StyledText>
  );
}

export default MessageSent;
