import styled, { createGlobalStyle } from "styled-components";

export const theme = {
    headingFont: `"Comfortaa", cursive`,
    bodyFont: `"Roboto", Helvetica, sans-serif`,
    bodyFontColor: "#FFF",
    headingFontColor: "#FFF",
    h1FontSize: "44px",
    h2FontSize: "32px",
    h3FontSize: "26px",
    h4FontSize: "24px",
    bodyFontSize: "18px",
    smallFontSize: "15px",
    skinnyWindowSize: "414px",
    tabletSize: "768px",
    smallLaptopSize: "1024px",
    desktopSize: "1200px",
}

export const SiteBkg = styled.div`
    // background: linear-gradient(to left bottom, #66f49e, #51e7aa, #45dab2, #46ccb5, #50bdb4);
    // background-color: #50BDB4;
`
export const GlobalStyles = createGlobalStyle`
  body {
    background: #50BDB4;
    transition: all 0.50s linear;
  }
`
