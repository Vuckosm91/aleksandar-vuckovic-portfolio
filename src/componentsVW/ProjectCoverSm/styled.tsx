import styled from "styled-components";
import Photo from "../../images/projectGames.webp";

export const ProjectCoverSmLayout = styled.div({
  display: "flex",
  position: "relative",
  justifyContent: "end",
  background:
    "linear-gradient(180deg, rgba(164,164,164,1) 20%, rgba(221,221,221,1) 20%)",
  height: "56.25vw",
  width: "100vw",

  "@media (max-width: 1024px)": {
    height: "133.301vw",
  },

  "@media (max-width: 568px)": {
    height: "222.083vw",
    background:
      "linear-gradient(90deg, rgba(164,164,164,1) 10%, rgba(221,221,221,1) 10%)",
  },
});

export const ProjectCoverDescBox = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  width: "80vw",
  marginRight: "3vw",

  "@media (max-width: 568px)": {
    width: "90vw",
    flexDirection: "column-reverse",
    justifyContent: "space-around",
    marginRight: "0",
  },
});

export const ProjectPhotoSm = styled.image({
  position: "relative",
  width: "76.563vw",
  height: "42.969vw",
  backgroundImage: `url(${Photo})`,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
});

export const RotatedHeadlineAbs = styled.h1({
  position: "absolute",
  left: "-5%",
  top: "50%",
  transformOrigin: "left-top",
  transform: "rotate(90deg)",
  fontSize: "4.167vw",
  fontWeight: "200",
  lineHeight: "6.25vw",
  whiteSpace: "nowrap",

  "@media (max-width: 568px)": {
    display: "none",
  },
});
