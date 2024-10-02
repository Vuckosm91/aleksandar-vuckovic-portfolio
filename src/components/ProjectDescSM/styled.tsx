import styled from "styled-components";
import CoverPhoto from "../../images/projectGames.png";

export const DescPageContainer = styled.div({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100vh",
  background: "#DDDDDD",
  overflow: "hidden",
});

export const DescPageTextContainer = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "red",
});

export const DescPageSecContainer = styled.div({
  display: "flex",
  position: "relative",
  width: "100%",
  height: "100vh",
});

export const DescPageContainer2 = styled.div({
  display: "grid",
  gridTemplateColumns:
    "80px 1fr" /* Prva kolona 80px, druga kolona zauzima ostatak prostora */,
  height: "95vh" /* Pun ekran po visini */,

  "@media (max-width: 780px)": {
    display: "flex",
  },
});

export const DescPageContainer3 = styled.div({
  display: "flex",
  position: "absolute",
  width: "80vw",
  height: "80vh",
  overflow: "hidden",
});

export const GrayContainer6 = styled.div({
  display: "flex",
  height: "18%",
  width: "100vw",
  background: "#A4A4A4",
  alignSelf: "start",
});

export const TextDesc1reg = styled.p({
  fontSize: "16px",
  "@media (min-width: 780px)": {
    fontSize: "22px",
  },
});

export const TextDesc1soft = styled.p({
  fontSize: "16px",
  fontWeight: "275",
  "@media (min-width: 780px)": {
    fontSize: "22px",
  },
});

export const TextDesc1rot = styled.p({
  fontSize: "60px",
  transform: "rotate(90deg)",
  margin: "0",
});

export const RotatedText = styled.div`
  writing-mode: vertical-rl; /* Vertikalno ispisivanje teksta */
  text-orientation: mixed; /* Omogućava normalan prikaz slova */
  font-size: 60px;
  display: flex;
  align-items: center; /* Vertikalno centriranje */
  justify-content: start; /* Horizontalno centriranje */
  padding-inline: 5rem;
  @media (max-width: 780px) {
    width: 5%;
    height: 100%;
    background: "#A4A4A4";
  }
`;

export const ContainerInner = styled.div({
  position: "absolute",
  display: "flex",
  flexDirection: "column-reverse",
  justifyContent: "start",
  width: "90%",
  height: "90vh",
  paddingInline: "1rem",
  "@media (min-width: 780px)": {
    top: "-10%",
    paddingTop: "3rem",
    flexDirection: "column",
  },
});

export const ContainerCover = styled.div({
  width: "100%",
  height: "20%",
  backgroundImage: `url(${CoverPhoto})`,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  overflow: "hidden",
});
