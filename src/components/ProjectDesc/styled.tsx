import styled from "styled-components";

export const GrayContainer5 = styled.div({
  display: "flex",
  height: "18%",
  width: "100vw",
  background: "#A4A4A4",
  alignSelf: "start",
  alignItems: "center",
});

export const DescriptionWrapper = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100%",
  height: "100%",
});

export const TextBanner = styled.h2({
  fontSize: "80px",
  fontWeight: "400",
  marginInline: "11rem",
});

export const TextContainerDesc = styled.div({
  display: "flex",
  alignItems: "start",
  justifyContent: "center",
  width: "30%",
});

export const TextContainerDescRot = styled(TextContainerDesc)({
  paddingTop: "8rem",
});

export const TextDescReg = styled.p({
  fontSize: "28px",
});

export const TextDescRot = styled.p({
  fontSize: "30px",
  transform: "rotate(90deg)",
});
