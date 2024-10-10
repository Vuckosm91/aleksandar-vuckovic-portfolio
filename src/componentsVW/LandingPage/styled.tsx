import styled from "styled-components";
import Logo from "../../images/AVlogo.svg";

export const ScrollContainer = styled.div({
  overflow: "hidden",
});

export const LayoutBox = styled.div({
  position: "relative",
  width: "100vw",
  height: "56.25vw",
  background: "#DDDDDD",
  overflow: "hidden",

  "@media (max-width: 1024px)": {
    height: "133.301vw",
  },

  "@media (max-width: 568px)": {
    height: "222.083vw",
  },
});

export const LogoBox = styled.div({
  width: "49.115vw",
  height: "56.296vh",
  backgroundImage: `url(${Logo})`,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
});

export const LandingPageBox = styled(LayoutBox)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  "@media (max-width: 1024px)": {
    flexDirection: "column-reverse",
  },
});

export const SocialBox = styled.div({
  display: "flex",
  position: "relative",
  flexDirection: "column",
  justifyContent: "center",
  height: "100%",
  gap: "3vw",

  "@media (max-width: 1024px)": {
    flexDirection: "row",
    width: "100%",
    height: "max-content",
  },
});

export const SocialIconBox = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "8.333vw",
  height: "8.333vw",
  background: "#A4A4A4",

  "@media (max-width: 1024px)": {
    flexDirection: "row",
    width: "14.815vw",
    height: "8.333vh",
  },
});

export const GrayBox1 = styled.div({
  display: "flex",
  background: "#A4A4A4",
  height: "51.389vh",
  width: "8.333vw",
  alignItems: "center",
  justifyContent: "center",

  "@media (max-width: 1024px)": {
    flexDirection: "row",
    width: "51.389vw",
    height: "6.333vh",
  },
});

export const LandRotHeadAbs = styled.a({
  position: "absolute",
  right: "-2%",
  top: "45%",
  transformOrigin: "left-top",
  transform: "rotate(90deg)",
  fontSize: "1.563vw",
  fontWeight: "300",
  lineHeight: "2.344vw",
  whiteSpace: "nowrap",

  "@media (max-width: 1024px)": {
    position: "relative",
    transform: "none",
    fontSize: "3.93vw",
    right: "0",
    top: "0",
  },
});
