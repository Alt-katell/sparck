import React, { useEffect } from 'react';
import styled from 'styled-components';
import { navigate } from 'gatsby';

const StyledBackground = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  background: ${props => props.theme.colors.blue};
  overflow: hidden;
`

const HomePage = () => {
  useEffect(() => {
    setTimeout(navigate("/about"), 7000);
  }, []);


  return (
    <StyledBackground />
  )
}

export default HomePage;
