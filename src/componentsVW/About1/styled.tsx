import styled from "styled-components";
import Photo from "../../images/aleksandar.webp";

export const AboutFirstBox = styled.div({
  display: "flex",
  position: "relative",
  justifyContent: "start",
  alignItems: "center",
  height: "56.25vw",
  width: "100vw",

  background:
    "linear-gradient(to right, #A4A4A4 20%, #A4A4A4 20%,#000000 20%,#DDDDDD 20%,#DDDDDD 100%)",

  "@media (max-width: 1024px)": {
    flexDirection: "column-reverse",
    height: "133.301vw",
    background:
      "linear-gradient(180deg, rgba(221,221,221,1) 80%, rgba(164,164,164,1) 80%)",
  },

  "@media (max-width: 568px)": {
    flexDirection: "column-reverse",
    height: "222.083vw",
  },
});

export const AboutTextBox = styled.div({
  width: "42.9vw",
  marginRight: "10%",

  "@media (max-width: 1024px)": {
    width: "80%",
    marginTop: "25%",
    marginRight: "0",
  },
});

export const AboutText = styled.p({
  fontSize: "1.563vw",
  lineHeight: "2.344vw",
  fontWeight: "300",
  margin: "1vw",
  "@media (max-width: 1024px)": {
    fontSize: "2.539vw",
    lineHeight: "3.809vw",
  },
  "@media (max-width: 568px)": {
    fontSize: "4.167vw",
    lineHeight: "6.25vw",
  },
});

export const AboutTextLight = styled.p({
  fontSize: "1.563vw",
  lineHeight: "2.344vw",
  fontWeight: "200",
  "@media (max-width: 1024px)": {
    fontSize: "2.539vw",
    lineHeight: "3.809vw",
  },
  "@media (max-width: 568px)": {
    fontSize: "4.167vw",
    lineHeight: "6.25vw",
  },
});

export const AboutPhoto = styled.image({
  position: "relative",
  width: "45.313vw",
  height: "95vh",
  alignSelf: "end",
  backgroundImage: `url(${Photo})`,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "bottom",
  "@media (max-width: 1024px)": {
    height: "56.69vh",
    alignSelf: "center",
  },
});
