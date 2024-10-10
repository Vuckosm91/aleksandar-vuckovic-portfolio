import styled from "styled-components";
import Photo from "../../images/building.webp";

export const AboutSecLayout = styled.div({
  display: "flex",
  position: "relative",
  flexDirection: "column",
  background: "#DDDDDD",
  height: "56.25vw",
  width: "100vw",

  "@media (max-width: 1024px)": {
    height: "133.301vw",
    background:
      "linear-gradient(90deg, rgba(221,221,221,1) 80%, rgba(164,164,164,1) 80%)",
  },

  "@media (max-width: 568px)": {
    height: "222.083vw",
    background:
      "linear-gradient(90deg, rgba(221,221,221,1) 90%, rgba(164,164,164,1) 90%)",
  },
});

export const FlexRowBox100 = styled.div({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  height: "100%",
});

export const AboutSecTextBox = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "50vw",
  padding: "5vw",
  height: "100%",

  "@media (max-width: 1024px)": {
    width: "70vw",
    paddingLeft: "5vw",
    justifyContent: "start",
  },

  "@media (max-width: 568px)": {
    width: "80vw",
    paddingLeft: "5vw",
  },
});

export const GrayBox3 = styled.div({
  display: "flex",
  width: "100%",
  height: "10vh",
  background: "#A4A4A4",

  "@media (max-width: 1024px)": {
    height: "44.824vw",
  },
});

export const GrayBox4 = styled.div({
  display: "flex",
  width: "19.479vw",
  height: "100%",
  background: "#A4A4A4",

  "@media (max-width: 768px)": {
    width: "100%",
    height: "19.479vh",
  },
});

export const BuildingPhoto = styled.image({
  position: "absolute",
  width: "90vw",
  height: "95vh",
  backgroundImage: `url(${Photo})`,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "bottom",
  bottom: "0",
  left: "40vw",
  "@media (max-width: 1024px)": {
    height: "100vW",
    width: "95vw",
    backgroundSize: "cover",
    bottom: "0",
    left: "40vw",

    "@media (max-width: 568px)": {
      height: "70vW",
      backgroundSize: "contain",
    },
  },
});
