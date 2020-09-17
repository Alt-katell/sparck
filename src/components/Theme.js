import React from 'react';
import { ThemeProvider } from 'styled-components';

import 'typeface-roboto';
import 'typeface-libre-baskerville';
import 'typeface-overpass';

const theme = {
  colors: {
    black: "#000000",
    grey: "#EBEAEB",
    blue: "#0025E0",
    white: "#ffffff"
  },
  fonts: {
    overpass: "Overpass",
    roboto: "Roboto",
    baskerville: "Libre Baskerville",
  }
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
