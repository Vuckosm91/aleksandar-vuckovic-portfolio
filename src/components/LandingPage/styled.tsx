import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import styled from "styled-components";
import Logo from "../../images/AVlogo.svg";
import { FlexContainerAboutSec } from "../AboutSec/styled";

export const FacebookIcon = styled(FaFacebook)({
  width: "3rem",
  height: "3rem",

  "@media (max-width: 768px)": {
    width: "1.5rem",
    height: "1.5rem",
  },
});

export const InstagramIcon = styled(FaInstagram)({
  width: "3rem",
  height: "3rem",

  "@media (max-width: 768px)": {
    width: "1.5rem",
    height: "1.5rem",
  },
});

export const GitHubIcon = styled(FaGithub)({
  width: "3rem",
  height: "3rem",

  "@media (max-width: 768px)": {
    width: "1.5rem",
    height: "1.5rem",
  },
});

export const ScrollContainer = styled.div({
  overflow: "hidden",
});

export const PageContainer = styled.div({
  position: "relative",
  width: "100%",
  height: "100vh",
  background: "#DDDDDD",
  overflow: "hidden",
});

export const FlexContainer = styled.div({
  display: "flex",
});

export const FlexContainerColumn = styled(FlexContainer)({
  flexDirection: "column",
});

export const FlexContainerAboutSecMin = styled(FlexContainerAboutSec)({
  "@media (max-width: 1024px)": {
    flexDirection: "row",
    alignItems: "end",
  },
});

export const FlexContainerRow = styled(FlexContainer)({
  flexDirection: "row",
});

export const AboutFirstContainer = styled(FlexContainer)({
  width: "100%",
  height: "100%",
  flexDirection: "row",

  "@media (max-width: 1024px)": {
    flexDirection: "column-reverse",
    alignItems: "center",
  },
});

export const FlexContainerMax = styled(FlexContainer)({
  height: "100%",

  justifyContent: "center",
  alignItems: "center",
  "@media (max-width: 768px)": {
    flexDirection: "column-reverse",
    justifyContent: "space-between",
  },
});

export const SocialContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "8rem",
  height: "50vh",
  marginRight: "1rem",
  gap: "2rem",
  "@media (max-width: 1900px)": {
    height: "35vh",
    gap: "2rem",
  },
  "@media (max-width: 1024px)": {
    width: "10%",
    height: "30vh",
    gap: "2rem",
  },
  "@media (max-width: 768px)": {
    flexDirection: "row",
    width: "90%",
    height: "3rem",
    gap: "2rem",
    marginRight: "0",
  },
});

export const SocialIconContainer = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#A4A4A4",
  padding: "1rem",
});

export const LogoContainer = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  overflow: "hidden",
});

export const ContactContainer = styled.div({
  width: "10rem",
  height: "50vh",
  background: "#A4A4A4",
  color: "#000000",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "@media (max-width: 768px)": {
    height: "7vh",
    width: "80vw",
  },
});

export const ContactBoxText = styled.div({
  fontSize: "20px",
  transform: "rotate(90deg)",
  whiteSpace: "nowrap",
  fontFamily: "'Poppins', sans-serif",
  "@media (min-width: 768px)": {
    fontSize: "25px",
  },
  "@media (min-width: 1024px)": {
    fontSize: "30px",
  },
  "@media (max-width: 768px)": {
    transform: "none",
  },
});

export const LogoImage = styled.div({
  width: "90%",
  height: "55vh",
  backgroundImage: `url(${Logo})`,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",

  "@media (max-width: 768px)": {
    margin: "1rem",
  },
});
