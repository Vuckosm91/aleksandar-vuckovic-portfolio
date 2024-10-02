import styled from "styled-components";
import projectCover from "../../images/projectGames.png";

export const GrayContainer4 = styled.div({
  display: "flex",
  height: "100dvh",
  width: "20vw",
  background: "#A4A4A4",
  alignSelf: "start",
});

export const ProjectCoverPhoto = styled.div({
  position: "absolute",
  right: "0%",
  bottom: "0",
  top: "10%",
  left: "10%",
  height: "80dvh",
  width: "80%",
  backgroundImage: `url(${projectCover})`,
  backgroundSize: "contain", // I dalje popunjava kontejner bez izobličavanja
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  overflow: "hidden", // Sakriva delove slike koji prelaze granice
});
