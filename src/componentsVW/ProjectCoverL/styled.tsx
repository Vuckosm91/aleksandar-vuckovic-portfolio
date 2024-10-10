import styled from "styled-components";
import Photo from "../../images/projectGames.webp";

export const ProjectCoverLayout = styled.div({
  display: "flex",
  position: "relative",
  alignItems: "center",
  justifyContent: "center",
  background:
    "linear-gradient(90deg, rgba(164,164,164,1) 20%, rgba(221,221,221,1) 20%)",
  height: "56.25vw",
  width: "100vw",
});

export const ProjectPhoto = styled.image({
  position: "relative",
  width: "76.563vw",
  height: "42.969vw",
  marginLeft: "5vw",
  backgroundImage: `url(${Photo})`,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
});

export const RotatedHeadline = styled.h1({
  transformOrigin: "left-top",
  transform: "rotate(90deg)",
  fontSize: "4.167vw",
  fontWeight: "200",
  lineHeight: "6.25vw",
  whiteSpace: "nowrap",
});

export const ProjectCoverLayoutSm = styled.div({
  display: "flex",
  flexDirection: "column",
  position: "relative",
  alignItems: "center",
  background: "rgba(221,221,221,1)",
  height: "56.25vw",
  width: "100vw",
});

export const ProjectCoverGrayBox = styled.div({
  display: "flex",
  width: "100%",
  height: "10vw",
  background: "#A4A4A4",
  alignItems: "center",
});

export const ProjectCoverH1 = styled.h1({
  paddingInline: "10vw",
  fontSize: "4.167vw",
  fontWeight: "200",
});

export const ProjectCoverTextBox = styled.div({
  display: "flex",
  position: "relative",
  alignItems: "center",
  justifyContent: "end",
  paddingRight: "5vw",
  width: "100%",
  height: "100%",
});

export const ProjectCoverPreg = styled.p({
  display: "flex",
  width: "33%",
  marginRight: "5vw",
  fontSize: "1.563vw",
  lineHeight: "2.344vw",
});

export const ProjectCoverProt = styled.p({
  position: "absolute",
  left: "0",
  bottom: "40%",
  transform: "rotate(90deg)",
  fontSize: "1.563vw",
  lineHeight: "2.344vw",
  whiteSpace: "nowrap",
});
