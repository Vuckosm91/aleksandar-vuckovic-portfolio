import {
  Form,
  Input,
  Textarea,
  ButtonContact,
  ContactLayout,
  ButtonContainer,
  RotatedContactAbs,
} from "./styled";

const ContactForm = () => {
  return (
    <ContactLayout>
      <RotatedContactAbs>Contact me</RotatedContactAbs>
      <Form>
        <Input type="text" name="user_name" placeholder="name" required />
        <Input type="email" name="user_email" placeholder="mail" required />
        <Textarea name="message" placeholder="message" required />
        <ButtonContainer>
          <ButtonContact>Reset</ButtonContact>
          <ButtonContact type="submit">Send</ButtonContact>
        </ButtonContainer>
      </Form>
    </ContactLayout>
  );
};

export default ContactForm;
