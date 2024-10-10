import styled from "styled-components";

export const ContactLayout = styled.div({
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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #a4a4a4;
  border-radius: 5px;

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 425px) {
    width: 80%;
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
  border: 1px solid #ccc;
  border-radius: 5px;

    &:focus {
    outline: none;
    border-color: #007BFF;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    caret-color: #007BFF; /* Boja kursora */
`;

export const Textarea = styled.textarea`
  margin-bottom: 15px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;

   &:focus {
    outline: none;
    border-color: #007BFF;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    caret-color: #007BFF; /* Boja kursora */
`;

export const ButtonContact = styled.button`
  padding: 10px 15px;
  font-size: 16px;
  color: white;
  background-color: #a4a4a4;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
