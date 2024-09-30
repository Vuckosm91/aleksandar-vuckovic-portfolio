import styled from "styled-components";
import picture from "../../images/aleksandar.png";
import { FlexContainerColumn } from "../LandingPage/styled";

export const GrayContainer = styled.div({
  height: "100vh",
  width: "20vw",
  background: "#A4A4A4",
  "@media (max-width: 1024px)": {
    height: "15vh",
    width: "100%",
  },
});

export const ContentAboutContainer = styled.div({
  height: "100vh",
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  "@media (max-width: 1024px)": {
    flexDirection: "column-reverse",
    alignItems: "center",
  },
});

export const ContentPlaceholder = styled.div({
  display: "flex",
  height: "100vh",
  width: "60%",
  "@media (max-width: 1024px)": {
    height: "20vh",
    width: "100%",
  },
});

export const TextContainer = styled(FlexContainerColumn)({
  width: "80%",
  padding: "8rem",
  "@media (max-width: 1024px)": {
    padding: "2rem",
    width: "80%",
  },
});

export const ContentText = styled.p({
  fontSize: "30px",
  "@media (max-width: 1024px)": {
    fontSize: "24px",
  },
  "@media (max-width: 768px)": {
    fontSize: "20px",
  },
  "@media (max-width: 630px)": {
    fontSize: "18px",
  },
});

export const PictureContainer = styled.div({
  position: "absolute",
  top: "0%",
  left: "0%",
  height: "100vh",
  width: "45%",
  backgroundImage: `url(${picture})`,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "bottom",
  overflow: "hidden",
  "@media (max-width: 1024px)": {
    height: "40vh",
    width: "100%",
    left: "0",
    top: "60%",
  },
  "@media (max-width: 480px)": {
    height: "30vh",
    top: "70%",
  },
  "@media (max-width: 320px)": {
    display: "none",
  },
});
