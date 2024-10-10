import styled from "styled-components";

export const ContactLayout = styled.div({
  display: "flex",
  position: "relative",
  justifyContent: "start",
  alignItems: "center",
  background:
    "linear-gradient(-90deg, rgba(164,164,164,1) 15%, rgba(221,221,221,1) 15%)",
  height: "56.25vw",
  width: "100vw",

  "@media (max-width: 1024px)": {
    height: "133.301vw",
  },

  "@media (max-width: 568px)": {
    flexDirection: "column",
    height: "222.083vw",
    background:
      "linear-gradient(180deg, rgba(164,164,164,1) 20%, rgba(221,221,221,1) 20%)",
  },
});

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 61.146vw;
  padding: 20px;
  margin-left: 10%;
  border-radius: 5px;

  @media (max-width: 1024px) {
  }

  @media (max-width: 568px) {
    margin-inline: 15vw;
    margin-top: 35vw;
    width: 90vw;
  }
`;

export const Label = styled.label`
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

export const Input = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  font-size: 16px;
  color: #000000;
  border: 1px solid #A4A4A4;
  border-radius: 5px;
  background: #DDDDDD;

    &:focus {
    outline: none;
    border-color: #007BFF;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    caret-color: #007BFF; /* Boja kursora */
`;

export const Textarea = styled.textarea`
  margin-bottom: 15px;
  padding: 10px;
  height: 20vw;
  font-size: 16px;
  border: 1px solid #A4A4A4;
  border-radius: 5px;
  background: #DDDDDD;

   &:focus {
    outline: none;
    border-color: #007BFF;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    caret-color: #007BFF; /* Boja kursora */
`;

export const ButtonContact = styled.button`
  padding: 15px 25px;
  width: 100%;
  font-size: 16px;
  color: #000000;
  background-color: #dddddd;
  border: 1px solid #a4a4a4;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
    color: #dddddd;
  }
`;

export const ButtonContainer = styled.div({
  display: "flex",
  justifyContent: "space-between",
  gap: "5vw",
});

export const RotatedContactAbs = styled.h1({
  position: "absolute",
  right: "-5%",
  top: "50%",
  transformOrigin: "left-top",
  transform: "rotate(90deg)",
  fontSize: "4.167vw",
  fontWeight: "300",
  lineHeight: "6.25vw",
  whiteSpace: "nowrap",

  "@media (max-width: 568px)": {
    position: "relative",
    right: "0",
    top: "0",
    transform: "none",
    marginTop: "25vw",
    fontSize: "12.5vw",
  },
});
