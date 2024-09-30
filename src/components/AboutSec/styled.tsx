import styled from "styled-components";
import building from "../../images/building.png";

export const BuildingPicContainer = styled.div({
  position: "absolute",
  right: "0%",
  height: "100vh",
  width: "50%",
  backgroundImage: `url(${building})`,
  backgroundSize: "cover", // I dalje popunjava kontejner bez izobličavanja
  backgroundRepeat: "no-repeat",
  backgroundPosition: "left",
  overflow: "hidden", // Sakriva delove slike koji prelaze granice
  "@media (max-width: 1440px)": {
    backgroundPosition: "left",
    right: "0%",
    width: "70%",
  },
  "@media (max-width: 1024px)": {
    backgroundPosition: "left",
    right: "0%",
    width: "80%",
  },
});

export const GrayContainer2 = styled.div({
  height: "10vh",
  width: "100%",
  background: "#A4A4A4",
  "@media (max-width: 1024px)": {
    height: "25vh",
    width: "110%",
    "@media (max-width: 630px)": {
      height: "15vh",
    },
  },
});

export const GrayContainer3 = styled.div({
  display: "none",
  "@media (max-width: 1024px)": {
    display: "flex",
    background: "#A4A4A4",
    height: "100vh",
    width: "10vw",
  },
  "@media (max-width: 630px)": {
    width: "10%",
    background: "#A4A4A4",
  },
});

export const FlexContainerAboutSec = styled.div({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100vh",
  justifyContent: "space-between",
  "@media (max-width: 1024px)": {
    width: "90%",
  },
});

export const FlexContainerAboutSecText = styled.div({
  display: "flex",
  flexDirection: "column",
  width: "60%",
  height: "60%",
  padding: "5rem",
  justifyContent: "center",
  alignItems: "start",
  "@media (max-width: 1024px)": {
    width: "50%",
    alignSelf: "start",
  },
  "@media (max-width: 630px)": {
    width: "80%",
    padding: "3rem",
  },
});
